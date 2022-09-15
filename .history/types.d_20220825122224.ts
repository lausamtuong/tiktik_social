interface Video{
    caption:'string';
    userId:'string';
    comments:{
        comment:'string';
        postedBy:{
            _ref:'string'
        };
        _key:'string';
    }[];
    _id:'string';
    likes:{
        postedBy:{
            _id:'string';
            userName:'string';
            
        }
    }[];
    postedBy:{
        image:'string';
        userName:'string';
        _id:'string';
    };
}