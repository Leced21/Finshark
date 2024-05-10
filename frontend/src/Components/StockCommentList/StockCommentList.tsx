import React from "react";
import { CommentGet } from "../../Models/Comment";
import StockCommentListItem from "../StockCommentlistItem/StockCommentListItem";

type Props = {
    comments: CommentGet[];
};

const StockCommentList = ({ comments }: Props) => {
    return (
        <>
            {comments
                ? comments.map((comment) => {
                    return <StockCommentListItem comment={comment} />;
                })
                : ""}
        </>
    );
};

export default StockCommentList;