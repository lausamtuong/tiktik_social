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
        _key:'string';
    };
    postedBy:{
        image:'string'
    }
}