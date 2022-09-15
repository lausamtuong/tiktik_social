export interface Video{
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
            image:'string';
        }
    }[];
    postedBy:{
        image:'string';
        userName:'string';
        _id:'string';
    };
    video:{
        asset:{
            _id:'string';
            url:'string';
        };
    };
}
export interface IUser {
    _id: string;
    _type: string;
    userName: string;
    image: string;
  }
