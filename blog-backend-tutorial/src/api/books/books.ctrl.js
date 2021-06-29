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
// 등록한 책
const result = {
  results: [
  {
      uid: '0',
      title: 'MSA 패턴 교과서',
      author: "Jack",
      publisher: "동아출판사",
      location: "8F",
      owner: "kisjang@kr.ibm.com",
      createAt: "2020-06-25T06:35:27.955+00:00",
      updateAt: "2020-06-25T06:35:27.955+00:00"
    
  },
  {
      uid: '0',
      title: 'Dokcer 교과서',
      author: "Jack",
      publisher: "동아출판사",
      location: "8F",
      owner: "kisjang@kr.ibm.com",
      createAt: "2020-06-25T06:35:27.955+00:00",
      updateAt: "2020-06-25T06:35:27.955+00:00"
    
  },
  {
      uid: '0',
      title: 'k8s 교과서',
      author: "Jack",
      publisher: "동아출판사",
      location: "8F",
      owner: "kisjang@kr.ibm.com",
      createAt: "2020-06-25T06:35:27.955+00:00",
      updateAt: "2020-06-25T06:35:27.955+00:00"
  }
]
}
const editSuccess={
  status : "success",
  results :{
    uid: '0',
    title: 'Change_MSA',
    author: "Jack",
    publisher: "동아출판사",
    location: "8F",
    owner: "kisjang@kr.ibm.com",
    createAt: "2020-06-25T06:35:27.955+00:00",
    updateAt: "2020-06-25T06:35:27.955+00:00"
  }
}

const delay = () =>{
  let idx =0;
    while(idx <50000){
      console.log(idx++)
    }
    console.log('finish')
}
exports.write = async (ctx) =>{
    await delay();
    console.log(ctx.request.body)
    ctx.body = editSuccess;
}

exports.editBook = async(ctx) =>{
    await delay();
    console.log(ctx.request.body);
    ctx.body = editSuccess;
}

exports.listByUser = (ctx) =>{
  const{email} = ctx.params;
  console.log("listByUser email : ",email);
  ctx.body=result;
}
exports.bookList = (ctx) =>{
    
}
exports.return = (ctx) =>{
    
}
exports.searchList = (ctx) =>{
    const{keyword} = ctx.params;
    console.log("keyword : ",keyword);
    ctx.body = bookList;
}
exports.register = (ctx) =>{
    
}