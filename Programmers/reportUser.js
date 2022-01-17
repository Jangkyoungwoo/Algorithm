const id_list = ["con", "ryan"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 3;

solution(id_list, report, k);

function solution(id_list, report, k) {
  var answer = [];

  const set = new Set(report);
  const reportSetArr = Array.from(set);
  const counterReport = [];
  const encounterReport = [];
  const result = [];

  for (let i = 0; i < id_list.length; i++) {// id_list
    result.push({ x: id_list[i], y: 0 });
  }

  for (let i = 0; i < reportSetArr.length; i++) {   // split해서 각 배열에 나누어 넣어줌
    const reportSplit = reportSetArr[i].split(' ');
    counterReport.push({ x: reportSplit[0], y: 0 });
    encounterReport.push(reportSplit[1]);
  }

  for (let i = 0; i < encounterReport.length; i++) {// 신고 받은 사람의 중복값을 찾아 신고 한 사람의 y값을 올려줌
    const preReport = encounterReport[i];
    for (let j = 0; j < encounterReport.length; j++) {
      if (preReport === encounterReport[j]) {
        counterReport[i].y += 1;
      }
    }
  }

  for (let i = 0; i < counterReport.length; i++) {// 신고 결과 처리 횟수 출력
    const preReportX = counterReport[i].x;
    const preReportY = counterReport[i].y;
    for (let j = 0; j < result.length; j++) {
      if (preReportX === result[j].x) {
        if (preReportY >= k) {
          result[j].y++;
        }
      }
    }
  }


  for (let i = 0; i < result.length; i++) {
    answer.push(result[i].y);
  }

  return answer;
}