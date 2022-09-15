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
            to:[
                {
                    type:'reference',
                    to:[{type:'user'}]
                }
            ]
        },
        {
            name:'comments',
            title:'Comments',
            type:'array',
            of:[
                {
                    type:'comment',
                }
            ]
        },
        {
            name:'topic',
            title:'Topic',
            
        }
    ]
}