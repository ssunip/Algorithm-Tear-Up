// 실행결과
// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (22.71ms, 36.8MB)
// 테스트 5 〉	통과 (16.23ms, 36.7MB)
// 테스트 6 〉	통과 (13.81ms, 36.7MB)
// 테스트 7 〉	통과 (7.39ms, 36.7MB)
// 테스트 8 〉	통과 (11.15ms, 36.7MB)
// 테스트 9 〉	통과 (8.78ms, 36.7MB)
// 테스트 10 〉	통과 (3.14ms, 36.8MB)
// 테스트 11 〉	통과 (0.12ms, 33.5MB)
// 테스트 12 〉	통과 (0.28ms, 33.5MB)
// 테스트 13 〉	통과 (0.20ms, 33.6MB)
// 테스트 14 〉	통과 (0.04ms, 33.5MB)
// 테스트 15 〉	통과 (0.06ms, 33.5MB)
// 테스트 16 〉	통과 (0.09ms, 33.5MB)


// 풀이시간 : 5분
// 점수 : 1점 (인정)


function solution(a, b) {
    var answer = 0;
    
    // a와 b사이의 모든 정수의 합
    
    const start = Math.min(a,b);
    const end = Math.max(a,b);

    for (let i = start; i <= end; i++){
        answer += i;
    }
    
    return answer;
}