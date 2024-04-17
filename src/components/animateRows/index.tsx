import React, { useState, useLayoutEffect, useEffect, ReactElement, RefObject, ReactNode } from "react";
import usePrevious from "../../hooks/usePrevious";
import calculateBoundingBoxes from "../../helpers/calculateBoundingBoxes";

interface BoundingBox {
    [key: string]: DOMRect;
}

const AnimateRows: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [boundingBox, setBoundingBox] = useState<BoundingBox>({});
    const [prevBoundingBox, setPrevBoundingBox] = useState<BoundingBox>({});
    const prevChildren = usePrevious(children);

    useLayoutEffect(() => {
        const newBoundingBox = calculateBoundingBoxes(children);
        setBoundingBox(newBoundingBox);
    }, [children]);

    useLayoutEffect(() => {
        const prevBoundingBox = calculateBoundingBoxes(prevChildren);
        setPrevBoundingBox(prevBoundingBox);
    }, [prevChildren]);

    useEffect(() => {
        const hasPrevBoundingBox = Object.keys(prevBoundingBox).length > 0;

        if (hasPrevBoundingBox) {
            React.Children.forEach(children, (child: any) => {
                const domNode = child.ref.current;
         
                
                if (domNode) {
                    const firstBox = prevBoundingBox[child.key];
                    const lastBox = boundingBox[child.key];
                    const changeInY = firstBox.top - lastBox.top;
                    
                    if (changeInY) {
                        requestAnimationFrame(() => {
                            // Before the DOM paints, invert child to old position
                            domNode.style.transform = `translateY(${changeInY}px)`;
                            domNode.style.transition = "transform 0s";

                            requestAnimationFrame(() => {
                                // After the previous frame, remove
                                // the transition to play the animation
                                domNode.style.transform = "";
                                domNode.style.transition = "transform 500ms";
                            });
                        });
                    }
                }
            });
        }
    }, [boundingBox, prevBoundingBox, children]);

    return <>{children}</>
};

export default AnimateRows;


