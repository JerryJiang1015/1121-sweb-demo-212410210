function showdemo(week){
    const p = document.querySelector('.show-classdemo');
    console.log('p',p);
    switch(week){
        case 2:
            p.innerHTML =  `<iframe src="./w02_10_intro/index.html" width="100%" height="100%" />`;
            break;
        case 3:
            ;
            break;
        case 4:
            ;
            break;
        case 5:
            ;
            break;
        case 6:
            p.innerHTML =  `<iframe src="./w06_10_navbar/index.html" width="100%" height="100%" />`;
            break;
        case 7:
            ;
            break;
    }
}