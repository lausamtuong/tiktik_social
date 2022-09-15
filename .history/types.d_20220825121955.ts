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
    likes:
}