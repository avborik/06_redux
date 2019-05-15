
// state={
//     name:'',
//     parent:[]
// }

// const action = {
//     type:'MOVIES_LIST',
//     payload:[
//         {id:"1",name:"Pulp Fiction"},
//         {id:"2",name:"True lies"}
//     ]
// }

// const state = 0;

export default function(state = {},action){
    //return state +=1
    switch(action.type){
        case 'MOVIES_LIST':
            return {...state,movies:action.payload}
        default:
            return state;
    }
}