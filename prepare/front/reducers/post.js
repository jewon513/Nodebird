export const initialState = {
    mainPosts : [{
        id:1,
        User:{
            id:1,
            nickname: '제로초'
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src : "http://placeimg.com/640/480/any"
        },{
            src : "http://placeimg.com/640/480/any"
        },{
            src : "http://placeimg.com/640/480/any"
        }
        ],
        Comments : [{
            User : {
                nickname : "jewon"
            },
            content : "안녕하세요."
        },{
            User : {
                nickname : "qussoa"
            },
            content : "반갑습니다."
        }]
    }],
    imagePaths:[],
    postAdded:false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type : ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images:[],
    Comments:[],
};

const reducer = (state = initialState, action )=>{
    switch (action.type){
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }
};

export default reducer;