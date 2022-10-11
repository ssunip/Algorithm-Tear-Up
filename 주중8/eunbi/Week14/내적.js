//[PGS] 내적, +1
// 소요시간 : 2.20분

// 테스트 1 〉	통과 (0.12ms, 33.6MB)
// 테스트 2 〉	통과 (0.07ms, 33.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.6MB)
// 테스트 4 〉	통과 (0.05ms, 33.6MB)
// 테스트 5 〉	통과 (0.07ms, 33.4MB)
// 테스트 6 〉	통과 (0.10ms, 33.5MB)
// 테스트 7 〉	통과 (0.10ms, 33.6MB)
// 테스트 8 〉	통과 (0.14ms, 33.6MB)
// 테스트 9 〉	통과 (0.10ms, 33.6MB)

// map 메서드를 이용, 요소와 인덱스를 받아
// a배열과 b배열의 같은 인덱스의 요소를 곱하여 나온 배열을
// reduce 메서드를 이용해 더한 값을 리턴한다. 

function solution(a, b) {
  return a.map((el, idx) => el* b[idx]).reduce((prev, curr) => prev + curr ,0);
}

// 이번에도 실패한 reduce index 파라미터 이용하기..(매번 까먹는다 ㅠ)