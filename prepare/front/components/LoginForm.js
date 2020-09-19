import React, {useState, useCallback} from 'react';
import {Button, Form, Input} from "antd";
import Link from "next/link"
import styled from "styled-components"
import PropTypes from "prop-types"
import useInput from "../hooks/useInput";
import {useDispatch} from "react-redux";
import {loginAction} from "../reducers/user";

const ButtonWrapper = styled.div`
    margin-top: 10px;
`

const FormWrapper = styled(Form)`
    padding: 10px;
`

const LoginForm = () => {

    // 인라인 함수로 넣어주게 될 경우 useCallback을 사용하도록 한다. 함수를 캐싱하여 리렌더링 시 새로운 함수를 만들지 않게 하기 위해서
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(()=>{
        console.log(id, password)
        dispatch(loginAction({id, password}));
    }, [id,password])

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor={"user-id"}>아이디</label>
                <br/>
                <Input name={"user-id"} value={id} onChange={onChangeId} required/>
            </div>
            <div>
                <label htmlFor={"user-password"}>비밀번호</label>
                <br/>
                <Input name={"user-password"} type={"password"} value={password} onChange={onChangePassword} required/>
            </div>
            <ButtonWrapper>
                <Button type={"primary"} htmlType={"submit"} loading={false}>로그인</Button>
                <Link href={"/signup"}><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
};

export default LoginForm;