function hello(){
    console.log("안녕하세요");
}

function zzz(){
    const result = new Date('2023-11-07 17:51:00') - new Date();
    const sec = Math.floor(result / 1000);
    const min = Math.floor(sec / 60);
    console.log(`퇴근 ${min}분(${sec}초) 전 ...`);
}
