import React, {useState, useCallback, useRef} from 'react';
import {Button, Form, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../reducers/post";

const PostForm = () => {

    const {imagePaths} =useSelector(state => state.post);
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const ImageInput = useRef();
    const onClickImageUpload = useCallback(()=>{
        ImageInput.current.click();
    }, [ImageInput.current]);

    const onChangeText = useCallback((e)=>{
        setText(e.target.value)
    },[]);

    const onSubmit = useCallback(()=>{
        dispatch(addPost);
        setText("");
    },[]);

    return (
        <Form stlye={{margin:'10px 0 20px'}} encType={"multpart/form-data"} onFinish={onSubmit}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder={"어떤 신기한 일이 있었나요?"}/>
            <div>
                <input type={"file"} multiple={true} hidden={true} ref={ImageInput}/>
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type={"primary"} style={{ float : 'right'}} htmlType={"submit"}>쨱짹</Button>
            </div>
            <div>
                {imagePaths.map((v)=>(
                    <div key={v} style={{display : 'inline-block'}} >
                        <img src={v} style={{width : '200px'}} alt={v}/>
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    );
};

export default PostForm;
