

function slugger (...args){
    return args.join(' ').split('-').join(' ');
}



module.exports = slugger ;

// export default (slugger);