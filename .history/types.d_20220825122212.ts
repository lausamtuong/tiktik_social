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
            
        }
    }[];
    postedBy:{
        image:'string';
        userName:'string';
        _id:'string';
    };
}