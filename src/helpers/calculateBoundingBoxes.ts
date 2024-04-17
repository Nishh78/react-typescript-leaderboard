import React, { ReactNode } from "react";

interface BoundingBox {
    [key: string]: DOMRect;
}
const calculateBoundingBoxes = (children: ReactNode) => {
    const boundingBoxes: BoundingBox = {};

    React.Children.forEach(children, (child: any) => {
        const domNode = child.ref.current;
        if (domNode) {
            const nodeBoundingBox = domNode.getBoundingClientRect();
            boundingBoxes[child.key] = nodeBoundingBox;
        }
    });

    return boundingBoxes;
};

export default calculateBoundingBoxes;
