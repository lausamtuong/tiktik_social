export default {
    name:'post',
    title:'Post',
    type:'document',
    fields:[
        {
            name:'caption',
            title:'Caption',
            type:'sting'
        },
        {
            name:'video',
            title:'Video',
            type:'file',
            options:{hotspot:true}
        },
        {
            name:'userId',
            title:'UserId',
            type:'sting'
        },
        {
            name:'postedBy',
            title:'PostedBy',
            type:'postedBy'
        },
        {
            name:'likes',
            title:'Likes',
            type:'array',
            to:[]
        }
    ]
}