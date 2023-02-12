

function formatter(formatFn) {
    return function inner(str){
        return formatFn(str);
    };
}

var lower = formatter( function formatting(v){
    return v.toLowerCase();
} );

var upperFirst = formatter( function formatting(v){
    return v[0].toUpperCase() + v.substr( 1 ).toLowerCase();

    //  Also can be written as
    //  return v[0].toUpperCase() + lower(v.substr( 1 ))
    
});
    
    console.log(lower( "WOW" ))
    console.log( upperFirst( "hello" ) )