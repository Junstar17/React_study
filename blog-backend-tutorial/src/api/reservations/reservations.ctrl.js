let postId =1;

const posts = [
    {
        id: 1,
        title: '제목',
        body: '내용'
    }
];

const response = {
    status: "success",
    results: {
        bookid: "0",
        rentdate: "20201010",
        returndate: "20201010",
        meta:{
            uid:"0",
            title:"MSA",
            autuor: "Sam",
            publisher: "Hanbit",
            location: "8F",
            owner: "junykim@kr.ibm.com"
        }
    }
}

// 내가 예약한 도서, 검색 도서
const result = {
  results:[
    {
      id: "5ef445b4d0f8875f22e3c380",
      bookId: 0,
      status: 1,
      renter: {
        email: "kisjang@kr.ibm.com",
        updatedate: "2020-06-25T06:35:27.941+00:00"
      },
      rentdate: "2020-06-25T06:35:27.941+00:00",
      returndate: "2020-07-09T06:35:27.941+00:00",
      waiter: [
        {
          email: "Juny",
          updatedate: "2020-07-01T07:04:07.500Z"
        },
        {
          email: "Juny",
          updatedate: "2020-07-01T07:04:07.500Z"
        },
      ],
      history: [],
      bookMeta: {
        id: 12,
        book_title: "MSA 패턴 교과서",
        author: "Peter",
        publisher: "동아출판사",
        location: "9F110",
        owner: "kisjang@kr.ibm.com",
        createAt: "2020-06-25T06:35:27.955+00:00",
        updateAt: "2020-06-25T06:35:27.955+00:00"
      }
    },
    {
        id: "5ef445b4d0f8875f22e2c380",
        bookId: 1,
        status: 0,
        renter: {
          email: "kisjang@kr.ibm.com",
          updatedate: "2020-06-25T06:35:27.941+00:00"
        },
        rentdate: "2020-06-25T06:35:27.941+00:00",
        returndate: "2020-07-09T06:35:27.941+00:00",
        waiter: [],
        history: [],
        bookMeta: {
          id: 1,
          book_title: "리액트 교과서",
          author: "Harry",
          publisher: "동아출판사",
          location: "10F110",
          owner: "kisjang@kr.ibm.com",
          createAt: "2020-06-25T06:35:27.955+00:00",
          updateAt: "2020-06-25T06:35:27.955+00:00"
        }
      },
      {
        id: "5ef445b4d0f8er875f22e3c380",
        bookId: 2,
        status: 1,
        renter: {
          email: "kisjang@kr.ibm.com",
          updatedate: "2020-06-25T06:35:27.941+00:00"
        },
        rentdate: "2020-06-25T06:35:27.941+00:00",
        returndate: "2020-07-09T06:35:27.941+00:00",
        waiter: [
          {
            email: "Juny",
            updatedate: "2020-07-01T07:04:07.500Z"
          },
        ],
        history: [],
        bookMeta: {
          id: 2,
          book_title: "Docker 입문서",
          author: "Jack",
          publisher: "동아출판사",
          location: "8F",
          owner: "kisjang@kr.ibm.com",
          createAt: "2020-06-25T06:35:27.955+00:00",
          updateAt: "2020-06-25T06:35:27.955+00:00"
        }
      },
      {
        id: "5ef445b4dfd0f8875f22e3c380",
        bookId: 3,
        status: 0,
        renter: {
          email: "kisjang@kr.ibm.com",
          updatedate: "2020-06-25T06:35:27.941+00:00"
        },
        rentdate: "2020-06-25T06:35:27.941+00:00",
        returndate: "2020-07-09T06:35:27.941+00:00",
        waiter: [],
        history: [],
        bookMeta: {
          id: 3,
          book_title: "자바스크립트 바로알기",
          author: "Tom",
          publisher: "길벗",
          location: "11F292",
          owner: "kisjang@kr.ibm.com",
          createAt: "2020-06-25T06:35:27.955+00:00",
          updateAt: "2020-06-25T06:35:27.955+00:00"
        }
      },
      {
        id: "5ef445b4dfd0f8875f22e3c380",
        bookId: 4,
        status: 1,
        renter: {
          email: "kisjang@kr.ibm.com",
          updatedate: "2020-06-25T06:35:27.941+00:00"
        },
        rentdate: "2020-06-25T06:35:27.941+00:00",
        returndate: "2020-07-09T06:35:27.941+00:00",
        waiter: [
          {
            email: "Juny",
            updatedate: "2020-07-01T07:04:07.500Z"
          },
          {
            email: "Juny",
            updatedate: "2020-07-01T07:04:07.500Z"
          },
          {
            email: "Juny",
            updatedate: "2020-07-01T07:04:07.500Z"
          },
        ],
        history: [],
        bookMeta: {
          id: 4,
          book_title: "HTML 바로알기",
          author: "Duke",
          publisher: "길벗",
          location: "13F22",
          owner: "kisjang@kr.ibm.com",
          createAt: "2020-06-25T06:35:27.955+00:00",
          updateAt: "2020-06-25T06:35:27.955+00:00"
        }
      },
      {
        id: "5ef445b4dfd0f8875f22e3c380",
        bookId: 5,
        status: 1,
        renter: {
          email: "kisjang@kr.ibm.com",
          updatedate: "2020-06-25T06:35:27.941+00:00"
        },
        rentdate: "2020-06-25T06:35:27.941+00:00",
        returndate: "2020-07-09T06:35:27.941+00:00",
        waiter: [
          {
            email: "Juny",
            updatedate: "2020-07-01T07:04:07.500Z"
          },
        ],
        history: [],
        bookMeta: {
          id: 5,
          book_title: "CSS 바로알기",
          author: "Kevin",
          publisher: "길벗",
          location: "10F292",
          owner: "kisjang@kr.ibm.com",
          createAt: "2020-06-25T06:35:27.955+00:00",
          updateAt: "2020-06-25T06:35:27.955+00:00"
        }
      },
  ]
}
const returnResult ={
  result : {
    id: "5ef445b4d0f8875f22e3c380",
    bookId: 0,
    status: 1,
    renter: {
      email: "kisjang@kr.ibm.com",
      updatedate: "2020-06-25T06:35:27.941+00:00"
    },
    rentdate: "2020-06-25T06:35:27.941+00:00",
    returndate: "2020-07-09T06:35:27.941+00:00",
    waiter: [],
    history: [],
    bookMeta: {
      id: 12,
      book_title: "MSA 패턴 교과서",
      author: "Peter",
      publisher: "동아출판사",
      location: "9F110",
      owner: "kisjang@kr.ibm.com",
      createAt: "2020-06-25T06:35:27.955+00:00",
      updateAt: "2020-06-25T06:35:27.955+00:00"
    }
  }
}
const delay = () =>{
  let idx =0;
    while(idx <50000){
      console.log(idx++)
    }
    console.log('here')
}
exports.write = async(ctx) =>{
    const{bookid, email} = ctx.request.body;
    delay();
    console.log('Rent : ',bookid, email)
    ctx.body = returnResult;
}

// 예약 도서
exports.userList = (ctx) =>{
    const{email} = ctx.params;
    console.log("userList email : ",email);
    ctx.body=result;
}

exports.list = (ctx) =>{
  const{keyword} = ctx.params;
  console.log("keyword : ",keyword);
  ctx.body = result;
}
exports.bookList = (ctx) =>{
    
}
exports.return = async (ctx) =>{
  await delay();
  console.log('반납 : ',ctx.request.body)
  ctx.body = returnResult;
}
exports.searchList = (ctx) =>{
  const{keyword} = ctx.params;
  console.log("keyword : ",keyword);
  ctx.body = result;
}
  
exports.register = (ctx) =>{
    
}