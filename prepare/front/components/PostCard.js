import React,{useState,useCallback} from 'react';
import {Card, Button, Popover, Avatar} from "antd";
import {EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import PostImages from "./PostImages";


const PostCard = (props) => {

    const { post } = props;
    const { me } = useSelector(state=>state.user);

    const [commentFormOpend, setCommentFormOpend] = useState(false);
    const [liked, setLiked] = useState(false);
    const onToggleLike = useCallback(()=>{
        setLiked((prev)=>!prev);
    },[]);
    const onToggleComment = useCallback(()=>{
        setCommentFormOpend((prev)=>!prev);
    },[]);
    const id = me && me.id;

    return (
        <div style={{marginBottom: 20}}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images}/> }
                actions={[
                    <RetweetOutlined key={"retweet"}/>,
                    liked ? <HeartTwoTone twoToneColor={"#eb2f96"} key={"heart"} onClick={onToggleLike}/> : <HeartOutlined key={"heart"} onClick={onToggleLike}/>,
                    <MessageOutlined  key={"comment"} onClick={onToggleComment}/>,
                    <Popover  key={"more"} content={(
                        <Button.Group>
                            {id && post.User.id === id ? (
                                <>
                                    <Button>수정</Button>
                                    <Button type={"danger"}>삭제</Button>
                                </>
                            ) : (
                                <Button>신고</Button>
                            )}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined  key={"retweet"}/>
                    </Popover>
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />
                {commentFormOpend && (
                    <div>
                        댓글 부분
                    </div>
                )}
                {/*<CommentForm/>*/}
                {/*<Comments/>*/}
            </Card>
        </div>
    );
};

PostCard.propTypes={
    post: PropTypes.shape({
        id: PropTypes.number,
        User : PropTypes.object,
        content : PropTypes.string,
        createAt : PropTypes.object,
        Comments : PropTypes.arrayOf(PropTypes.object),
        Images : PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
}

export default PostCard;
