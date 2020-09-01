import React, {useCallback} from 'react';
import {Card, Avatar, Button} from "antd"
import PropTypes from "prop-types"

const UserProfile = ({ setIsLoggedIn }) => {

    const onLogOut = useCallback(()=>{
        setIsLoggedIn(false)
    }, [])

    return (
        <Card
            actions={[
                <div key={"twit"}>짹짹<br />0</div>,
                <div key={"followings"}>짹짹<br />0</div>,
                <div key={"followings"}>짹짹<br />0</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>Jw</Avatar>}
                title={"Jewon"}/>
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

UserProfile.propTypes = {
    setIsLoggedIn : PropTypes.func.isRequired
}



export default UserProfile;