/* ============================================================
   READMICAL 데이터 — 문장 / 단어
   ★ 콘텐츠는 이 파일만 고치면 됩니다. (편집법: 매뉴얼 참고)
   고친 뒤엔 sw.js 맨 위 VERSION 숫자를 +1 해서 커밋하세요.
   ============================================================ */
const DATA = {
  sentence:[
    { id:"1형식(1)", items:[
      {n:1, full:"그 의사가 나타난다", chunks:[
        {en:"The doctor", ko:"그 의사가", t:"subj"},
        {en:"appears", ko:"나타난다", t:"verb"}]},
      {n:2, full:"그 손님들이 떠난다", chunks:[
        {en:"The guests", ko:"그 손님들이", t:"subj"},
        {en:"depart", ko:"떠난다", t:"verb"}]},
      {n:3, full:"가격이 떨어진다", chunks:[
        {en:"Prices", ko:"가격이", t:"subj"},
        {en:"decrease", ko:"떨어진다", t:"verb"}]},
      {n:4, full:"기억은 존재한다", chunks:[
        {en:"Memories", ko:"기억은", t:"subj"},
        {en:"exist", ko:"존재한다", t:"verb"}]},
      {n:5, full:"그 손님들이 쉰다", chunks:[
        {en:"The guests", ko:"그 손님들이", t:"subj"},
        {en:"relax", ko:"쉰다", t:"verb"}]},
      {n:6, full:"그 수가 늘어난다", chunks:[
        {en:"The number", ko:"그 수가", t:"subj"},
        {en:"increases", ko:"늘어난다", t:"verb"}]},
      {n:7, full:"그 증거가 사라진다", chunks:[
        {en:"The evidence", ko:"그 증거가", t:"subj"},
        {en:"vanishes", ko:"사라진다", t:"verb"}]},
      {n:8, full:"기억은 살아남는다", chunks:[
        {en:"Memories", ko:"기억은", t:"subj"},
        {en:"survive", ko:"살아남는다", t:"verb"}]},
      {n:9, full:"그 비행기가 떠난다", chunks:[
        {en:"The plane", ko:"그 비행기가", t:"subj"},
        {en:"departs", ko:"떠난다", t:"verb"}]},
      {n:10, full:"문제들이 일어난다", chunks:[
        {en:"Problems", ko:"문제들이", t:"subj"},
        {en:"occur", ko:"일어난다", t:"verb"}]},
      {n:11, full:"그 증거가 나타난다", chunks:[
        {en:"The evidence", ko:"그 증거가", t:"subj"},
        {en:"emerges", ko:"나타난다", t:"verb"}]},
      {n:12, full:"전쟁이 일어난다", chunks:[
        {en:"Wars", ko:"전쟁이", t:"subj"},
        {en:"occur", ko:"일어난다", t:"verb"}]},
      {n:13, full:"위험이 나타난다", chunks:[
        {en:"Dangers", ko:"위험이", t:"subj"},
        {en:"emerge", ko:"나타난다", t:"verb"}]},
      {n:14, full:"그 비행기가 나타난다", chunks:[
        {en:"The plane", ko:"그 비행기가", t:"subj"},
        {en:"appears", ko:"나타난다", t:"verb"}]},
      {n:15, full:"그 위험은 존재한다", chunks:[
        {en:"The danger", ko:"그 위험은", t:"subj"},
        {en:"exists", ko:"존재한다", t:"verb"}]},
      {n:16, full:"가격이 오른다", chunks:[
        {en:"Prices", ko:"가격이", t:"subj"},
        {en:"increase", ko:"오른다", t:"verb"}]},
      {n:17, full:"그 수가 줄어든다", chunks:[
        {en:"The number", ko:"그 수가", t:"subj"},
        {en:"decreases", ko:"줄어든다", t:"verb"}]},
      {n:18, full:"그 전쟁이 시작된다", chunks:[
        {en:"The war", ko:"그 전쟁이", t:"subj"},
        {en:"begins", ko:"시작된다", t:"verb"}]},
      {n:19, full:"그 숲이 사라진다", chunks:[
        {en:"The forest", ko:"그 숲이", t:"subj"},
        {en:"vanishes", ko:"사라진다", t:"verb"}]},
      {n:20, full:"그 의사가 쉰다", chunks:[
        {en:"The doctor", ko:"그 의사가", t:"subj"},
        {en:"relaxes", ko:"쉰다", t:"verb"}]},
      {n:21, full:"갈등이 생긴다", chunks:[
        {en:"Conflicts", ko:"갈등이", t:"subj"},
        {en:"arise", ko:"생긴다", t:"verb"}]},
      {n:22, full:"문제가 생긴다", chunks:[
        {en:"Problems", ko:"문제가", t:"subj"},
        {en:"arise", ko:"생긴다", t:"verb"}]},
      {n:23, full:"그 숲이 살아남는다", chunks:[
        {en:"The forest", ko:"그 숲이", t:"subj"},
        {en:"survives", ko:"살아남는다", t:"verb"}]},
      {n:24, full:"그 갈등이 시작된다", chunks:[
        {en:"The conflict", ko:"그 갈등이", t:"subj"},
        {en:"begins", ko:"시작된다", t:"verb"}]}
    ]},
    { id:"1형식(2)", items:[
      {n:1, full:"전문가들이 병원에서 일한다", chunks:[
        {en:"Experts", ko:"전문가들이", t:"subj"},
        {en:"work", ko:"일한다", t:"verb"},
        {en:"at the hospital", ko:"병원에서", t:"mod"}]},
      {n:2, full:"그 의사가 학교에서 쉰다", chunks:[
        {en:"The doctor", ko:"그 의사가", t:"subj"},
        {en:"relaxes", ko:"쉰다", t:"verb"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:3, full:"운동선수들이 길 위에서 이동한다", chunks:[
        {en:"Athletes", ko:"운동선수들이", t:"subj"},
        {en:"travel", ko:"이동한다", t:"verb"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:4, full:"전문가들이 시장에서 경쟁한다", chunks:[
        {en:"Experts", ko:"전문가들이", t:"subj"},
        {en:"compete", ko:"경쟁한다", t:"verb"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:5, full:"그 비행기가 아침에 나타난다", chunks:[
        {en:"The plane", ko:"그 비행기가", t:"subj"},
        {en:"appears", ko:"나타난다", t:"verb"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:6, full:"고객들이 시장에서 돌아다닌다", chunks:[
        {en:"Customers", ko:"고객들이", t:"subj"},
        {en:"wander", ko:"돌아다닌다", t:"verb"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:7, full:"기억은 영원히 사라진다", chunks:[
        {en:"Memories", ko:"기억은", t:"subj"},
        {en:"vanish", ko:"사라진다", t:"verb"},
        {en:"forever", ko:"영원히", t:"mod"}]},
      {n:8, full:"그 숲은 영원히 살아남는다", chunks:[
        {en:"The forest", ko:"그 숲은", t:"subj"},
        {en:"survives", ko:"살아남는다", t:"verb"},
        {en:"forever", ko:"영원히", t:"mod"}]},
      {n:9, full:"그 전쟁이 밤에 시작된다", chunks:[
        {en:"The war", ko:"그 전쟁이", t:"subj"},
        {en:"begins", ko:"시작된다", t:"verb"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:10, full:"시민들이 일찍 일한다", chunks:[
        {en:"Citizens", ko:"시민들이", t:"subj"},
        {en:"work", ko:"일한다", t:"verb"},
        {en:"early", ko:"일찍", t:"mod"}]},
      {n:11, full:"그 수가 시간이 지나면서 줄어든다", chunks:[
        {en:"The number", ko:"그 수가", t:"subj"},
        {en:"decreases", ko:"줄어든다", t:"verb"},
        {en:"over time", ko:"시간이 지나면서", t:"mod"}]},
      {n:12, full:"가격이 시간이 지나면서 오른다", chunks:[
        {en:"Prices", ko:"가격이", t:"subj"},
        {en:"increase", ko:"오른다", t:"verb"},
        {en:"over time", ko:"시간이 지나면서", t:"mod"}]},
      {n:13, full:"비평가들이 창가에서 망설인다", chunks:[
        {en:"Critics", ko:"비평가들이", t:"subj"},
        {en:"hesitate", ko:"망설인다", t:"verb"},
        {en:"at the window", ko:"창가에서", t:"mod"}]},
      {n:14, full:"그 손님들이 아침에 떠난다", chunks:[
        {en:"The guests", ko:"그 손님들이", t:"subj"},
        {en:"depart", ko:"떠난다", t:"verb"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:15, full:"갈등이 거리에서 생긴다", chunks:[
        {en:"Conflicts", ko:"갈등이", t:"subj"},
        {en:"arise", ko:"생긴다", t:"verb"},
        {en:"on the street", ko:"거리에서", t:"mod"}]},
      {n:16, full:"시민들이 길 위에서 이동한다", chunks:[
        {en:"Citizens", ko:"시민들이", t:"subj"},
        {en:"travel", ko:"이동한다", t:"verb"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:17, full:"운동선수들이 그 도시에서 경쟁한다", chunks:[
        {en:"Athletes", ko:"운동선수들이", t:"subj"},
        {en:"compete", ko:"경쟁한다", t:"verb"},
        {en:"in the city", ko:"그 도시에서", t:"mod"}]},
      {n:18, full:"위험은 학교에 존재한다", chunks:[
        {en:"Danger", ko:"위험은", t:"subj"},
        {en:"exists", ko:"존재한다", t:"verb"},
        {en:"at school", ko:"학교에", t:"mod"}]},
      {n:19, full:"환자들이 일찍 잔다", chunks:[
        {en:"Patients", ko:"환자들이", t:"subj"},
        {en:"sleep", ko:"잔다", t:"verb"},
        {en:"early", ko:"일찍", t:"mod"}]},
      {n:20, full:"문제가 거리에서 일어난다", chunks:[
        {en:"Problems", ko:"문제가", t:"subj"},
        {en:"occur", ko:"일어난다", t:"verb"},
        {en:"on the street", ko:"거리에서", t:"mod"}]},
      {n:21, full:"비평가들이 그 도시에서 돌아다닌다", chunks:[
        {en:"Critics", ko:"비평가들이", t:"subj"},
        {en:"wander", ko:"돌아다닌다", t:"verb"},
        {en:"in the city", ko:"그 도시에서", t:"mod"}]},
      {n:22, full:"고객들이 창가에서 망설인다", chunks:[
        {en:"Customers", ko:"고객들이", t:"subj"},
        {en:"hesitate", ko:"망설인다", t:"verb"},
        {en:"at the window", ko:"창가에서", t:"mod"}]},
      {n:23, full:"환자들이 병원에서 잔다", chunks:[
        {en:"Patients", ko:"환자들이", t:"subj"},
        {en:"sleep", ko:"잔다", t:"verb"},
        {en:"at the hospital", ko:"병원에서", t:"mod"}]},
      {n:24, full:"그 증거가 밤에 나타난다", chunks:[
        {en:"The evidence", ko:"그 증거가", t:"subj"},
        {en:"emerges", ko:"나타난다", t:"verb"},
        {en:"at night", ko:"밤에", t:"mod"}]}
    ]},
    { id:"2형식(1)", items:[
      {n:1, full:"시민들이 전쟁 동안 차분해진다", chunks:[
        {en:"Citizens", ko:"시민들이", t:"subj"},
        {en:"get", ko:"~해진다", t:"verb"},
        {en:"calm", ko:"차분한", t:"comp"},
        {en:"during the war", ko:"전쟁 동안", t:"mod"}]},
      {n:2, full:"그 위험은 분명하다", chunks:[
        {en:"The danger", ko:"그 위험은", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"clear", ko:"분명한", t:"comp"}]},
      {n:3, full:"그 증거는 그 갈등 속에서 분명해진다", chunks:[
        {en:"The evidence", ko:"그 증거는", t:"subj"},
        {en:"becomes", ko:"~해진다", t:"verb"},
        {en:"clear", ko:"분명한", t:"comp"},
        {en:"in the conflict", ko:"그 갈등 속에서", t:"mod"}]},
      {n:4, full:"그 환자가 일찍 차분해진다", chunks:[
        {en:"The patient", ko:"그 환자가", t:"subj"},
        {en:"gets", ko:"~해진다", t:"verb"},
        {en:"calm", ko:"차분한", t:"comp"},
        {en:"early", ko:"일찍", t:"mod"}]},
      {n:5, full:"그 수가 그 도시에서 문제가 된다", chunks:[
        {en:"The number", ko:"그 수가", t:"subj"},
        {en:"becomes", ko:"~가 된다", t:"verb"},
        {en:"a problem", ko:"문제", t:"comp"},
        {en:"in the city", ko:"그 도시에서", t:"mod"}]},
      {n:6, full:"그 아이는 영웅이다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"a hero", ko:"영웅", t:"comp"}]},
      {n:7, full:"운동선수들이 길 위에서 준비된다", chunks:[
        {en:"Athletes", ko:"운동선수들이", t:"subj"},
        {en:"get", ko:"~해진다", t:"verb"},
        {en:"ready", ko:"준비된", t:"comp"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:8, full:"그 손님은 학교에서 전설이 된다", chunks:[
        {en:"The guest", ko:"그 손님은", t:"subj"},
        {en:"becomes", ko:"~가 된다", t:"verb"},
        {en:"a legend", ko:"전설", t:"comp"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:9, full:"그 비행기는 준비되어 있다", chunks:[
        {en:"The plane", ko:"그 비행기는", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"ready", ko:"준비된", t:"comp"}]},
      {n:10, full:"고객들이 거리에서 젖는다", chunks:[
        {en:"Customers", ko:"고객들이", t:"subj"},
        {en:"get", ko:"~해진다", t:"verb"},
        {en:"wet", ko:"젖은", t:"comp"},
        {en:"on the street", ko:"거리에서", t:"mod"}]},
      {n:11, full:"그 가격은 시간이 지나면서 분명해진다", chunks:[
        {en:"The price", ko:"그 가격은", t:"subj"},
        {en:"becomes", ko:"~해진다", t:"verb"},
        {en:"clear", ko:"분명한", t:"comp"},
        {en:"over time", ko:"시간이 지나면서", t:"mod"}]},
      {n:12, full:"그 아이가 숲에서 추워진다", chunks:[
        {en:"The child", ko:"그 아이가", t:"subj"},
        {en:"gets", ko:"~해진다", t:"verb"},
        {en:"cold", ko:"추운", t:"comp"},
        {en:"in the forest", ko:"숲에서", t:"mod"}]},
      {n:13, full:"그 담요는 젖어 있다", chunks:[
        {en:"The blanket", ko:"그 담요는", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"wet", ko:"젖은", t:"comp"}]},
      {n:14, full:"그 기억은 영원히 전설이 된다", chunks:[
        {en:"The memory", ko:"그 기억은", t:"subj"},
        {en:"becomes", ko:"~가 된다", t:"verb"},
        {en:"a legend", ko:"전설", t:"comp"},
        {en:"forever", ko:"영원히", t:"mod"}]},
      {n:15, full:"그 코트는 부드럽게 느껴진다", chunks:[
        {en:"The coat", ko:"그 코트는", t:"subj"},
        {en:"feels", ko:"~하게 느껴진다", t:"verb"},
        {en:"soft", ko:"부드러운", t:"comp"}]},
      {n:16, full:"그 담요는 시장에서 부드러워 보인다", chunks:[
        {en:"The blanket", ko:"그 담요는", t:"subj"},
        {en:"looks", ko:"~해 보인다", t:"verb"},
        {en:"soft", ko:"부드러운", t:"comp"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:17, full:"그 코트는 창가에서 담요처럼 느껴진다", chunks:[
        {en:"The coat", ko:"그 코트는", t:"subj"},
        {en:"feels", ko:"~하게 느껴진다", t:"verb"},
        {en:"like a blanket", ko:"담요처럼", t:"comp"},
        {en:"at the window", ko:"창가에서", t:"mod"}]},
      {n:18, full:"그 코트는 과일 같은 냄새가 난다", chunks:[
        {en:"The coat", ko:"그 코트는", t:"subj"},
        {en:"smells", ko:"~한 냄새가 난다", t:"verb"},
        {en:"like fruit", ko:"과일처럼", t:"comp"}]},
      {n:19, full:"그 영웅은 밤에 천재처럼 들린다", chunks:[
        {en:"The hero", ko:"그 영웅은", t:"subj"},
        {en:"sounds", ko:"~하게 들린다", t:"verb"},
        {en:"like a genius", ko:"천재처럼", t:"comp"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:20, full:"그 아이는 춥게 느낀다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"feels", ko:"~하게 느낀다", t:"verb"},
        {en:"cold", ko:"추운", t:"comp"}]},
      {n:21, full:"그 수프는 과일 같은 맛이 난다", chunks:[
        {en:"The soup", ko:"그 수프는", t:"subj"},
        {en:"tastes", ko:"~한 맛이 난다", t:"verb"},
        {en:"like fruit", ko:"과일처럼", t:"comp"}]},
      {n:22, full:"그 의사는 영웅처럼 보인다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"looks", ko:"~해 보인다", t:"verb"},
        {en:"like a hero", ko:"영웅처럼", t:"comp"}]},
      {n:23, full:"그 담요는 코트처럼 느껴진다", chunks:[
        {en:"The blanket", ko:"그 담요는", t:"subj"},
        {en:"feels", ko:"~하게 느껴진다", t:"verb"},
        {en:"like a coat", ko:"코트처럼", t:"comp"}]},
      {n:24, full:"그 비평가는 천재처럼 들린다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"sounds", ko:"~하게 들린다", t:"verb"},
        {en:"like a genius", ko:"천재처럼", t:"comp"}]},
      {n:25, full:"그 수프는 달콤한 냄새가 난다", chunks:[
        {en:"The soup", ko:"그 수프는", t:"subj"},
        {en:"smells", ko:"~한 냄새가 난다", t:"verb"},
        {en:"sweet", ko:"달콤한", t:"comp"}]},
      {n:26, full:"그 수프는 아침에 과일처럼 보인다", chunks:[
        {en:"The soup", ko:"그 수프는", t:"subj"},
        {en:"looks", ko:"~해 보인다", t:"verb"},
        {en:"like fruit", ko:"과일처럼", t:"comp"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:27, full:"그 영웅은 바쁘게 들린다", chunks:[
        {en:"The hero", ko:"그 영웅은", t:"subj"},
        {en:"sounds", ko:"~하게 들린다", t:"verb"},
        {en:"busy", ko:"바쁜", t:"comp"}]},
      {n:28, full:"그 과일은 달콤한 맛이 난다", chunks:[
        {en:"The fruit", ko:"그 과일은", t:"subj"},
        {en:"tastes", ko:"~한 맛이 난다", t:"verb"},
        {en:"sweet", ko:"달콤한", t:"comp"}]},
      {n:29, full:"그 천재는 아이처럼 보인다", chunks:[
        {en:"The genius", ko:"그 천재는", t:"subj"},
        {en:"looks", ko:"~해 보인다", t:"verb"},
        {en:"like a child", ko:"아이처럼", t:"comp"}]}
    ]},
    { id:"2형식(2)", items:[
      {n:1, full:"그 문제는 시간이 지나면서 사실로 드러난다", chunks:[
        {en:"The problem", ko:"그 문제는", t:"subj"},
        {en:"proves", ko:"~로 드러난다", t:"verb"},
        {en:"true", ko:"사실인", t:"comp"},
        {en:"over time", ko:"시간이 지나면서", t:"mod"}]},
      {n:2, full:"그 과일은 점점 달아진다", chunks:[{en:"The fruit",ko:"그 과일은",t:"subj"},{en:"grows",ko:"점점 ~해진다",t:"verb"},{en:"sweet",ko:"단",t:"comp"}]},
      {n:3, full:"그 환자는 길 위에서 준비된 상태로 있다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"stands", ko:"~한 상태로 있다", t:"verb"},
        {en:"ready", ko:"준비된", t:"comp"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:4, full:"그 담요는 밤에 부드러운 것 같다", chunks:[
        {en:"The blanket", ko:"그 담요는", t:"subj"},
        {en:"seems", ko:"~인 것 같다", t:"verb"},
        {en:"soft", ko:"부드러운", t:"comp"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:5, full:"그 아이는 정원에서 훤칠하게 서 있다", chunks:[{en:"The child",ko:"그 아이는",t:"subj"},{en:"stands",ko:"~한 상태로 있다",t:"verb"},{en:"tall",ko:"키가 큰",t:"comp"},{en:"in the garden",ko:"정원에서",t:"mod"}]},
      {n:6, full:"그 생각은 그 갈등 속에서 사실인 채로 유지된다", chunks:[
        {en:"The idea", ko:"그 생각은", t:"subj"},
        {en:"holds", ko:"~한 채로 유지된다", t:"verb"},
        {en:"true", ko:"사실인", t:"comp"},
        {en:"in the conflict", ko:"그 갈등 속에서", t:"mod"}]},
      {n:7, full:"그 고객은 창가에서 차분하게 행동한다", chunks:[
        {en:"The customer", ko:"그 고객은", t:"subj"},
        {en:"acts", ko:"~하게 행동한다", t:"verb"},
        {en:"calm", ko:"차분한", t:"comp"},
        {en:"at the window", ko:"창가에서", t:"mod"}]},
      {n:8, full:"그 상자는 방 안에서 열린 채로 있다", chunks:[
        {en:"The box", ko:"그 상자는", t:"subj"},
        {en:"sits", ko:"~한 채로 있다", t:"verb"},
        {en:"open", ko:"열린", t:"comp"},
        {en:"in the room", ko:"방 안에서", t:"mod"}]},
      {n:9, full:"그 의사는 병원에서 바쁜 상태를 유지한다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"stays", ko:"~한 상태를 유지한다", t:"verb"},
        {en:"busy", ko:"바쁜", t:"comp"},
        {en:"at the hospital", ko:"병원에서", t:"mod"}]},
      {n:10, full:"그 비평가는 시장에서 이상하게 행동한다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"acts", ko:"~하게 행동한다", t:"verb"},
        {en:"strange", ko:"이상한", t:"comp"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:11, full:"그 위험은 학교에서 이상해 보인다", chunks:[
        {en:"The danger", ko:"그 위험은", t:"subj"},
        {en:"appears", ko:"~해 보인다", t:"verb"},
        {en:"strange", ko:"이상한", t:"comp"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:12, full:"그 진실은 전쟁이 끝난 뒤에도 깊은 채로 남는다", chunks:[{en:"The truth",ko:"그 진실은",t:"subj"},{en:"remains",ko:"~한 채로 남는다",t:"verb"},{en:"deep",ko:"깊은",t:"comp"},{en:"after the war",ko:"전쟁 뒤에도",t:"mod"}]},
      {n:13, full:"그 비행기는 그 도시에서 어두워 보인다", chunks:[
        {en:"The plane", ko:"그 비행기는", t:"subj"},
        {en:"seems", ko:"~인 것 같다", t:"verb"},
        {en:"dark", ko:"어두운", t:"comp"},
        {en:"in the city", ko:"그 도시에서", t:"mod"}]},
      {n:14, full:"그 시민은 일찍 영웅으로 드러난다", chunks:[
        {en:"The citizen", ko:"그 시민은", t:"subj"},
        {en:"proves", ko:"~로 드러난다", t:"verb"},
        {en:"a hero", ko:"영웅", t:"comp"},
        {en:"early", ko:"일찍", t:"mod"}]},
      {n:15, full:"그 전문가는 영원히 전설로 남는다", chunks:[
        {en:"The expert", ko:"그 전문가는", t:"subj"},
        {en:"remains", ko:"~로 남는다", t:"verb"},
        {en:"a legend", ko:"전설", t:"comp"},
        {en:"forever", ko:"영원히", t:"mod"}]},
      {n:16, full:"그 전문가는 병원에서 바빠 보인다", chunks:[
        {en:"The expert", ko:"그 전문가는", t:"subj"},
        {en:"appears", ko:"~해 보인다", t:"verb"},
        {en:"busy", ko:"바쁜", t:"comp"},
        {en:"at the hospital", ko:"병원에서", t:"mod"}]},
      {n:17, full:"그 증거는 전쟁 동안 사실인 채로 유지된다", chunks:[
        {en:"The evidence", ko:"그 증거는", t:"subj"},
        {en:"holds", ko:"~한 채로 유지된다", t:"verb"},
        {en:"true", ko:"사실인", t:"comp"},
        {en:"during the war", ko:"전쟁 동안", t:"mod"}]},
      {n:18, full:"그 천재는 정원에서 조용히 앉아 있다", chunks:[
        {en:"The genius", ko:"그 천재는", t:"subj"},
        {en:"sits", ko:"~한 채로 있다", t:"verb"},
        {en:"quiet", ko:"조용한", t:"comp"},
        {en:"in the garden", ko:"정원에서", t:"mod"}]},
      {n:19, full:"기억은 깊다", chunks:[
        {en:"Memories", ko:"기억은", t:"subj"},
        {en:"run", ko:"~한 상태다", t:"verb"},
        {en:"deep", ko:"깊은", t:"comp"}]},
      {n:20, full:"그 코트는 거리에서 젖은 상태를 유지한다", chunks:[
        {en:"The coat", ko:"그 코트는", t:"subj"},
        {en:"stays", ko:"~한 상태를 유지한다", t:"verb"},
        {en:"wet", ko:"젖은", t:"comp"},
        {en:"on the street", ko:"거리에서", t:"mod"}]},
      {n:21, full:"그 강은 자유롭게 흐른다", chunks:[
        {en:"The river", ko:"그 강은", t:"subj"},
        {en:"runs", ko:"~한 상태다", t:"verb"},
        {en:"free", ko:"자유로운", t:"comp"}]},
      {n:22, full:"그 수프는 차가워진다", chunks:[
        {en:"The soup", ko:"그 수프는", t:"subj"},
        {en:"goes", ko:"~해진다", t:"verb"},
        {en:"cold", ko:"차가운", t:"comp"}]},
      {n:23, full:"그 생각은 사실이 된다", chunks:[
        {en:"The idea", ko:"그 생각은", t:"subj"},
        {en:"comes", ko:"~하게 된다", t:"verb"},
        {en:"true", ko:"사실인", t:"comp"}]},
      {n:24, full:"그 하늘이 어두워진다", chunks:[
        {en:"The sky", ko:"그 하늘이", t:"subj"},
        {en:"grows", ko:"~해진다", t:"verb"},
        {en:"dark", ko:"어두운", t:"comp"}]},
      {n:25, full:"그 우유가 상한다", chunks:[
        {en:"The milk", ko:"그 우유가", t:"subj"},
        {en:"goes", ko:"~해진다", t:"verb"},
        {en:"bad", ko:"나쁜", t:"comp"}]},
      {n:26, full:"그 잎들이 빨갛게 변한다", chunks:[
        {en:"The leaves", ko:"그 잎들이", t:"subj"},
        {en:"turn", ko:"~하게 변한다", t:"verb"},
        {en:"red", ko:"빨간", t:"comp"}]},
      {n:27, full:"그 가격은 그 도시에서 낮게 유지된다", chunks:[{en:"The price",ko:"그 가격은",t:"subj"},{en:"stays",ko:"~한 채로 유지된다",t:"verb"},{en:"low",ko:"낮은",t:"comp"},{en:"in the city",ko:"그 도시에서",t:"mod"}]},
      {n:28, full:"그 과일이 상한다", chunks:[
        {en:"The fruit", ko:"그 과일이", t:"subj"},
        {en:"goes", ko:"~해진다", t:"verb"},
        {en:"bad", ko:"나쁜", t:"comp"}]},
      {n:29, full:"그 하늘이 빨갛게 변한다", chunks:[
        {en:"The sky", ko:"그 하늘이", t:"subj"},
        {en:"turns", ko:"~하게 변한다", t:"verb"},
        {en:"red", ko:"빨간", t:"comp"}]},
      {n:30, full:"그 운동선수가 자유롭게 벗어난다", chunks:[
        {en:"The athlete", ko:"그 운동선수가", t:"subj"},
        {en:"breaks", ko:"~하게 된다", t:"verb"},
        {en:"free", ko:"자유로운", t:"comp"}]},
      {n:31, full:"그 숲이 조용해진다", chunks:[
        {en:"The forest", ko:"그 숲이", t:"subj"},
        {en:"falls", ko:"~해진다", t:"verb"},
        {en:"quiet", ko:"조용한", t:"comp"}]},
      {n:32, full:"그 진실이 분명해진다", chunks:[
        {en:"The truth", ko:"그 진실이", t:"subj"},
        {en:"comes", ko:"~하게 된다", t:"verb"},
        {en:"clear", ko:"분명한", t:"comp"}]},
      {n:33, full:"그 우유가 얼마 안 남는다", chunks:[{en:"The milk",ko:"그 우유가",t:"subj"},{en:"runs",ko:"~한 상태가 된다",t:"verb"},{en:"low",ko:"얼마 안 남은",t:"comp"}]},
      {n:34, full:"그 잎들이 마르게 변한다", chunks:[
        {en:"The leaves", ko:"그 잎들이", t:"subj"},
        {en:"turn", ko:"~하게 변한다", t:"verb"},
        {en:"dry", ko:"마른", t:"comp"}]},
      {n:35, full:"그 상자가 부서져 열린다", chunks:[
        {en:"The box", ko:"그 상자가", t:"subj"},
        {en:"breaks", ko:"~하게 된다", t:"verb"},
        {en:"open", ko:"열린", t:"comp"}]},
      {n:36, full:"그 아이가 키가 커진다", chunks:[
        {en:"The child", ko:"그 아이가", t:"subj"},
        {en:"grows", ko:"~해진다", t:"verb"},
        {en:"tall", ko:"키 큰", t:"comp"}]},
      {n:37, full:"그 강이 마른다", chunks:[
        {en:"The river", ko:"그 강이", t:"subj"},
        {en:"runs", ko:"~한 상태가 된다", t:"verb"},
        {en:"dry", ko:"마른", t:"comp"}]},
      {n:38, full:"그 시장이 조용해진다", chunks:[{en:"The market",ko:"그 시장이",t:"subj"},{en:"falls",ko:"~해진다",t:"verb"},{en:"quiet",ko:"조용한",t:"comp"}]}
    ]},
    { id:"3형식(1)", items:[
      {n:1, full:"그 전문가는 그 열린 상자를 사용한다", chunks:[
        {en:"The expert", ko:"그 전문가는", t:"subj"},
        {en:"uses", ko:"사용한다", t:"verb"},
        {en:"the open box", ko:"그 열린 상자를", t:"obj"}]},
      {n:2, full:"그 회사는 준비된 답이 필요하다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"needs", ko:"필요로 한다", t:"verb"},
        {en:"a ready answer", ko:"준비된 답을", t:"obj"}]},
      {n:3, full:"그 여자는 그 빨간 코트를 들고 다닌다", chunks:[
        {en:"The woman", ko:"그 여자는", t:"subj"},
        {en:"carries", ko:"들고 다닌다", t:"verb"},
        {en:"the red coat", ko:"그 빨간 코트를", t:"obj"}]},
      {n:4, full:"그 차분한 목격자는 그 진실을 안다", chunks:[
        {en:"The calm witness", ko:"그 차분한 목격자는", t:"subj"},
        {en:"knows", ko:"안다", t:"verb"},
        {en:"the truth", ko:"그 진실을", t:"obj"}]},
      {n:5, full:"그 팀은 학교에서 그 책을 공부한다", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"studies", ko:"공부한다", t:"verb"},
        {en:"the book", ko:"그 책을", t:"obj"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:6, full:"그 소년은 아침에 역사를 배운다", chunks:[
        {en:"The boy", ko:"그 소년은", t:"subj"},
        {en:"learns", ko:"배운다", t:"verb"},
        {en:"history", ko:"역사를", t:"obj"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:7, full:"그 소녀는 그 진정한 친구를 만난다", chunks:[
        {en:"The girl", ko:"그 소녀는", t:"subj"},
        {en:"meets", ko:"만난다", t:"verb"},
        {en:"the true friend", ko:"그 진정한 친구를", t:"obj"}]},
      {n:8, full:"그 여자는 집에서 그 음식을 자른다", chunks:[
        {en:"The woman", ko:"그 여자는", t:"subj"},
        {en:"cuts", ko:"자른다", t:"verb"},
        {en:"the food", ko:"그 음식을", t:"obj"},
        {en:"in the house", ko:"집에서", t:"mod"}]},
      {n:9, full:"그 회사는 그 바쁜 시장에서 그 시인을 만난다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"meets", ko:"만난다", t:"verb"},
        {en:"the poet", ko:"그 시인을", t:"obj"},
        {en:"at the busy market", ko:"그 바쁜 시장에서", t:"mod"}]},
      {n:10, full:"그 시인은 선명한 그림을 그린다", chunks:[
        {en:"The poet", ko:"그 시인은", t:"subj"},
        {en:"draws", ko:"그린다", t:"verb"},
        {en:"a clear picture", ko:"선명한 그림을", t:"obj"}]},
      {n:11, full:"그 소녀는 일찍 그 이야기를 끝낸다", chunks:[
        {en:"The girl", ko:"그 소녀는", t:"subj"},
        {en:"finishes", ko:"끝낸다", t:"verb"},
        {en:"the story", ko:"그 이야기를", t:"obj"},
        {en:"early", ko:"일찍", t:"mod"}]},
      {n:12, full:"그 천재는 그 이상한 생각을 연구한다", chunks:[
        {en:"The genius", ko:"그 천재는", t:"subj"},
        {en:"studies", ko:"연구한다", t:"verb"},
        {en:"the strange idea", ko:"그 이상한 생각을", t:"obj"}]},
      {n:13, full:"그 건축가는 낮은 다리를 짓는다", chunks:[
        {en:"The architect", ko:"그 건축가는", t:"subj"},
        {en:"builds", ko:"짓는다", t:"verb"},
        {en:"a low bridge", ko:"낮은 다리를", t:"obj"}]},
      {n:14, full:"그 건축가는 창가에서 그 그림을 그린다", chunks:[
        {en:"The architect", ko:"그 건축가는", t:"subj"},
        {en:"draws", ko:"그린다", t:"verb"},
        {en:"the picture", ko:"그 그림을", t:"obj"},
        {en:"at the window", ko:"창가에서", t:"mod"}]},
      {n:15, full:"그 고객은 그 수프를 먹는다", chunks:[
        {en:"The customer", ko:"그 고객은", t:"subj"},
        {en:"eats", ko:"먹는다", t:"verb"},
        {en:"the soup", ko:"그 수프를", t:"obj"}]},
      {n:16, full:"그 남자는 사무실에서 그 편지를 기억한다", chunks:[
        {en:"The man", ko:"그 남자는", t:"subj"},
        {en:"remembers", ko:"기억한다", t:"verb"},
        {en:"the letter", ko:"그 편지를", t:"obj"},
        {en:"in the office", ko:"사무실에서", t:"mod"}]},
      {n:17, full:"그 친구는 그 편지를 병원으로 가져간다", chunks:[
        {en:"The friend", ko:"그 친구는", t:"subj"},
        {en:"carries", ko:"가져간다", t:"verb"},
        {en:"the letter", ko:"그 편지를", t:"obj"},
        {en:"to the hospital", ko:"병원으로", t:"mod"}]},
      {n:18, full:"그 목격자는 그 이야기를 안다", chunks:[
        {en:"The witness", ko:"그 목격자는", t:"subj"},
        {en:"knows", ko:"안다", t:"verb"},
        {en:"the story", ko:"그 이야기를", t:"obj"}]},
      {n:19, full:"그 환자는 그 차가운 우유가 필요하다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"needs", ko:"필요로 한다", t:"verb"},
        {en:"the cold milk", ko:"그 차가운 우유를", t:"obj"}]},
      {n:20, full:"그 시민은 그 도시에서 역사를 배운다", chunks:[
        {en:"The citizen", ko:"그 시민은", t:"subj"},
        {en:"learns", ko:"배운다", t:"verb"},
        {en:"history", ko:"역사를", t:"obj"},
        {en:"in the city", ko:"그 도시에서", t:"mod"}]},
      {n:21, full:"그 친구는 그 공짜 음식을 들고 다닌다", chunks:[
        {en:"The friend", ko:"그 친구는", t:"subj"},
        {en:"carries", ko:"들고 다닌다", t:"verb"},
        {en:"the free food", ko:"그 공짜 음식을", t:"obj"}]},
      {n:22, full:"그 영웅은 그 부드러운 담요가 필요하다", chunks:[
        {en:"The hero", ko:"그 영웅은", t:"subj"},
        {en:"needs", ko:"필요로 한다", t:"verb"},
        {en:"the soft blanket", ko:"그 부드러운 담요를", t:"obj"}]},
      {n:23, full:"그 시인은 방에서 그 그림을 그린다", chunks:[
        {en:"The poet", ko:"그 시인은", t:"subj"},
        {en:"paints", ko:"그린다", t:"verb"},
        {en:"the picture", ko:"그 그림을", t:"obj"},
        {en:"in the room", ko:"방에서", t:"mod"}]},
      {n:24, full:"그 아이는 마른 잎을 자른다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"cuts", ko:"자른다", t:"verb"},
        {en:"a dry leaf", ko:"마른 잎을", t:"obj"}]},
      {n:25, full:"그 소녀는 정원에서 그림을 그린다", chunks:[
        {en:"The girl", ko:"그 소녀는", t:"subj"},
        {en:"paints", ko:"그린다", t:"verb"},
        {en:"a picture", ko:"그림을", t:"obj"},
        {en:"in the garden", ko:"정원에서", t:"mod"}]},
      {n:26, full:"그 개척자는 그 깊은 강을 연구한다", chunks:[
        {en:"The pioneer", ko:"그 개척자는", t:"subj"},
        {en:"studies", ko:"연구한다", t:"verb"},
        {en:"the deep river", ko:"그 깊은 강을", t:"obj"}]},
      {n:27, full:"그 팀은 그 어두운 하늘을 연구한다", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"studies", ko:"연구한다", t:"verb"},
        {en:"the dark sky", ko:"그 어두운 하늘을", t:"obj"}]},
      {n:28, full:"그 남자는 그 젖은 거리에서 그 소년을 찾아간다", chunks:[
        {en:"The man", ko:"그 남자는", t:"subj"},
        {en:"visits", ko:"찾아간다", t:"verb"},
        {en:"the boy", ko:"그 소년을", t:"obj"},
        {en:"on the wet street", ko:"그 젖은 거리에서", t:"mod"}]},
      {n:29, full:"그 키 큰 남자가 그 다리를 짓는다", chunks:[
        {en:"The tall man", ko:"그 키 큰 남자가", t:"subj"},
        {en:"builds", ko:"짓는다", t:"verb"},
        {en:"the bridge", ko:"그 다리를", t:"obj"}]},
      {n:30, full:"그 개척자는 들판에서 그 지도를 사용한다", chunks:[
        {en:"The pioneer", ko:"그 개척자는", t:"subj"},
        {en:"uses", ko:"사용한다", t:"verb"},
        {en:"the map", ko:"그 지도를", t:"obj"},
        {en:"in the field", ko:"들판에서", t:"mod"}]},
      {n:31, full:"그 비평가는 나쁜 이야기를 읽는다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"reads", ko:"읽는다", t:"verb"},
        {en:"a bad story", ko:"나쁜 이야기를", t:"obj"}]},
      {n:32, full:"그 전설은 시간이 지나면서 역사를 배운다", chunks:[
        {en:"The legend", ko:"그 전설은", t:"subj"},
        {en:"learns", ko:"배운다", t:"verb"},
        {en:"history", ko:"역사를", t:"obj"},
        {en:"over time", ko:"시간이 지나면서", t:"mod"}]},
      {n:33, full:"그 목격자는 그 답을 영원히 기억한다", chunks:[
        {en:"The witness", ko:"그 목격자는", t:"subj"},
        {en:"remembers", ko:"기억한다", t:"verb"},
        {en:"the answer", ko:"그 답을", t:"obj"},
        {en:"forever", ko:"영원히", t:"mod"}]},
      {n:34, full:"그 조용한 소년은 그 책을 읽는다", chunks:[
        {en:"The quiet boy", ko:"그 조용한 소년은", t:"subj"},
        {en:"reads", ko:"읽는다", t:"verb"},
        {en:"the book", ko:"그 책을", t:"obj"}]},
      {n:35, full:"그 운동선수는 그 달콤한 과일을 먹는다", chunks:[
        {en:"The athlete", ko:"그 운동선수는", t:"subj"},
        {en:"eats", ko:"먹는다", t:"verb"},
        {en:"the sweet fruit", ko:"그 달콤한 과일을", t:"obj"}]},
      {n:36, full:"그 여자는 사무실에서 지도를 그린다", chunks:[
        {en:"The woman", ko:"그 여자는", t:"subj"},
        {en:"draws", ko:"그린다", t:"verb"},
        {en:"a map", ko:"지도를", t:"obj"},
        {en:"in the office", ko:"사무실에서", t:"mod"}]},
      {n:37, full:"그 팀은 길 위에서 그 지도를 사용한다", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"uses", ko:"사용한다", t:"verb"},
        {en:"the map", ko:"그 지도를", t:"obj"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:38, full:"그 개척자는 들판에서 그 건축가를 안다", chunks:[
        {en:"The pioneer", ko:"그 개척자는", t:"subj"},
        {en:"knows", ko:"안다", t:"verb"},
        {en:"the architect", ko:"그 건축가를", t:"obj"},
        {en:"in the field", ko:"들판에서", t:"mod"}]},
      {n:39, full:"그 목격자는 밤에 그 책을 끝낸다", chunks:[
        {en:"The witness", ko:"그 목격자는", t:"subj"},
        {en:"finishes", ko:"끝낸다", t:"verb"},
        {en:"the book", ko:"그 책을", t:"obj"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:40, full:"그 회사는 집에서 그 친구를 찾아간다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"visits", ko:"찾아간다", t:"verb"},
        {en:"the friend", ko:"그 친구를", t:"obj"},
        {en:"in the house", ko:"집에서", t:"mod"}]}
    ]},{ id:"3형식(2)", items:[
      {n:1, full:"그 비평가는 밤에 그 소녀와 결혼한다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"marries", ko:"결혼한다", t:"verb"},
        {en:"the girl", ko:"그 소녀와", t:"obj"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:2, full:"그 비평가는 그 강당에서 그 군중에게 연설한다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"addresses", ko:"연설한다", t:"verb"},
        {en:"the crowd", ko:"그 군중에게", t:"obj"},
        {en:"in the hall", ko:"그 강당에서", t:"mod"}]},
      {n:3, full:"그 전문가는 시장에서 그 차분한 목격자에게 다가간다", chunks:[
        {en:"The expert", ko:"그 전문가는", t:"subj"},
        {en:"approaches", ko:"다가간다", t:"verb"},
        {en:"the calm witness", ko:"그 차분한 목격자에게", t:"obj"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:4, full:"그 비평가는 시장에서 그 위험을 가중시킨다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"adds to", ko:"가중시킨다", t:"verb"},
        {en:"the danger", ko:"그 위험을", t:"obj"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:5, full:"그 손님은 아침에 그 비평가를 기다린다", chunks:[
        {en:"The guest", ko:"그 손님은", t:"subj"},
        {en:"awaits", ko:"기다린다", t:"verb"},
        {en:"the critic", ko:"그 비평가를", t:"obj"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:6, full:"그 시민은 일찍 그 집에 들어간다", chunks:[
        {en:"The citizen", ko:"그 시민은", t:"subj"},
        {en:"enters", ko:"들어간다", t:"verb"},
        {en:"the house", ko:"그 집에", t:"obj"},
        {en:"early", ko:"일찍", t:"mod"}]},
      {n:7, full:"개척자들은 그 젖은 길 근처의 들판에 산다", chunks:[
        {en:"Pioneers", ko:"개척자들은", t:"subj"},
        {en:"inhabit", ko:"산다", t:"verb"},
        {en:"the field", ko:"그 들판에", t:"obj"},
        {en:"near the wet road", ko:"그 젖은 길 근처에", t:"mod"}]},
      {n:8, full:"그 의사는 그 그림 속 키 큰 영웅을 닮았다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"resembles", ko:"닮았다", t:"verb"},
        {en:"the tall hero", ko:"그 키 큰 영웅을", t:"obj"},
        {en:"in the picture", ko:"그 그림 속에서", t:"mod"}]},
      {n:9, full:"그 운동선수는 영원히 그 전설을 따른다", chunks:[
        {en:"The athlete", ko:"그 운동선수는", t:"subj"},
        {en:"obeys", ko:"따른다", t:"verb"},
        {en:"the legend", ko:"그 전설을", t:"obj"},
        {en:"forever", ko:"영원히", t:"mod"}]},
      {n:10, full:"그 의사는 사무실에서 그 이상한 생각을 논의한다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"discusses", ko:"논의한다", t:"verb"},
        {en:"the strange idea", ko:"그 이상한 생각을", t:"obj"},
        {en:"in the office", ko:"사무실에서", t:"mod"}]},
      {n:11, full:"그 의사는 학교에서 그 진실을 다룬다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"addresses", ko:"다룬다", t:"verb"},
        {en:"the truth", ko:"그 진실을", t:"obj"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:12, full:"그 고객은 거리에서 그 환자에게 공감한다", chunks:[
        {en:"The customer", ko:"그 고객은", t:"subj"},
        {en:"sympathizes with", ko:"공감한다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"in the street", ko:"거리에서", t:"mod"}]},
      {n:13, full:"그 고객은 그 도시에서 그 문제를 가중시킨다", chunks:[
        {en:"The customer", ko:"그 고객은", t:"subj"},
        {en:"adds to", ko:"가중시킨다", t:"verb"},
        {en:"the problem", ko:"그 문제를", t:"obj"},
        {en:"in the city", ko:"그 도시에서", t:"mod"}]},
      {n:14, full:"그 운동선수는 길 위에서 그 전문가를 기다린다", chunks:[
        {en:"The athlete", ko:"그 운동선수는", t:"subj"},
        {en:"waits for", ko:"기다린다", t:"verb"},
        {en:"the expert", ko:"그 전문가를", t:"obj"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:15, full:"그 운동선수는 아침에 그 학교에 다닌다", chunks:[
        {en:"The athlete", ko:"그 운동선수는", t:"subj"},
        {en:"attends", ko:"다닌다", t:"verb"},
        {en:"the school", ko:"그 학교에", t:"obj"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:16, full:"그 비평가는 그 진실을 바란다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"hopes for", ko:"바란다", t:"verb"},
        {en:"the truth", ko:"그 진실을", t:"obj"}]},
      {n:17, full:"그 군중은 시장에서 그 손님을 기다린다", chunks:[
        {en:"The crowd", ko:"그 군중은", t:"subj"},
        {en:"waits for", ko:"기다린다", t:"verb"},
        {en:"the guest", ko:"그 손님을", t:"obj"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:18, full:"그 소녀는 창가에서 어머니를 닮았다", chunks:[
        {en:"The girl", ko:"그 소녀는", t:"subj"},
        {en:"resembles", ko:"닮았다", t:"verb"},
        {en:"the mother", ko:"어머니를", t:"obj"},
        {en:"at the window", ko:"창가에서", t:"mod"}]},
      {n:19, full:"그 의사는 학교에서 그 계획을 방해한다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"interferes with", ko:"방해한다", t:"verb"},
        {en:"the plan", ko:"그 계획을", t:"obj"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:20, full:"그 비평가는 길 위에서 그 열린 상자를 고려한다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"considers", ko:"고려한다", t:"verb"},
        {en:"the open box", ko:"그 열린 상자를", t:"obj"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:21, full:"그 의사는 그 도시에서 그 여자와 결혼한다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"marries", ko:"결혼한다", t:"verb"},
        {en:"the woman", ko:"그 여자와", t:"obj"},
        {en:"in the city", ko:"그 도시에서", t:"mod"}]},
      {n:22, full:"그 환자는 그 회사를 따른다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"obeys", ko:"따른다", t:"verb"},
        {en:"the company", ko:"그 회사를", t:"obj"}]},
      {n:23, full:"그 운동선수는 아침에 그 다리에 도달한다", chunks:[
        {en:"The athlete", ko:"그 운동선수는", t:"subj"},
        {en:"reaches", ko:"도달한다", t:"verb"},
        {en:"the bridge", ko:"그 다리에", t:"obj"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:24, full:"그 전문가는 아침에 그 가격을 설명한다", chunks:[
        {en:"The expert", ko:"그 전문가는", t:"subj"},
        {en:"accounts for", ko:"설명한다", t:"verb"},
        {en:"the price", ko:"그 가격을", t:"obj"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:25, full:"그 운동선수는 아침에 변화를 바란다", chunks:[
        {en:"The athlete", ko:"그 운동선수는", t:"subj"},
        {en:"hopes for", ko:"바란다", t:"verb"},
        {en:"a change", ko:"변화를", t:"obj"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:26, full:"그 고객은 밤에 그 정원에 들어간다", chunks:[
        {en:"The customer", ko:"그 고객은", t:"subj"},
        {en:"enters", ko:"들어간다", t:"verb"},
        {en:"the garden", ko:"그 정원에", t:"obj"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:27, full:"그 의사는 학교에서 그 문제를 설명한다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"accounts for", ko:"설명한다", t:"verb"},
        {en:"the problem", ko:"그 문제를", t:"obj"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:28, full:"그 고객은 시장에서 그 결과를 기다린다", chunks:[
        {en:"The customer", ko:"그 고객은", t:"subj"},
        {en:"awaits", ko:"기다린다", t:"verb"},
        {en:"the result", ko:"그 결과를", t:"obj"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:29, full:"그 시민은 밤에 그 학교에 다닌다", chunks:[
        {en:"The citizen", ko:"그 시민은", t:"subj"},
        {en:"attends", ko:"다닌다", t:"verb"},
        {en:"the school", ko:"그 학교에", t:"obj"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:30, full:"그 의사는 학교에서 그 운동선수에게 공감한다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"sympathizes with", ko:"공감한다", t:"verb"},
        {en:"the athlete", ko:"그 운동선수에게", t:"obj"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:31, full:"그 비평가는 방에서 그 역사를 논의한다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"discusses", ko:"논의한다", t:"verb"},
        {en:"the history", ko:"그 역사를", t:"obj"},
        {en:"in the room", ko:"방에서", t:"mod"}]},
      {n:32, full:"그 전문가는 길 위에서 그 경기를 방해한다", chunks:[
        {en:"The expert", ko:"그 전문가는", t:"subj"},
        {en:"interferes with", ko:"방해한다", t:"verb"},
        {en:"the game", ko:"그 경기를", t:"obj"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:33, full:"시민들은 그 깊은 강 근처의 숲에 산다", chunks:[
        {en:"Citizens", ko:"시민들은", t:"subj"},
        {en:"inhabit", ko:"산다", t:"verb"},
        {en:"the forest", ko:"그 숲에", t:"obj"},
        {en:"near the deep river", ko:"그 깊은 강 근처에", t:"mod"}]},
      {n:34, full:"그 고객은 시장에서 그 가격에 반대한다", chunks:[
        {en:"The customer", ko:"그 고객은", t:"subj"},
        {en:"objects to", ko:"반대한다", t:"verb"},
        {en:"the price", ko:"그 가격에", t:"obj"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:35, full:"그 시민은 길 위에서 그 계획에 반대한다", chunks:[
        {en:"The citizen", ko:"그 시민은", t:"subj"},
        {en:"objects to", ko:"반대한다", t:"verb"},
        {en:"the plan", ko:"그 계획에", t:"obj"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:36, full:"그 손님은 밤에 그 시장에 도달한다", chunks:[
        {en:"The guest", ko:"그 손님은", t:"subj"},
        {en:"reaches", ko:"도달한다", t:"verb"},
        {en:"the market", ko:"그 시장에", t:"obj"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:37, full:"그 의사는 거리에서 그 천재에게 대답한다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"answers", ko:"대답한다", t:"verb"},
        {en:"the genius", ko:"그 천재에게", t:"obj"},
        {en:"in the street", ko:"거리에서", t:"mod"}]},
      {n:38, full:"그 전문가는 학교에서 그 문제를 고려한다", chunks:[
        {en:"The expert", ko:"그 전문가는", t:"subj"},
        {en:"considers", ko:"고려한다", t:"verb"},
        {en:"the problem", ko:"그 문제를", t:"obj"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:39, full:"그 환자는 병원에서 그 편지에 답한다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"answers", ko:"답한다", t:"verb"},
        {en:"the letter", ko:"그 편지에", t:"obj"},
        {en:"at the hospital", ko:"병원에서", t:"mod"}]},
      {n:40, full:"그 손님은 길 위에서 그 바쁜 남자에게 다가간다", chunks:[
        {en:"The guest", ko:"그 손님은", t:"subj"},
        {en:"approaches", ko:"다가간다", t:"verb"},
        {en:"the busy man", ko:"그 바쁜 남자에게", t:"obj"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]}
    ]},
    { id:"4형식(1)", items:[
      {n:1, full:"그 시민은 그 아이에게 코트를 찾아준다", chunks:[
        {en:"The citizen", ko:"그 시민은", t:"subj"},
        {en:"finds", ko:"찾아준다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"a coat", ko:"코트를", t:"obj"}]},
      {n:2, full:"그 친구는 그 남자에게 코트를 빌려준다", chunks:[
        {en:"The friend", ko:"그 친구는", t:"subj"},
        {en:"lends", ko:"빌려준다", t:"verb"},
        {en:"the man", ko:"그 남자에게", t:"obj"},
        {en:"a coat", ko:"코트를", t:"obj"}]},
      {n:3, full:"그 회사들은 그 고객에게 코트를 판다", chunks:[
        {en:"The companies", ko:"그 회사들은", t:"subj"},
        {en:"sell", ko:"판다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"a coat", ko:"코트를", t:"obj"}]},
      {n:4, full:"그 여자들은 그 남자에게 그림을 만들어준다", chunks:[
        {en:"The women", ko:"그 여자들은", t:"subj"},
        {en:"make", ko:"만들어준다", t:"verb"},
        {en:"the man", ko:"그 남자에게", t:"obj"},
        {en:"a picture", ko:"그림을", t:"obj"}]},
      {n:5, full:"그 고객은 그 친구에게 과일을 주문해준다", chunks:[
        {en:"The customer", ko:"그 고객은", t:"subj"},
        {en:"orders", ko:"주문해준다", t:"verb"},
        {en:"the friend", ko:"그 친구에게", t:"obj"},
        {en:"fruit", ko:"과일을", t:"obj"}]},
      {n:6, full:"그 고객은 그 회사에 답변을 요청한다", chunks:[{en:"The customer",ko:"그 고객은",t:"subj"},{en:"requests",ko:"요청한다",t:"verb"},{en:"an answer",ko:"답변을",t:"obj"},{en:"of the company",ko:"그 회사에",t:"mod"}]},
      {n:7, full:"그 아이는 그 전문가에게 부탁을 한다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"asks", ko:"부탁한다", t:"verb"},
        {en:"the expert", ko:"그 전문가에게", t:"obj"},
        {en:"a favor", ko:"부탁을", t:"obj"}]},
      {n:8, full:"그 아이는 그 소년에게 그림을 골라준다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"chooses", ko:"골라준다", t:"verb"},
        {en:"the boy", ko:"그 소년에게", t:"obj"},
        {en:"a picture", ko:"그림을", t:"obj"}]},
      {n:9, full:"그 남자는 그 여자에게 택시를 불러준다", chunks:[
        {en:"The man", ko:"그 남자는", t:"subj"},
        {en:"calls", ko:"불러준다", t:"verb"},
        {en:"the woman", ko:"그 여자에게", t:"obj"},
        {en:"a taxi", ko:"택시를", t:"obj"}]},
      {n:10, full:"그 회사들은 그 고객에게 1분을 내준다", chunks:[
        {en:"The companies", ko:"그 회사들은", t:"subj"},
        {en:"spare", ko:"내준다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"a minute", ko:"1분을", t:"obj"}]},
      {n:11, full:"그 회사들은 그 고객에게 답을 준다", chunks:[
        {en:"The companies", ko:"그 회사들은", t:"subj"},
        {en:"give", ko:"준다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"an answer", ko:"답을", t:"obj"}]},
      {n:12, full:"그 운동선수는 그 소녀에게 과일을 던져준다", chunks:[
        {en:"The athlete", ko:"그 운동선수는", t:"subj"},
        {en:"throws", ko:"던져준다", t:"verb"},
        {en:"the girl", ko:"그 소녀에게", t:"obj"},
        {en:"fruit", ko:"과일을", t:"obj"}]},
      {n:13, full:"그 비평가들은 그 친구에게 이야기를 써준다", chunks:[
        {en:"The critics", ko:"그 비평가들은", t:"subj"},
        {en:"write", ko:"써준다", t:"verb"},
        {en:"the friend", ko:"그 친구에게", t:"obj"},
        {en:"a story", ko:"이야기를", t:"obj"}]},
      {n:14, full:"그 전문가들은 지도를 필요로 한다", chunks:[
        {en:"The experts", ko:"그 전문가들은", t:"subj"},
        {en:"require", ko:"필요로 한다", t:"verb"},
        {en:"a map", ko:"지도를", t:"obj"}]},
      {n:15, full:"그 의사들은 그 환자에게 우유를 판다", chunks:[
        {en:"The doctors", ko:"그 의사들은", t:"subj"},
        {en:"sell", ko:"판다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"milk", ko:"우유를", t:"obj"}]},
      {n:16, full:"그 의사는 그 손님에게 택시를 불러준다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"calls", ko:"불러준다", t:"verb"},
        {en:"the guest", ko:"그 손님에게", t:"obj"},
        {en:"a taxi", ko:"택시를", t:"obj"}]},
      {n:17, full:"그 친구들은 그 아이에게 이야기를 해준다", chunks:[
        {en:"The friends", ko:"그 친구들은", t:"subj"},
        {en:"tell", ko:"말해준다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"a story", ko:"이야기를", t:"obj"}]},
      {n:18, full:"그 고객들은 그 비평가에게 부탁을 한다", chunks:[{en:"The customers",ko:"그 고객들은",t:"subj"},{en:"ask",ko:"청한다",t:"verb"},{en:"the critic",ko:"그 비평가에게",t:"obj"},{en:"a favor",ko:"부탁을",t:"obj"}]},
      {n:19, full:"그 소년은 그 친구에게 상자를 던져준다", chunks:[
        {en:"The boy", ko:"그 소년은", t:"subj"},
        {en:"throws", ko:"던져준다", t:"verb"},
        {en:"the friend", ko:"그 친구에게", t:"obj"},
        {en:"a box", ko:"상자를", t:"obj"}]},
      {n:20, full:"그 의사들은 그 환자에게 증거를 보여준다", chunks:[
        {en:"The doctors", ko:"그 의사들은", t:"subj"},
        {en:"show", ko:"보여준다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"evidence", ko:"증거를", t:"obj"}]},
      {n:21, full:"그 전문가는 그 아이에게 역사를 가르쳐준다", chunks:[
        {en:"The expert", ko:"그 전문가는", t:"subj"},
        {en:"teaches", ko:"가르쳐준다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"history", ko:"역사를", t:"obj"}]},
      {n:22, full:"그 환자는 그 의사에게 질문을 한다", chunks:[{en:"The patient",ko:"그 환자는",t:"subj"},{en:"asks",ko:"묻는다",t:"verb"},{en:"the doctor",ko:"그 의사에게",t:"obj"},{en:"a question",ko:"질문을",t:"obj"}]},
      {n:23, full:"그 친구는 그 남자에게 상자를 구해준다", chunks:[
        {en:"The friend", ko:"그 친구는", t:"subj"},
        {en:"gets", ko:"구해준다", t:"verb"},
        {en:"the man", ko:"그 남자에게", t:"obj"},
        {en:"a box", ko:"상자를", t:"obj"}]},
      {n:24, full:"그 의사들은 그 환자에게 1분을 내준다", chunks:[
        {en:"The doctors", ko:"그 의사들은", t:"subj"},
        {en:"spare", ko:"내준다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"a minute", ko:"1분을", t:"obj"}]},
      {n:25, full:"그 의사는 그 환자에게 아이디어를 약속한다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"promises", ko:"약속한다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"an idea", ko:"아이디어를", t:"obj"}]},
      {n:26, full:"그 시민들은 그 전문가에게 증거를 요구한다", chunks:[
        {en:"The citizens", ko:"그 시민들은", t:"subj"},
        {en:"demand", ko:"요구한다", t:"verb"},
        {en:"evidence", ko:"증거를", t:"obj"},
        {en:"of the expert", ko:"그 전문가에게", t:"mod"}]},
      {n:27, full:"그 아이는 그 의사에게 호의를 베푼다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"does", ko:"해준다", t:"verb"},
        {en:"the doctor", ko:"그 의사에게", t:"obj"},
        {en:"a favor", ko:"호의를", t:"obj"}]},
      {n:28, full:"그 친구들은 그 손님에게 지도를 찾아준다", chunks:[
        {en:"The friends", ko:"그 친구들은", t:"subj"},
        {en:"find", ko:"찾아준다", t:"verb"},
        {en:"the guest", ko:"그 손님에게", t:"obj"},
        {en:"a map", ko:"지도를", t:"obj"}]},
      {n:29, full:"그 의사들은 그 환자에게 답을 구해준다", chunks:[
        {en:"The doctors", ko:"그 의사들은", t:"subj"},
        {en:"get", ko:"구해준다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"an answer", ko:"답을", t:"obj"}]},
      {n:30, full:"그 의사는 그 환자에게 답을 써준다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"writes", ko:"써준다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"an answer", ko:"답을", t:"obj"}]},
      {n:31, full:"그 친구는 그 손님에게 답을 보내준다", chunks:[
        {en:"The friend", ko:"그 친구는", t:"subj"},
        {en:"sends", ko:"보내준다", t:"verb"},
        {en:"the guest", ko:"그 손님에게", t:"obj"},
        {en:"an answer", ko:"답을", t:"obj"}]},
      {n:32, full:"그 의사는 그 환자에게 수프를 준비해준다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"prepares", ko:"준비해준다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"soup", ko:"수프를", t:"obj"}]},
      {n:33, full:"그 고객은 그 회사에 진실을 요구한다", chunks:[{en:"The customer",ko:"그 고객은",t:"subj"},{en:"demands",ko:"요구한다",t:"verb"},{en:"the truth",ko:"진실을",t:"obj"},{en:"of the company",ko:"그 회사에",t:"mod"}]},
      {n:34, full:"그 회사들은 그 고객에게 음식을 준비해준다", chunks:[
        {en:"The companies", ko:"그 회사들은", t:"subj"},
        {en:"prepare", ko:"준비해준다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"food", ko:"음식을", t:"obj"}]},
      {n:35, full:"그 회사는 그 고객에게 편지를 보낸다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"sends", ko:"보낸다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"a letter", ko:"편지를", t:"obj"}]},
      {n:36, full:"그 시민들은 그 환자에게 의사를 불러준다", chunks:[
        {en:"The citizens", ko:"그 시민들은", t:"subj"},
        {en:"call", ko:"불러준다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"a doctor", ko:"의사를", t:"obj"}]},
      {n:37, full:"그 의사들은 그 목격자에게 증거를 요청한다", chunks:[
        {en:"The doctors", ko:"그 의사들은", t:"subj"},
        {en:"request", ko:"요청한다", t:"verb"},
        {en:"evidence", ko:"증거를", t:"obj"},
        {en:"of the witness", ko:"그 목격자에게", t:"mod"}]},
      {n:38, full:"그 시인들은 그 손님에게 편지를 써준다", chunks:[
        {en:"The poets", ko:"그 시인들은", t:"subj"},
        {en:"write", ko:"써준다", t:"verb"},
        {en:"the guest", ko:"그 손님에게", t:"obj"},
        {en:"a letter", ko:"편지를", t:"obj"}]},
      {n:39, full:"그 비평가들은 그 시인에게 답을 요구한다", chunks:[
        {en:"The critics", ko:"그 비평가들은", t:"subj"},
        {en:"require", ko:"요구한다", t:"verb"},
        {en:"an answer", ko:"답을", t:"obj"},
        {en:"of the poet", ko:"그 시인에게", t:"mod"}]},
      {n:40, full:"그 비평가는 그 친구에게 이야기를 보여준다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"shows", ko:"보여준다", t:"verb"},
        {en:"the friend", ko:"그 친구에게", t:"obj"},
        {en:"a story", ko:"이야기를", t:"obj"}]},
      {n:41, full:"그 고객은 그 친구에게 과일을 판다", chunks:[
        {en:"The customer", ko:"그 고객은", t:"subj"},
        {en:"sells", ko:"판다", t:"verb"},
        {en:"the friend", ko:"그 친구에게", t:"obj"},
        {en:"fruit", ko:"과일을", t:"obj"}]},
      {n:42, full:"그 여자들은 그 소녀에게 과일을 사준다", chunks:[
        {en:"The women", ko:"그 여자들은", t:"subj"},
        {en:"buy", ko:"사준다", t:"verb"},
        {en:"the girl", ko:"그 소녀에게", t:"obj"},
        {en:"fruit", ko:"과일을", t:"obj"}]},
      {n:43, full:"그 회사는 그 팀에게 지도를 약속한다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"promises", ko:"약속한다", t:"verb"},
        {en:"the team", ko:"그 팀에게", t:"obj"},
        {en:"a map", ko:"지도를", t:"obj"}]},
      {n:44, full:"그 의사는 그 환자에게 답을 찾아준다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"finds", ko:"찾아준다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"an answer", ko:"답을", t:"obj"}]},
      {n:45, full:"그 친구들은 그 아이에게 수프를 요리해준다", chunks:[
        {en:"The friends", ko:"그 친구들은", t:"subj"},
        {en:"cook", ko:"요리해준다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"soup", ko:"수프를", t:"obj"}]},
      {n:46, full:"그 회사는 그 고객에게 상자를 빌려준다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"lends", ko:"빌려준다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"a box", ko:"상자를", t:"obj"}]},
      {n:47, full:"그 남자는 그 아이에게 음식을 사준다", chunks:[
        {en:"The man", ko:"그 남자는", t:"subj"},
        {en:"buys", ko:"사준다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"food", ko:"음식을", t:"obj"}]},
      {n:48, full:"그 건축가는 그 의사에게 그림을 건네준다", chunks:[
        {en:"The architect", ko:"그 건축가는", t:"subj"},
        {en:"hands", ko:"건네준다", t:"verb"},
        {en:"the doctor", ko:"그 의사에게", t:"obj"},
        {en:"a picture", ko:"그림을", t:"obj"}]},
      {n:49, full:"그 친구들은 그 아이에게 책을 약속한다", chunks:[
        {en:"The friends", ko:"그 친구들은", t:"subj"},
        {en:"promise", ko:"약속한다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"a book", ko:"책을", t:"obj"}]},
      {n:50, full:"그 남자는 그 여자에게 음식을 요리해준다", chunks:[
        {en:"The man", ko:"그 남자는", t:"subj"},
        {en:"cooks", ko:"요리해준다", t:"verb"},
        {en:"the woman", ko:"그 여자에게", t:"obj"},
        {en:"food", ko:"음식을", t:"obj"}]},
      {n:51, full:"그 남자들은 그 여자에게 수프를 주문해준다", chunks:[
        {en:"The men", ko:"그 남자들은", t:"subj"},
        {en:"order", ko:"주문해준다", t:"verb"},
        {en:"the woman", ko:"그 여자에게", t:"obj"},
        {en:"soup", ko:"수프를", t:"obj"}]},
      {n:52, full:"그 남자들은 그 여자에게 상자를 건네준다", chunks:[
        {en:"The men", ko:"그 남자들은", t:"subj"},
        {en:"hand", ko:"건네준다", t:"verb"},
        {en:"the woman", ko:"그 여자에게", t:"obj"},
        {en:"a box", ko:"상자를", t:"obj"}]},
      {n:53, full:"그 친구는 그 아이에게 수프를 만들어준다", chunks:[
        {en:"The friend", ko:"그 친구는", t:"subj"},
        {en:"makes", ko:"만들어준다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"soup", ko:"수프를", t:"obj"}]},
      {n:54, full:"그 남자들은 그 여자에게 호의를 베푼다", chunks:[
        {en:"The men", ko:"그 남자들은", t:"subj"},
        {en:"do", ko:"해준다", t:"verb"},
        {en:"the woman", ko:"그 여자에게", t:"obj"},
        {en:"a favor", ko:"호의를", t:"obj"}]},
      {n:55, full:"그 소녀들은 그 친구에게 편지를 건네준다", chunks:[
        {en:"The girls", ko:"그 소녀들은", t:"subj"},
        {en:"hand", ko:"건네준다", t:"verb"},
        {en:"the friend", ko:"그 친구에게", t:"obj"},
        {en:"a letter", ko:"편지를", t:"obj"}]},
      {n:56, full:"그 건축가들은 그 고객에게 그림을 보여준다", chunks:[
        {en:"The architects", ko:"그 건축가들은", t:"subj"},
        {en:"show", ko:"보여준다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"a picture", ko:"그림을", t:"obj"}]},
      {n:57, full:"그 환자들은 그 의사에게 답을 요구한다", chunks:[
        {en:"The patients", ko:"그 환자들은", t:"subj"},
        {en:"demand", ko:"요구한다", t:"verb"},
        {en:"an answer", ko:"답을", t:"obj"},
        {en:"of the doctor", ko:"그 의사에게", t:"mod"}]},
      {n:58, full:"그 고객들은 그 친구에게 코트를 골라준다", chunks:[
        {en:"The customers", ko:"그 고객들은", t:"subj"},
        {en:"choose", ko:"골라준다", t:"verb"},
        {en:"the friend", ko:"그 친구에게", t:"obj"},
        {en:"a coat", ko:"코트를", t:"obj"}]},
      {n:59, full:"그 여자들은 그 소녀에게 책을 골라준다", chunks:[
        {en:"The women", ko:"그 여자들은", t:"subj"},
        {en:"choose", ko:"골라준다", t:"verb"},
        {en:"the girl", ko:"그 소녀에게", t:"obj"},
        {en:"a book", ko:"책을", t:"obj"}]},
      {n:60, full:"그 친구는 그 손님에게 호의를 베푼다", chunks:[
        {en:"The friend", ko:"그 친구는", t:"subj"},
        {en:"does", ko:"해준다", t:"verb"},
        {en:"the guest", ko:"그 손님에게", t:"obj"},
        {en:"a favor", ko:"호의를", t:"obj"}]},
      {n:61, full:"그 남자들은 그 소년에게 답을 말해준다", chunks:[
        {en:"The men", ko:"그 남자들은", t:"subj"},
        {en:"tell", ko:"말해준다", t:"verb"},
        {en:"the boy", ko:"그 소년에게", t:"obj"},
        {en:"an answer", ko:"답을", t:"obj"}]},
      {n:62, full:"그 손님들은 그 아이에게 우유를 주문해준다", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"order", ko:"주문해준다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"milk", ko:"우유를", t:"obj"}]},
      {n:63, full:"그 시인들은 그 손님에게 책을 빌려준다", chunks:[
        {en:"The poets", ko:"그 시인들은", t:"subj"},
        {en:"lend", ko:"빌려준다", t:"verb"},
        {en:"the guest", ko:"그 손님에게", t:"obj"},
        {en:"a book", ko:"책을", t:"obj"}]},
      {n:64, full:"그 전문가는 그 아이에게 지도를 준다", chunks:[
        {en:"The expert", ko:"그 전문가는", t:"subj"},
        {en:"gives", ko:"준다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"a map", ko:"지도를", t:"obj"}]},
      {n:65, full:"그 여자는 그 아이에게 답을 준비해준다", chunks:[
        {en:"The woman", ko:"그 여자는", t:"subj"},
        {en:"prepares", ko:"준비해준다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"an answer", ko:"답을", t:"obj"}]},
      {n:66, full:"그 손님들은 그 고객에게 지도를 구해준다", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"get", ko:"구해준다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"a map", ko:"지도를", t:"obj"}]},
      {n:67, full:"그 의사는 그 환자에게 책을 준다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"gives", ko:"준다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"a book", ko:"책을", t:"obj"}]},
      {n:68, full:"그 시인은 그 소년에게 이야기를 가르쳐준다", chunks:[
        {en:"The poet", ko:"그 시인은", t:"subj"},
        {en:"teaches", ko:"가르쳐준다", t:"verb"},
        {en:"the boy", ko:"그 소년에게", t:"obj"},
        {en:"a story", ko:"이야기를", t:"obj"}]},
      {n:69, full:"그 여자들은 그 손님에게 수프를 요리해준다", chunks:[
        {en:"The women", ko:"그 여자들은", t:"subj"},
        {en:"cook", ko:"요리해준다", t:"verb"},
        {en:"the guest", ko:"그 손님에게", t:"obj"},
        {en:"soup", ko:"수프를", t:"obj"}]},
      {n:70, full:"그 의사들은 그 환자에게 아이디어를 가르쳐준다", chunks:[
        {en:"The doctors", ko:"그 의사들은", t:"subj"},
        {en:"teach", ko:"가르쳐준다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"an idea", ko:"아이디어를", t:"obj"}]},
      {n:71, full:"그 아이들은 그 남자에게 코트를 던져준다", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"throw", ko:"던져준다", t:"verb"},
        {en:"the man", ko:"그 남자에게", t:"obj"},
        {en:"a coat", ko:"코트를", t:"obj"}]},
      {n:72, full:"그 팀은 그 전문가에게 부탁을 요청한다", chunks:[{en:"The team",ko:"그 팀은",t:"subj"},{en:"requests",ko:"요청한다",t:"verb"},{en:"a favor",ko:"부탁을",t:"obj"},{en:"of the expert",ko:"그 전문가에게",t:"mod"}]},
      {n:73, full:"그 시인은 그 소녀에게 상자를 만들어준다", chunks:[
        {en:"The poet", ko:"그 시인은", t:"subj"},
        {en:"makes", ko:"만들어준다", t:"verb"},
        {en:"the girl", ko:"그 소녀에게", t:"obj"},
        {en:"a box", ko:"상자를", t:"obj"}]},
      {n:74, full:"그 의사들은 그 환자에게 지도를 보내준다", chunks:[
        {en:"The doctors", ko:"그 의사들은", t:"subj"},
        {en:"send", ko:"보내준다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"a map", ko:"지도를", t:"obj"}]},
      {n:75, full:"그 회사는 그 팀에게 증거를 요구한다", chunks:[{en:"The company",ko:"그 회사는",t:"subj"},{en:"requires",ko:"요구한다",t:"verb"},{en:"evidence",ko:"증거를",t:"obj"},{en:"of the team",ko:"그 팀에게",t:"mod"}]},
      {n:76, full:"그 여자는 그 소녀에게 진실을 말해준다", chunks:[
        {en:"The woman", ko:"그 여자는", t:"subj"},
        {en:"tells", ko:"말해준다", t:"verb"},
        {en:"the girl", ko:"그 소녀에게", t:"obj"},
        {en:"the truth", ko:"그 진실을", t:"obj"}]},
      {n:77, full:"그 친구는 그 손님에게 1분을 내준다", chunks:[
        {en:"The friend", ko:"그 친구는", t:"subj"},
        {en:"spares", ko:"내준다", t:"verb"},
        {en:"the guest", ko:"그 손님에게", t:"obj"},
        {en:"a minute", ko:"1분을", t:"obj"}]},
      {n:78, full:"그 고객들은 그 친구에게 코트를 사준다", chunks:[
        {en:"The customers", ko:"그 고객들은", t:"subj"},
        {en:"buy", ko:"사준다", t:"verb"},
        {en:"the friend", ko:"그 친구에게", t:"obj"},
        {en:"a coat", ko:"코트를", t:"obj"}]}
    ]},
    { id:"4형식(2)", items:[
      {n:1, full:"그 고객은 그 친구에게 시계를 사준다", chunks:[
        {en:"The customer", ko:"그 고객은", t:"subj"},
        {en:"buys", ko:"사준다", t:"verb"},
        {en:"the friend", ko:"그 친구에게", t:"obj"},
        {en:"a watch", ko:"시계를", t:"obj"}]},
      {n:2, full:"그 아이들은 그 도시에서 아버지에게 병을 사준다", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"buy", ko:"사준다", t:"verb"},
        {en:"the father", ko:"아버지에게", t:"obj"},
        {en:"a bottle", ko:"병을", t:"obj"},
        {en:"in the city", ko:"그 도시에서", t:"mod"}]},
      {n:3, full:"그 친구는 아버지에게 병을 건네준다", chunks:[
        {en:"The friend", ko:"그 친구는", t:"subj"},
        {en:"hands", ko:"건네준다", t:"verb"},
        {en:"the father", ko:"아버지에게", t:"obj"},
        {en:"a bottle", ko:"병을", t:"obj"}]},
      {n:4, full:"그 의사는 그 형에게 가방을 건네준다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"hands", ko:"건네준다", t:"verb"},
        {en:"the brother", ko:"그 형에게", t:"obj"},
        {en:"a bag", ko:"가방을", t:"obj"}]},
      {n:5, full:"그 시인은 그 건축가에게 꽃을 사준다", chunks:[
        {en:"The poet", ko:"그 시인은", t:"subj"},
        {en:"buys", ko:"사준다", t:"verb"},
        {en:"the architect", ko:"그 건축가에게", t:"obj"},
        {en:"a flower", ko:"꽃을", t:"obj"}]},
      {n:6, full:"그 회사는 그 시민에게 문을 일찍 판다", chunks:[{en:"The company",ko:"그 회사는",t:"subj"},{en:"sells",ko:"판다",t:"verb"},{en:"the citizen",ko:"그 시민에게",t:"obj"},{en:"a door",ko:"문을",t:"obj"},{en:"early",ko:"일찍",t:"mod"}]},
      {n:7, full:"그 건축가는 그 고객에게 문을 보여준다", chunks:[{en:"The architect",ko:"그 건축가는",t:"subj"},{en:"shows",ko:"보여준다",t:"verb"},{en:"the customer",ko:"그 고객에게",t:"obj"},{en:"a door",ko:"문을",t:"obj"}]},
      {n:8, full:"그 비평가들은 학교에서 그 전문가에게 의자를 준다", chunks:[
        {en:"The critics", ko:"그 비평가들은", t:"subj"},
        {en:"give", ko:"준다", t:"verb"},
        {en:"the expert", ko:"그 전문가에게", t:"obj"},
        {en:"a chair", ko:"의자를", t:"obj"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:9, full:"그 여자들은 시장에서 그 비평가에게 달걀을 주문해준다", chunks:[
        {en:"The women", ko:"그 여자들은", t:"subj"},
        {en:"order", ko:"주문해준다", t:"verb"},
        {en:"the critic", ko:"그 비평가에게", t:"obj"},
        {en:"an egg", ko:"달걀을", t:"obj"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:10, full:"그 손님은 그 여동생에게 공을 던져준다", chunks:[
        {en:"The guest", ko:"그 손님은", t:"subj"},
        {en:"throws", ko:"던져준다", t:"verb"},
        {en:"the sister", ko:"그 여동생에게", t:"obj"},
        {en:"a ball", ko:"공을", t:"obj"}]},
      {n:11, full:"그 소년들은 길 위에서 어머니에게 차를 사준다", chunks:[
        {en:"The boys", ko:"그 소년들은", t:"subj"},
        {en:"buy", ko:"사준다", t:"verb"},
        {en:"the mother", ko:"어머니에게", t:"obj"},
        {en:"a car", ko:"차를", t:"obj"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:12, full:"그 남자는 그 여자에게 의자를 만들어준다", chunks:[
        {en:"The man", ko:"그 남자는", t:"subj"},
        {en:"makes", ko:"만들어준다", t:"verb"},
        {en:"the woman", ko:"그 여자에게", t:"obj"},
        {en:"a chair", ko:"의자를", t:"obj"}]},
      {n:13, full:"그 의사는 그 환자에게 돈을 빌려준다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"lends", ko:"빌려준다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"money", ko:"돈을", t:"obj"}]},
      {n:14, full:"그 시민들은 그 도시에서 그 시인에게 서류를 보여준다", chunks:[
        {en:"The citizens", ko:"그 시민들은", t:"subj"},
        {en:"show", ko:"보여준다", t:"verb"},
        {en:"the poet", ko:"그 시인에게", t:"obj"},
        {en:"a paper", ko:"서류를", t:"obj"},
        {en:"in the city", ko:"그 도시에서", t:"mod"}]},
      {n:15, full:"그 남자는 그 여자에게 이름을 골라준다", chunks:[
        {en:"The man", ko:"그 남자는", t:"subj"},
        {en:"chooses", ko:"골라준다", t:"verb"},
        {en:"the woman", ko:"그 여자에게", t:"obj"},
        {en:"a name", ko:"이름을", t:"obj"}]},
      {n:16, full:"그 의사들은 방에서 그 환자에게 꽃을 보내준다", chunks:[
        {en:"The doctors", ko:"그 의사들은", t:"subj"},
        {en:"send", ko:"보내준다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"a flower", ko:"꽃을", t:"obj"},
        {en:"in the room", ko:"방에서", t:"mod"}]},
      {n:17, full:"그 시민은 그 시인에게 컵을 건네준다", chunks:[
        {en:"The citizen", ko:"그 시민은", t:"subj"},
        {en:"hands", ko:"건네준다", t:"verb"},
        {en:"the poet", ko:"그 시인에게", t:"obj"},
        {en:"a cup", ko:"컵을", t:"obj"}]},
      {n:18, full:"그 시인들은 거리에서 그 건축가에게 음료를 사준다", chunks:[
        {en:"The poets", ko:"그 시인들은", t:"subj"},
        {en:"buy", ko:"사준다", t:"verb"},
        {en:"the architect", ko:"그 건축가에게", t:"obj"},
        {en:"a drink", ko:"음료를", t:"obj"},
        {en:"in the street", ko:"거리에서", t:"mod"}]},
      {n:19, full:"그 비평가는 그 전문가에게 서류를 건네준다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"hands", ko:"건네준다", t:"verb"},
        {en:"the expert", ko:"그 전문가에게", t:"obj"},
        {en:"a paper", ko:"서류를", t:"obj"}]},
      {n:20, full:"그 고객들은 밤에 그 여동생에게 공을 준다", chunks:[
        {en:"The customers", ko:"그 고객들은", t:"subj"},
        {en:"give", ko:"준다", t:"verb"},
        {en:"the sister", ko:"그 여동생에게", t:"obj"},
        {en:"a ball", ko:"공을", t:"obj"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:21, full:"그 소녀는 그 소년에게 게임을 사준다", chunks:[
        {en:"The girl", ko:"그 소녀는", t:"subj"},
        {en:"buys", ko:"사준다", t:"verb"},
        {en:"the boy", ko:"그 소년에게", t:"obj"},
        {en:"a game", ko:"게임을", t:"obj"}]},
      {n:22, full:"그 손님은 그 고객에게 자전거를 사준다", chunks:[
        {en:"The guest", ko:"그 손님은", t:"subj"},
        {en:"buys", ko:"사준다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"a bike", ko:"자전거를", t:"obj"}]},
      {n:23, full:"그 손님들은 병원에서 그 고객에게 돈을 준다", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"give", ko:"준다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"money", ko:"돈을", t:"obj"},
        {en:"at the hospital", ko:"병원에서", t:"mod"}]},
      {n:24, full:"그 환자들은 아침에 그 형에게 가방을 보내준다", chunks:[
        {en:"The patients", ko:"그 환자들은", t:"subj"},
        {en:"send", ko:"보내준다", t:"verb"},
        {en:"the brother", ko:"그 형에게", t:"obj"},
        {en:"a bag", ko:"가방을", t:"obj"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:25, full:"그 남자들은 밤에 그 여자에게 게임을 구해준다", chunks:[
        {en:"The men", ko:"그 남자들은", t:"subj"},
        {en:"get", ko:"구해준다", t:"verb"},
        {en:"the woman", ko:"그 여자에게", t:"obj"},
        {en:"a game", ko:"게임을", t:"obj"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:26, full:"그 아이는 그 소녀에게 개를 찾아준다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"finds", ko:"찾아준다", t:"verb"},
        {en:"the girl", ko:"그 소녀에게", t:"obj"},
        {en:"a dog", ko:"개를", t:"obj"}]},
      {n:27, full:"그 환자들은 길 위에서 그 손님에게 계획을 세워준다", chunks:[
        {en:"The patients", ko:"그 환자들은", t:"subj"},
        {en:"make", ko:"세워준다", t:"verb"},
        {en:"the guest", ko:"그 손님에게", t:"obj"},
        {en:"a plan", ko:"계획을", t:"obj"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:28, full:"그 아이들은 학교에서 그 소녀에게 시계를 준다", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"give", ko:"준다", t:"verb"},
        {en:"the girl", ko:"그 소녀에게", t:"obj"},
        {en:"a watch", ko:"시계를", t:"obj"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:29, full:"그 건축가들은 시장에서 그 의사에게 컵을 사준다", chunks:[
        {en:"The architects", ko:"그 건축가들은", t:"subj"},
        {en:"buy", ko:"사준다", t:"verb"},
        {en:"the doctor", ko:"그 의사에게", t:"obj"},
        {en:"a cup", ko:"컵을", t:"obj"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:30, full:"그 고객들은 거리에서 그 친구에게 책상을 보여준다", chunks:[
        {en:"The customers", ko:"그 고객들은", t:"subj"},
        {en:"show", ko:"보여준다", t:"verb"},
        {en:"the friend", ko:"그 친구에게", t:"obj"},
        {en:"a desk", ko:"책상을", t:"obj"},
        {en:"in the street", ko:"거리에서", t:"mod"}]},
      {n:31, full:"그 친구들은 아침에 그 아이에게 자전거를 준다", chunks:[
        {en:"The friends", ko:"그 친구들은", t:"subj"},
        {en:"give", ko:"준다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"a bike", ko:"자전거를", t:"obj"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:32, full:"그 전문가는 그 시민에게 음료를 구해준다", chunks:[
        {en:"The expert", ko:"그 전문가는", t:"subj"},
        {en:"gets", ko:"구해준다", t:"verb"},
        {en:"the citizen", ko:"그 시민에게", t:"obj"},
        {en:"a drink", ko:"음료를", t:"obj"}]},
      {n:33, full:"그 소녀는 어머니에게 차를 판다", chunks:[
        {en:"The girl", ko:"그 소녀는", t:"subj"},
        {en:"sells", ko:"판다", t:"verb"},
        {en:"the mother", ko:"어머니에게", t:"obj"},
        {en:"a car", ko:"차를", t:"obj"}]},
      {n:34, full:"그 환자는 그 손님에게 책상을 만들어준다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"makes", ko:"만들어준다", t:"verb"},
        {en:"the guest", ko:"그 손님에게", t:"obj"},
        {en:"a desk", ko:"책상을", t:"obj"}]},
      {n:35, full:"그 건축가는 그 의사에게 계획을 보여준다", chunks:[
        {en:"The architect", ko:"그 건축가는", t:"subj"},
        {en:"shows", ko:"보여준다", t:"verb"},
        {en:"the doctor", ko:"그 의사에게", t:"obj"},
        {en:"a plan", ko:"계획을", t:"obj"}]},
      {n:36, full:"그 소녀들은 일찍 그 소년에게 질문을 한다", chunks:[
        {en:"The girls", ko:"그 소녀들은", t:"subj"},
        {en:"ask", ko:"묻는다", t:"verb"},
        {en:"the boy", ko:"그 소년에게", t:"obj"},
        {en:"a question", ko:"질문을", t:"obj"},
        {en:"early", ko:"일찍", t:"mod"}]},
      {n:37, full:"그 소년들은 병원에서 그 남자에게 개를 준다", chunks:[
        {en:"The boys", ko:"그 소년들은", t:"subj"},
        {en:"give", ko:"준다", t:"verb"},
        {en:"the man", ko:"그 남자에게", t:"obj"},
        {en:"a dog", ko:"개를", t:"obj"},
        {en:"at the hospital", ko:"병원에서", t:"mod"}]},
      {n:38, full:"그 소년은 그 남자에게 달걀을 요리해준다", chunks:[
        {en:"The boy", ko:"그 소년은", t:"subj"},
        {en:"cooks", ko:"요리해준다", t:"verb"},
        {en:"the man", ko:"그 남자에게", t:"obj"},
        {en:"an egg", ko:"달걀을", t:"obj"}]},
      {n:39, full:"그 비평가들은 방에서 그 전문가에게 이름을 지어준다", chunks:[
        {en:"The critics", ko:"그 비평가들은", t:"subj"},
        {en:"give", ko:"지어준다", t:"verb"},
        {en:"the expert", ko:"그 전문가에게", t:"obj"},
        {en:"a name", ko:"이름을", t:"obj"},
        {en:"in the room", ko:"방에서", t:"mod"}]},
      {n:40, full:"그 친구는 그 아이에게 질문을 한다", chunks:[
        {en:"The friend", ko:"그 친구는", t:"subj"},
        {en:"asks", ko:"묻는다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"a question", ko:"질문을", t:"obj"}]}
    ]},
    { id:"3형식수동태", items:[
      {n:1, full:"그 문은 학교에서 그 시인에 의해 닫힌다", chunks:[
        {en:"The door", ko:"그 문은", t:"subj"},
        {en:"is closed", ko:"닫힌다", t:"verb"},
        {en:"by the poet", ko:"그 시인에 의해", t:"mod"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:2, full:"그 공들은 그 건축가에 의해 잡힌다", chunks:[
        {en:"The balls", ko:"그 공들은", t:"subj"},
        {en:"are caught", ko:"잡힌다", t:"verb"},
        {en:"by the architect", ko:"그 건축가에 의해", t:"mod"}]},
      {n:3, full:"그 자전거는 그 도시에서 그 친구에 의해 고쳐진다", chunks:[
        {en:"The bike", ko:"그 자전거는", t:"subj"},
        {en:"is fixed", ko:"고쳐진다", t:"verb"},
        {en:"by the friend", ko:"그 친구에 의해", t:"mod"},
        {en:"in the city", ko:"그 도시에서", t:"mod"}]},
      {n:4, full:"그 코트들은 그 시민에 의해 입혀진다", chunks:[{en:"The coats",ko:"그 코트들은",t:"subj"},{en:"are worn",ko:"입혀진다",t:"verb"},{en:"by the citizen",ko:"그 시민에 의해",t:"mod"}]},
      {n:5, full:"그 공은 병원에서 그 의사에 의해 떨어뜨려진다", chunks:[
        {en:"The ball", ko:"그 공은", t:"subj"},
        {en:"is dropped", ko:"떨어뜨려진다", t:"verb"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"},
        {en:"at the hospital", ko:"병원에서", t:"mod"}]},
      {n:6, full:"그 계획은 일찍 그 손님에 의해 통제된다", chunks:[
        {en:"The plan", ko:"그 계획은", t:"subj"},
        {en:"is controlled", ko:"통제된다", t:"verb"},
        {en:"by the guest", ko:"그 손님에 의해", t:"mod"},
        {en:"early", ko:"일찍", t:"mod"}]},
      {n:7, full:"그 개는 시장에서 그 남자에 의해 씻겨진다", chunks:[
        {en:"The dog", ko:"그 개는", t:"subj"},
        {en:"is washed", ko:"씻겨진다", t:"verb"},
        {en:"by the man", ko:"그 남자에 의해", t:"mod"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:8, full:"그 책들은 그 건축가에 의해 닫힌다", chunks:[
        {en:"The books", ko:"그 책들은", t:"subj"},
        {en:"are closed", ko:"닫힌다", t:"verb"},
        {en:"by the architect", ko:"그 건축가에 의해", t:"mod"}]},
      {n:9, full:"그 꽃들은 그 여자에 의해 씻겨진다", chunks:[
        {en:"The flowers", ko:"그 꽃들은", t:"subj"},
        {en:"are washed", ko:"씻겨진다", t:"verb"},
        {en:"by the woman", ko:"그 여자에 의해", t:"mod"}]},
      {n:10, full:"그 돈은 거리에서 그 아이에 의해 보관된다", chunks:[
        {en:"The money", ko:"그 돈은", t:"subj"},
        {en:"is stored", ko:"보관된다", t:"verb"},
        {en:"by the child", ko:"그 아이에 의해", t:"mod"},
        {en:"in the street", ko:"거리에서", t:"mod"}]},
      {n:11, full:"그 코트들은 그 비평가에 의해 만져진다", chunks:[
        {en:"The coats", ko:"그 코트들은", t:"subj"},
        {en:"are touched", ko:"만져진다", t:"verb"},
        {en:"by the critic", ko:"그 비평가에 의해", t:"mod"}]},
      {n:12, full:"그 병은 그 시인에 의해 조심스럽게 잡힌다", chunks:[{en:"The bottle",ko:"그 병은",t:"subj"},{en:"is caught",ko:"잡힌다",t:"verb"},{en:"by the poet",ko:"그 시인에 의해",t:"mod"},{en:"with care",ko:"조심스럽게",t:"mod"}]},
      {n:13, full:"그 가방은 길 위에서 그 전문가에 의해 덮인다", chunks:[
        {en:"The bag", ko:"그 가방은", t:"subj"},
        {en:"is covered", ko:"덮인다", t:"verb"},
        {en:"by the expert", ko:"그 전문가에 의해", t:"mod"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:14, full:"그 병들은 그 고객에 의해 닦인다", chunks:[
        {en:"The bottles", ko:"그 병들은", t:"subj"},
        {en:"are cleaned", ko:"닦인다", t:"verb"},
        {en:"by the customer", ko:"그 고객에 의해", t:"mod"}]},
      {n:15, full:"그 담요는 방에서 그 친구에 의해 만져진다", chunks:[
        {en:"The blanket", ko:"그 담요는", t:"subj"},
        {en:"is touched", ko:"만져진다", t:"verb"},
        {en:"by the friend", ko:"그 친구에 의해", t:"mod"},
        {en:"in the room", ko:"방에서", t:"mod"}]},
      {n:16, full:"그 잎들은 그 환자에 의해 떨어뜨려진다", chunks:[
        {en:"The leaves", ko:"그 잎들은", t:"subj"},
        {en:"are dropped", ko:"떨어뜨려진다", t:"verb"},
        {en:"by the patient", ko:"그 환자에 의해", t:"mod"}]},
      {n:17, full:"그 음료들은 그 운동선수에 의해 보관된다", chunks:[
        {en:"The drinks", ko:"그 음료들은", t:"subj"},
        {en:"are stored", ko:"보관된다", t:"verb"},
        {en:"by the athlete", ko:"그 운동선수에 의해", t:"mod"}]},
      {n:18, full:"그 차들은 그 비평가에 의해 고쳐진다", chunks:[
        {en:"The cars", ko:"그 차들은", t:"subj"},
        {en:"are fixed", ko:"고쳐진다", t:"verb"},
        {en:"by the critic", ko:"그 비평가에 의해", t:"mod"}]},
      {n:19, full:"그 달걀들은 그 시민에 의해 덮인다", chunks:[
        {en:"The eggs", ko:"그 달걀들은", t:"subj"},
        {en:"are covered", ko:"덮인다", t:"verb"},
        {en:"by the citizen", ko:"그 시민에 의해", t:"mod"}]},
      {n:20, full:"그 컵은 밤에 그 손님에 의해 닦인다", chunks:[
        {en:"The cup", ko:"그 컵은", t:"subj"},
        {en:"is cleaned", ko:"닦인다", t:"verb"},
        {en:"by the guest", ko:"그 손님에 의해", t:"mod"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:21, full:"그 책상은 아침에 그 의사에 의해 옮겨진다", chunks:[
        {en:"The desk", ko:"그 책상은", t:"subj"},
        {en:"is moved", ko:"옮겨진다", t:"verb"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:22, full:"그 형제들은 그 고객에 의해 통제된다", chunks:[
        {en:"The brothers", ko:"그 형제들은", t:"subj"},
        {en:"are controlled", ko:"통제된다", t:"verb"},
        {en:"by the customer", ko:"그 고객에 의해", t:"mod"}]},
      {n:23, full:"그 시계는 집에서 그 전문가에 의해 착용된다", chunks:[
        {en:"The watch", ko:"그 시계는", t:"subj"},
        {en:"is worn", ko:"착용된다", t:"verb"},
        {en:"by the expert", ko:"그 전문가에 의해", t:"mod"},
        {en:"at home", ko:"집에서", t:"mod"}]},
      {n:24, full:"그 의자들은 그 환자에 의해 옮겨진다", chunks:[
        {en:"The chairs", ko:"그 의자들은", t:"subj"},
        {en:"are moved", ko:"옮겨진다", t:"verb"},
        {en:"by the patient", ko:"그 환자에 의해", t:"mod"}]}
    ]},
    
    { id:"4형식수동태", items:[
      {n:1, full:"호의가 그 아이에 의해 그 의사에게 베풀어진다", chunks:[
        {en:"A favor", ko:"호의가", t:"subj"},
        {en:"is done", ko:"베풀어진다", t:"verb"},
        {en:"for the doctor", ko:"그 의사에게", t:"mod"},
        {en:"by the child", ko:"그 아이에 의해", t:"mod"}]},
      {n:2, full:"이야기가 거리에서 어머니에 의해 그 아이에게 읽힌다", chunks:[
        {en:"A story", ko:"이야기가", t:"subj"},
        {en:"is read", ko:"읽힌다", t:"verb"},
        {en:"to the child", ko:"그 아이에게", t:"mod"},
        {en:"by the mother", ko:"어머니에 의해", t:"mod"},
        {en:"in the street", ko:"거리에서", t:"mod"}]},
      {n:3, full:"그 소녀들은 그 친구에게 이야기를 전해 듣는다", chunks:[
        {en:"The girls", ko:"그 소녀들은", t:"subj"},
        {en:"are told", ko:"전해 듣는다", t:"verb"},
        {en:"a story", ko:"이야기를", t:"obj"},
        {en:"by the friend", ko:"그 친구에 의해", t:"mod"}]},
      {n:4, full:"우유가 그 강당에서 그 남자에 의해 그 여자에게 주문된다", chunks:[
        {en:"Milk", ko:"우유가", t:"subj"},
        {en:"is ordered", ko:"주문된다", t:"verb"},
        {en:"for the woman", ko:"그 여자에게", t:"mod"},
        {en:"by the man", ko:"그 남자에 의해", t:"mod"},
        {en:"in the hall", ko:"그 강당에서", t:"mod"}]},
      {n:5, full:"코트가 집에서 그 고객에 의해 그 여동생에게 구매된다", chunks:[
        {en:"A coat", ko:"코트가", t:"subj"},
        {en:"is bought", ko:"구매된다", t:"verb"},
        {en:"for the sister", ko:"그 여동생에게", t:"mod"},
        {en:"by the customer", ko:"그 고객에 의해", t:"mod"},
        {en:"at home", ko:"집에서", t:"mod"}]},
      {n:6, full:"편지가 시장에서 그 시인에 의해 그 친구에게 쓰인다", chunks:[
        {en:"A letter", ko:"편지가", t:"subj"},
        {en:"is written", ko:"쓰인다", t:"verb"},
        {en:"to the friend", ko:"그 친구에게", t:"mod"},
        {en:"by the poet", ko:"그 시인에 의해", t:"mod"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:7, full:"그 여동생은 아침에 그 손님에게 꽃을 받는다", chunks:[
        {en:"The sister", ko:"그 여동생은", t:"subj"},
        {en:"is given", ko:"받는다", t:"verb"},
        {en:"a flower", ko:"꽃을", t:"obj"},
        {en:"by the guest", ko:"그 손님에 의해", t:"mod"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:8, full:"그 고객들은 그 전문가에 의해 책을 사게 된다", chunks:[
        {en:"The customers", ko:"그 고객들은", t:"subj"},
        {en:"are sold", ko:"사게 된다", t:"verb"},
        {en:"a book", ko:"책을", t:"obj"},
        {en:"by the expert", ko:"그 전문가에 의해", t:"mod"}]},
      {n:9, full:"질문이 그 강당에서 그 환자에 의해 그 의사에게 제기된다", chunks:[
        {en:"A question", ko:"질문이", t:"subj"},
        {en:"is asked", ko:"제기된다", t:"verb"},
        {en:"of the doctor", ko:"그 의사에게", t:"mod"},
        {en:"by the patient", ko:"그 환자에 의해", t:"mod"},
        {en:"in the hall", ko:"그 강당에서", t:"mod"}]},
      {n:10, full:"그 소년은 시장에서 그 남자에게 공을 던져 받는다", chunks:[
        {en:"The boy", ko:"그 소년은", t:"subj"},
        {en:"is thrown", ko:"던져 받는다", t:"verb"},
        {en:"a ball", ko:"공을", t:"obj"},
        {en:"by the man", ko:"그 남자에 의해", t:"mod"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:11, full:"그 남자는 밤에 그 친구에게 차를 빌려 받는다", chunks:[
        {en:"The man", ko:"그 남자는", t:"subj"},
        {en:"is lent", ko:"빌려 받는다", t:"verb"},
        {en:"a car", ko:"차를", t:"obj"},
        {en:"by the friend", ko:"그 친구에 의해", t:"mod"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:12, full:"증거가 그 의사에 의해 그 목격자에게 요청된다", chunks:[
        {en:"Evidence", ko:"증거가", t:"subj"},
        {en:"is requested", ko:"요청된다", t:"verb"},
        {en:"of the witness", ko:"그 목격자에게", t:"mod"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"}]},
      {n:13, full:"공이 그 남자에 의해 그 여자에게 건네진다", chunks:[
        {en:"A ball", ko:"공이", t:"subj"},
        {en:"is passed", ko:"건네진다", t:"verb"},
        {en:"to the woman", ko:"그 여자에게", t:"mod"},
        {en:"by the man", ko:"그 남자에 의해", t:"mod"}]},
      {n:14, full:"그 손님들은 그 여자에게 컵을 건네받는다", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"are handed", ko:"건네받는다", t:"verb"},
        {en:"a cup", ko:"컵을", t:"obj"},
        {en:"by the woman", ko:"그 여자에 의해", t:"mod"}]},
      {n:15, full:"증거가 길 위에서 그 의사에 의해 그 목격자에게 요청된다", chunks:[
        {en:"Evidence", ko:"증거가", t:"subj"},
        {en:"is requested", ko:"요청된다", t:"verb"},
        {en:"of the witness", ko:"그 목격자에게", t:"mod"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:16, full:"그 형제들은 그 시인에게 시계를 건네받는다", chunks:[
        {en:"The brothers", ko:"그 형제들은", t:"subj"},
        {en:"are handed", ko:"건네받는다", t:"verb"},
        {en:"a watch", ko:"시계를", t:"obj"},
        {en:"by the poet", ko:"그 시인에 의해", t:"mod"}]},
      {n:17, full:"노래가 어머니에 의해 그 손님에게 불린다", chunks:[
        {en:"A song", ko:"노래가", t:"subj"},
        {en:"is sung", ko:"불린다", t:"verb"},
        {en:"to the guest", ko:"그 손님에게", t:"mod"},
        {en:"by the mother", ko:"어머니에 의해", t:"mod"}]},
      {n:18, full:"편지가 일찍 그 여자에 의해 그 소녀에게 쓰인다", chunks:[
        {en:"A letter", ko:"편지가", t:"subj"},
        {en:"is written", ko:"쓰인다", t:"verb"},
        {en:"to the girl", ko:"그 소녀에게", t:"mod"},
        {en:"by the woman", ko:"그 여자에 의해", t:"mod"},
        {en:"early", ko:"일찍", t:"mod"}]},
      {n:19, full:"그 고객들은 그 회사에 의해 코트를 사게 된다", chunks:[
        {en:"The customers", ko:"그 고객들은", t:"subj"},
        {en:"are sold", ko:"사게 된다", t:"verb"},
        {en:"a coat", ko:"코트를", t:"obj"},
        {en:"by the company", ko:"그 회사에 의해", t:"mod"}]},
      {n:20, full:"질문이 아침에 그 환자에 의해 그 의사에게 제기된다", chunks:[
        {en:"A question", ko:"질문이", t:"subj"},
        {en:"is asked", ko:"제기된다", t:"verb"},
        {en:"of the doctor", ko:"그 의사에게", t:"mod"},
        {en:"by the patient", ko:"그 환자에 의해", t:"mod"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:21, full:"답이 수업 후에 그 고객에 의해 그 회사에 요구된다", chunks:[
        {en:"An answer", ko:"답이", t:"subj"},
        {en:"is demanded", ko:"요구된다", t:"verb"},
        {en:"of the company", ko:"그 회사에", t:"mod"},
        {en:"by the customer", ko:"그 고객에 의해", t:"mod"},
        {en:"after class", ko:"수업 후에", t:"mod"}]},
      {n:22, full:"지도가 시간이 지나면서 그 친구에 의해 그 남자에게 구해진다", chunks:[
        {en:"A map", ko:"지도가", t:"subj"},
        {en:"is gotten", ko:"구해진다", t:"verb"},
        {en:"for the man", ko:"그 남자에게", t:"mod"},
        {en:"by the friend", ko:"그 친구에 의해", t:"mod"},
        {en:"over time", ko:"시간이 지나면서", t:"mod"}]},
      {n:23, full:"그 아이들은 그 친구에게 답을 전해 듣는다", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"are told", ko:"전해 듣는다", t:"verb"},
        {en:"an answer", ko:"답을", t:"obj"},
        {en:"by the friend", ko:"그 친구에 의해", t:"mod"}]},
      {n:24, full:"달걀이 조심스럽게 그 여자에 의해 그 아이에게 요리된다", chunks:[
        {en:"An egg", ko:"달걀이", t:"subj"},
        {en:"is cooked", ko:"요리된다", t:"verb"},
        {en:"for the child", ko:"그 아이에게", t:"mod"},
        {en:"by the woman", ko:"그 여자에 의해", t:"mod"},
        {en:"with care", ko:"조심스럽게", t:"mod"}]},
      {n:25, full:"이름이 정오에 그 여자에 의해 그 소녀에게 선택된다", chunks:[
        {en:"A name", ko:"이름이", t:"subj"},
        {en:"is chosen", ko:"선택된다", t:"verb"},
        {en:"for the girl", ko:"그 소녀에게", t:"mod"},
        {en:"by the woman", ko:"그 여자에 의해", t:"mod"},
        {en:"at noon", ko:"정오에", t:"mod"}]},
      {n:26, full:"그 팀들은 그 회사에게 책을 약속받는다", chunks:[
        {en:"The teams", ko:"그 팀들은", t:"subj"},
        {en:"are promised", ko:"약속받는다", t:"verb"},
        {en:"a book", ko:"책을", t:"obj"},
        {en:"by the company", ko:"그 회사에 의해", t:"mod"}]},
      {n:27, full:"그 소년들은 그 시민에게 지도를 보게 된다", chunks:[
        {en:"The boys", ko:"그 소년들은", t:"subj"},
        {en:"are shown", ko:"보게 된다", t:"verb"},
        {en:"a map", ko:"지도를", t:"obj"},
        {en:"by the citizen", ko:"그 시민에 의해", t:"mod"}]},
      {n:28, full:"답이 그 의사에 의해 그 환자에게 찾아진다", chunks:[
        {en:"An answer", ko:"답이", t:"subj"},
        {en:"is found", ko:"찾아진다", t:"verb"},
        {en:"for the patient", ko:"그 환자에게", t:"mod"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"}]},
      {n:29, full:"그 환자들은 그 의사에게 1분을 할애받는다", chunks:[
        {en:"The patients", ko:"그 환자들은", t:"subj"},
        {en:"are spared", ko:"할애받는다", t:"verb"},
        {en:"a minute", ko:"1분을", t:"obj"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"}]},
      {n:30, full:"코트가 집에서 그 고객에 의해 그 친구에게 구매된다", chunks:[
        {en:"A coat", ko:"코트가", t:"subj"},
        {en:"is bought", ko:"구매된다", t:"verb"},
        {en:"for the friend", ko:"그 친구에게", t:"mod"},
        {en:"by the customer", ko:"그 고객에 의해", t:"mod"},
        {en:"at home", ko:"집에서", t:"mod"}]},
      {n:31, full:"그 의사들은 그 건축가에게 그림을 보게 된다", chunks:[
        {en:"The doctors", ko:"그 의사들은", t:"subj"},
        {en:"are shown", ko:"보게 된다", t:"verb"},
        {en:"a picture", ko:"그림을", t:"obj"},
        {en:"by the architect", ko:"그 건축가에 의해", t:"mod"}]},
      {n:32, full:"달걀이 방에서 그 남자에 의해 그 여자에게 요리된다", chunks:[
        {en:"An egg", ko:"달걀이", t:"subj"},
        {en:"is cooked", ko:"요리된다", t:"verb"},
        {en:"for the woman", ko:"그 여자에게", t:"mod"},
        {en:"by the man", ko:"그 남자에 의해", t:"mod"},
        {en:"in the room", ko:"방에서", t:"mod"}]},
      {n:33, full:"식사가 그 의사에 의해 그 환자에게 준비된다", chunks:[
        {en:"A meal", ko:"식사가", t:"subj"},
        {en:"is prepared", ko:"준비된다", t:"verb"},
        {en:"for the patient", ko:"그 환자에게", t:"mod"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"}]},
      {n:34, full:"그 환자는 밤에 그 의사에게 1분을 할애받는다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"is spared", ko:"할애받는다", t:"verb"},
        {en:"a minute", ko:"1분을", t:"obj"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:35, full:"호의가 그 아이에 의해 그 의사에게 베풀어진다", chunks:[
        {en:"A favor", ko:"호의가", t:"subj"},
        {en:"is done", ko:"베풀어진다", t:"verb"},
        {en:"for the doctor", ko:"그 의사에게", t:"mod"},
        {en:"by the child", ko:"그 아이에 의해", t:"mod"}]},
      {n:36, full:"수프가 정오에 그 남자에 의해 그 여자에게 주문된다", chunks:[
        {en:"Soup", ko:"수프가", t:"subj"},
        {en:"is ordered", ko:"주문된다", t:"verb"},
        {en:"for the woman", ko:"그 여자에게", t:"mod"},
        {en:"by the man", ko:"그 남자에 의해", t:"mod"},
        {en:"at noon", ko:"정오에", t:"mod"}]},
      {n:37, full:"식사가 그 의사에 의해 그 환자에게 준비된다", chunks:[
        {en:"A meal", ko:"식사가", t:"subj"},
        {en:"is prepared", ko:"준비된다", t:"verb"},
        {en:"for the patient", ko:"그 환자에게", t:"mod"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"}]},
      {n:38, full:"그 손님들은 그 친구에게 자리를 맡아 받는다", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"are saved", ko:"맡아 받는다", t:"verb"},
        {en:"a seat", ko:"자리를", t:"obj"},
        {en:"by the friend", ko:"그 친구에 의해", t:"mod"}]},
      {n:39, full:"그 아버지는 밤에 그 비평가에게 자전거를 빌려 받는다", chunks:[
        {en:"The father", ko:"그 아버지는", t:"subj"},
        {en:"is lent", ko:"빌려 받는다", t:"verb"},
        {en:"a bike", ko:"자전거를", t:"obj"},
        {en:"by the critic", ko:"그 비평가에 의해", t:"mod"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:40, full:"노래가 그 시인에 의해 그 손님에게 불린다", chunks:[
        {en:"A song", ko:"노래가", t:"subj"},
        {en:"is sung", ko:"불린다", t:"verb"},
        {en:"to the guest", ko:"그 손님에게", t:"mod"},
        {en:"by the poet", ko:"그 시인에 의해", t:"mod"}]},
      {n:41, full:"어머니는 길 위에서 그 건축가에게 계획을 전달받는다", chunks:[
        {en:"The mother", ko:"어머니는", t:"subj"},
        {en:"is sent", ko:"전달받는다", t:"verb"},
        {en:"a plan", ko:"계획을", t:"obj"},
        {en:"by the architect", ko:"그 건축가에 의해", t:"mod"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:42, full:"답이 그 의사에 의해 그 환자에게 찾아진다", chunks:[
        {en:"An answer", ko:"답이", t:"subj"},
        {en:"is found", ko:"찾아진다", t:"verb"},
        {en:"for the patient", ko:"그 환자에게", t:"mod"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"}]},
      {n:43, full:"그 아이는 길 위에서 그 전문가에게 역사를 배운다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"is taught", ko:"배운다", t:"verb"},
        {en:"history", ko:"역사를", t:"obj"},
        {en:"by the expert", ko:"그 전문가에 의해", t:"mod"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:44, full:"그 소녀는 학교에서 그 시인에게 이야기를 배운다", chunks:[
        {en:"The girl", ko:"그 소녀는", t:"subj"},
        {en:"is taught", ko:"배운다", t:"verb"},
        {en:"a story", ko:"이야기를", t:"obj"},
        {en:"by the poet", ko:"그 시인에 의해", t:"mod"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:45, full:"그 팀들은 그 회사에게 책을 약속받는다", chunks:[
        {en:"The teams", ko:"그 팀들은", t:"subj"},
        {en:"are promised", ko:"약속받는다", t:"verb"},
        {en:"a book", ko:"책을", t:"obj"},
        {en:"by the company", ko:"그 회사에 의해", t:"mod"}]},
      {n:46, full:"택시가 그 의사에 의해 그 손님에게 불린다", chunks:[
        {en:"A taxi", ko:"택시가", t:"subj"},
        {en:"is called", ko:"불린다", t:"verb"},
        {en:"for the guest", ko:"그 손님에게", t:"mod"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"}]},
      {n:47, full:"그 아이는 아침에 그 의사에게 책을 받는다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"is given", ko:"받는다", t:"verb"},
        {en:"a book", ko:"책을", t:"obj"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:48, full:"그 고객은 그 도시에서 그 회사에게 편지를 전달받는다", chunks:[
        {en:"The customer", ko:"그 고객은", t:"subj"},
        {en:"is sent", ko:"전달받는다", t:"verb"},
        {en:"a letter", ko:"편지를", t:"obj"},
        {en:"by the company", ko:"그 회사에 의해", t:"mod"},
        {en:"in the city", ko:"그 도시에서", t:"mod"}]},
      {n:49, full:"진실이 그 고객에 의해 그 회사에 요구된다", chunks:[{en:"The truth",ko:"진실이",t:"subj"},{en:"is demanded",ko:"요구된다",t:"verb"},{en:"of the company",ko:"그 회사에",t:"mod"},{en:"by the customer",ko:"그 고객에 의해",t:"mod"}]},
      {n:50, full:"노력이 아침에 그 회사에 의해 그 팀에 요구된다", chunks:[
        {en:"Effort", ko:"노력이", t:"subj"},
        {en:"is required", ko:"요구된다", t:"verb"},
        {en:"of the team", ko:"그 팀에", t:"mod"},
        {en:"by the company", ko:"그 회사에 의해", t:"mod"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:51, full:"택시가 그 의사에 의해 그 손님에게 불린다", chunks:[
        {en:"A taxi", ko:"택시가", t:"subj"},
        {en:"is called", ko:"불린다", t:"verb"},
        {en:"for the guest", ko:"그 손님에게", t:"mod"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"}]},
      {n:52, full:"공이 그 운동선수에 의해 그 남자에게 건네진다", chunks:[
        {en:"A ball", ko:"공이", t:"subj"},
        {en:"is passed", ko:"건네진다", t:"verb"},
        {en:"to the man", ko:"그 남자에게", t:"mod"},
        {en:"by the athlete", ko:"그 운동선수에 의해", t:"mod"}]},
      {n:53, full:"답변이 그 회사에 의해 그 팀에게 요구된다", chunks:[{en:"An answer",ko:"답변이",t:"subj"},{en:"is required",ko:"요구된다",t:"verb"},{en:"of the team",ko:"그 팀에게",t:"mod"},{en:"by the company",ko:"그 회사에 의해",t:"mod"}]},
      {n:54, full:"그 친구는 학교에서 그 소년에게 공을 던져 받는다", chunks:[
        {en:"The friend", ko:"그 친구는", t:"subj"},
        {en:"is thrown", ko:"던져 받는다", t:"verb"},
        {en:"a ball", ko:"공을", t:"obj"},
        {en:"by the boy", ko:"그 소년에 의해", t:"mod"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:55, full:"그 손님은 시간이 지나면서 그 친구에게 자리를 맡아 받는다", chunks:[
        {en:"The guest", ko:"그 손님은", t:"subj"},
        {en:"is saved", ko:"맡아 받는다", t:"verb"},
        {en:"a seat", ko:"자리를", t:"obj"},
        {en:"by the friend", ko:"그 친구에 의해", t:"mod"},
        {en:"over time", ko:"시간이 지나면서", t:"mod"}]},
      {n:56, full:"지도가 일찍 그 친구에 의해 그 남자에게 구해진다", chunks:[
        {en:"A map", ko:"지도가", t:"subj"},
        {en:"is gotten", ko:"구해진다", t:"verb"},
        {en:"for the man", ko:"그 남자에게", t:"mod"},
        {en:"by the friend", ko:"그 친구에 의해", t:"mod"},
        {en:"early", ko:"일찍", t:"mod"}]},
      {n:57, full:"수프가 그 여자에 의해 그 아이에게 만들어진다", chunks:[
        {en:"Soup", ko:"수프가", t:"subj"},
        {en:"is made", ko:"만들어진다", t:"verb"},
        {en:"for the child", ko:"그 아이에게", t:"mod"},
        {en:"by the woman", ko:"그 여자에 의해", t:"mod"}]},
      {n:58, full:"이름이 조심스럽게 그 여자에 의해 그 소녀에게 선택된다", chunks:[
        {en:"A name", ko:"이름이", t:"subj"},
        {en:"is chosen", ko:"선택된다", t:"verb"},
        {en:"for the girl", ko:"그 소녀에게", t:"mod"},
        {en:"by the woman", ko:"그 여자에 의해", t:"mod"},
        {en:"with care", ko:"조심스럽게", t:"mod"}]},
      {n:59, full:"수프가 그 여자에 의해 그 형에게 만들어진다", chunks:[
        {en:"Soup", ko:"수프가", t:"subj"},
        {en:"is made", ko:"만들어진다", t:"verb"},
        {en:"for the brother", ko:"그 형에게", t:"mod"},
        {en:"by the woman", ko:"그 여자에 의해", t:"mod"}]},
      {n:60, full:"책이 방에서 아버지에 의해 그 아이에게 읽힌다", chunks:[
        {en:"A book", ko:"책이", t:"subj"},
        {en:"is read", ko:"읽힌다", t:"verb"},
        {en:"to the child", ko:"그 아이에게", t:"mod"},
        {en:"by the father", ko:"아버지에 의해", t:"mod"},
        {en:"in the room", ko:"방에서", t:"mod"}]},
      /* ↓↓↓ DO수동태 추가분 (n:61~80). 괄호 안은 짝이 되는 IO수동태 번호 ↓↓↓ */
      {n:61, full:"이야기가 그 친구에 의해 그 소녀들에게 전해진다", chunks:[  /* ↔ #3 */
        {en:"A story", ko:"이야기가", t:"subj"},
        {en:"is told", ko:"전해진다", t:"verb"},
        {en:"to the girls", ko:"그 소녀들에게", t:"mod"},
        {en:"by the friend", ko:"그 친구에 의해", t:"mod"}]},
      {n:62, full:"꽃이 아침에 그 손님에 의해 그 여동생에게 주어진다", chunks:[  /* ↔ #7 */
        {en:"A flower", ko:"꽃이", t:"subj"},
        {en:"is given", ko:"주어진다", t:"verb"},
        {en:"to the sister", ko:"그 여동생에게", t:"mod"},
        {en:"by the guest", ko:"그 손님에 의해", t:"mod"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:63, full:"책이 그 전문가에 의해 그 고객들에게 판매된다", chunks:[  /* ↔ #8 */
        {en:"A book", ko:"책이", t:"subj"},
        {en:"is sold", ko:"판매된다", t:"verb"},
        {en:"to the customers", ko:"그 고객들에게", t:"mod"},
        {en:"by the expert", ko:"그 전문가에 의해", t:"mod"}]},
      {n:64, full:"공이 시장에서 그 남자에 의해 그 소년에게 던져진다", chunks:[  /* ↔ #10 */
        {en:"A ball", ko:"공이", t:"subj"},
        {en:"is thrown", ko:"던져진다", t:"verb"},
        {en:"to the boy", ko:"그 소년에게", t:"mod"},
        {en:"by the man", ko:"그 남자에 의해", t:"mod"},
        {en:"at the market", ko:"시장에서", t:"mod"}]},
      {n:65, full:"차가 밤에 그 친구에 의해 그 남자에게 빌려진다", chunks:[  /* ↔ #11 */
        {en:"A car", ko:"차가", t:"subj"},
        {en:"is lent", ko:"빌려진다", t:"verb"},
        {en:"to the man", ko:"그 남자에게", t:"mod"},
        {en:"by the friend", ko:"그 친구에 의해", t:"mod"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:66, full:"컵이 그 여자에 의해 그 손님들에게 건네진다", chunks:[  /* ↔ #14 */
        {en:"A cup", ko:"컵이", t:"subj"},
        {en:"is handed", ko:"건네진다", t:"verb"},
        {en:"to the guests", ko:"그 손님들에게", t:"mod"},
        {en:"by the woman", ko:"그 여자에 의해", t:"mod"}]},
      {n:67, full:"시계가 그 시인에 의해 그 형제들에게 건네진다", chunks:[  /* ↔ #16 */
        {en:"A watch", ko:"시계가", t:"subj"},
        {en:"is handed", ko:"건네진다", t:"verb"},
        {en:"to the brothers", ko:"그 형제들에게", t:"mod"},
        {en:"by the poet", ko:"그 시인에 의해", t:"mod"}]},
      {n:68, full:"코트가 그 회사에 의해 그 고객들에게 판매된다", chunks:[  /* ↔ #19 */
        {en:"A coat", ko:"코트가", t:"subj"},
        {en:"is sold", ko:"판매된다", t:"verb"},
        {en:"to the customers", ko:"그 고객들에게", t:"mod"},
        {en:"by the company", ko:"그 회사에 의해", t:"mod"}]},
      {n:69, full:"답이 그 친구에 의해 그 아이들에게 전해진다", chunks:[  /* ↔ #23 */
        {en:"An answer", ko:"답이", t:"subj"},
        {en:"is told", ko:"전해진다", t:"verb"},
        {en:"to the children", ko:"그 아이들에게", t:"mod"},
        {en:"by the friend", ko:"그 친구에 의해", t:"mod"}]},
      {n:70, full:"책이 그 회사에 의해 그 팀들에게 약속된다", chunks:[  /* ↔ #26 */
        {en:"A book", ko:"책이", t:"subj"},
        {en:"is promised", ko:"약속된다", t:"verb"},
        {en:"to the teams", ko:"그 팀들에게", t:"mod"},
        {en:"by the company", ko:"그 회사에 의해", t:"mod"}]},
      {n:71, full:"지도가 그 시민에 의해 그 소년들에게 보여진다", chunks:[  /* ↔ #27 */
        {en:"A map", ko:"지도가", t:"subj"},
        {en:"is shown", ko:"제시된다", t:"verb"},
        {en:"to the boys", ko:"그 소년들에게", t:"mod"},
        {en:"by the citizen", ko:"그 시민에 의해", t:"mod"}]},
      {n:72, full:"그림이 그 건축가에 의해 그 의사들에게 보여진다", chunks:[  /* ↔ #31 */
        {en:"A picture", ko:"그림이", t:"subj"},
        {en:"is shown", ko:"제시된다", t:"verb"},
        {en:"to the doctors", ko:"그 의사들에게", t:"mod"},
        {en:"by the architect", ko:"그 건축가에 의해", t:"mod"}]},
      {n:73, full:"자전거가 밤에 그 비평가에 의해 그 아버지에게 빌려진다", chunks:[  /* ↔ #39 */
        {en:"A bike", ko:"자전거가", t:"subj"},
        {en:"is lent", ko:"빌려진다", t:"verb"},
        {en:"to the father", ko:"그 아버지에게", t:"mod"},
        {en:"by the critic", ko:"그 비평가에 의해", t:"mod"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:74, full:"계획이 길 위에서 그 건축가에 의해 어머니에게 전달된다", chunks:[  /* ↔ #41 */
        {en:"A plan", ko:"계획이", t:"subj"},
        {en:"is sent", ko:"전달된다", t:"verb"},
        {en:"to the mother", ko:"어머니에게", t:"mod"},
        {en:"by the architect", ko:"그 건축가에 의해", t:"mod"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:75, full:"역사가 길 위에서 그 전문가에 의해 그 아이에게 가르쳐진다", chunks:[  /* ↔ #43 */
        {en:"History", ko:"역사가", t:"subj"},
        {en:"is taught", ko:"가르쳐진다", t:"verb"},
        {en:"to the child", ko:"그 아이에게", t:"mod"},
        {en:"by the expert", ko:"그 전문가에 의해", t:"mod"},
        {en:"on the road", ko:"길 위에서", t:"mod"}]},
      {n:76, full:"이야기가 학교에서 그 시인에 의해 그 소녀에게 가르쳐진다", chunks:[  /* ↔ #44 */
        {en:"A story", ko:"이야기가", t:"subj"},
        {en:"is taught", ko:"가르쳐진다", t:"verb"},
        {en:"to the girl", ko:"그 소녀에게", t:"mod"},
        {en:"by the poet", ko:"그 시인에 의해", t:"mod"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:77, full:"책이 그 회사에 의해 그 팀들에게 약속된다", chunks:[  /* ↔ #45 */
        {en:"A book", ko:"책이", t:"subj"},
        {en:"is promised", ko:"약속된다", t:"verb"},
        {en:"to the teams", ko:"그 팀들에게", t:"mod"},
        {en:"by the company", ko:"그 회사에 의해", t:"mod"}]},
      {n:78, full:"책이 아침에 그 의사에 의해 그 아이에게 주어진다", chunks:[  /* ↔ #47 */
        {en:"A book", ko:"책이", t:"subj"},
        {en:"is given", ko:"주어진다", t:"verb"},
        {en:"to the child", ko:"그 아이에게", t:"mod"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"},
        {en:"in the morning", ko:"아침에", t:"mod"}]},
      {n:79, full:"편지가 그 도시에서 그 회사에 의해 그 고객에게 전달된다", chunks:[  /* ↔ #48 */
        {en:"A letter", ko:"편지가", t:"subj"},
        {en:"is sent", ko:"전달된다", t:"verb"},
        {en:"to the customer", ko:"그 고객에게", t:"mod"},
        {en:"by the company", ko:"그 회사에 의해", t:"mod"},
        {en:"in the city", ko:"그 도시에서", t:"mod"}]},
      {n:80, full:"공이 학교에서 그 소년에 의해 그 친구에게 던져진다", chunks:[  /* ↔ #54 */
        {en:"A ball", ko:"공이", t:"subj"},
        {en:"is thrown", ko:"던져진다", t:"verb"},
        {en:"to the friend", ko:"그 친구에게", t:"mod"},
        {en:"by the boy", ko:"그 소년에 의해", t:"mod"},
        {en:"at school", ko:"학교에서", t:"mod"}]}
    ]},
    { id:"5형식(1)", items:[
      {n:1, full:"사람들은 그 피해자를 영웅으로 여긴다", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"find",ko:"여긴다",t:"verb"},{en:"the victim",ko:"그 피해자를",t:"obj"},{en:"a hero",ko:"영웅이라고",t:"comp"}]},
      {n:2, full:"우리는 그 엔진을 어둡게 칠한다", chunks:[{en:"We",ko:"우리는",t:"subj"},{en:"paint",ko:"칠한다",t:"verb"},{en:"the engine",ko:"그 엔진을",t:"obj"},{en:"dark",ko:"어둡게",t:"comp"}]},
      {n:3, full:"전문가들은 그 연구를 성공으로 여긴다", chunks:[{en:"Experts",ko:"전문가들은",t:"subj"},{en:"consider",ko:"여긴다",t:"verb"},{en:"the research",ko:"그 연구를",t:"obj"},{en:"a success",ko:"성공이라고",t:"comp"}]},
      {n:4, full:"그들은 그 문을 열어 둔다", chunks:[{en:"They",ko:"그들은",t:"subj"},{en:"leave",ko:"둔다",t:"verb"},{en:"the door",ko:"그 문을",t:"obj"},{en:"open",ko:"열린 채로",t:"comp"}]},
      {n:5, full:"사람들은 그 엔진을 따뜻하게 유지한다", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"keep",ko:"유지한다",t:"verb"},{en:"the engine",ko:"그 엔진을",t:"obj"},{en:"warm",ko:"따뜻하게",t:"comp"}]},
      {n:6, full:"비평가들은 그 피해자를 영웅이라고 부른다", chunks:[{en:"Critics",ko:"비평가들은",t:"subj"},{en:"name",ko:"명명한다",t:"verb"},{en:"the victim",ko:"그 피해자를",t:"obj"},{en:"a hero",ko:"영웅이라고",t:"comp"}]},
      {n:7, full:"전문가들은 그 의견을 사실이라고 믿는다", chunks:[{en:"Experts",ko:"전문가들은",t:"subj"},{en:"believe",ko:"믿는다",t:"verb"},{en:"the opinion",ko:"그 의견을",t:"obj"},{en:"true",ko:"사실이라고",t:"comp"}]},
      {n:8, full:"구성원들은 그 부엌을 따뜻한 채로 둔다", chunks:[{en:"Members",ko:"구성원들은",t:"subj"},{en:"leave",ko:"둔다",t:"verb"},{en:"the kitchen",ko:"그 부엌을",t:"obj"},{en:"warm",ko:"따뜻한 채로",t:"comp"}]},
      {n:9, full:"사람들은 그 영화를 성공작이라고 부른다", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"call",ko:"부른다",t:"verb"},{en:"the movie",ko:"그 영화를",t:"obj"},{en:"a success",ko:"성공이라고",t:"comp"}]},
      {n:10, full:"그 증거는 그 구성원이 정직함을 증명한다", chunks:[{en:"The evidence",ko:"그 증거는",t:"subj"},{en:"proves",ko:"증명한다",t:"verb"},{en:"the member",ko:"그 구성원이",t:"obj"},{en:"honest",ko:"정직하다고",t:"comp"}]},
      {n:11, full:"부모들은 그 구성원을 회장으로 선출한다", chunks:[{en:"Parents",ko:"부모들은",t:"subj"},{en:"elect",ko:"선출한다",t:"verb"},{en:"the member",ko:"그 구성원을",t:"obj"},{en:"president",ko:"회장으로",t:"comp"}]},
      {n:12, full:"우리는 그 부엌을 건조하게 유지한다", chunks:[{en:"We",ko:"우리는",t:"subj"},{en:"keep",ko:"유지한다",t:"verb"},{en:"the kitchen",ko:"그 부엌을",t:"obj"},{en:"dry",ko:"마른 채로",t:"comp"}]},
      {n:13, full:"성인들은 그 연구를 익숙하게 여긴다", chunks:[{en:"Adults",ko:"성인들은",t:"subj"},{en:"consider",ko:"여긴다",t:"verb"},{en:"the research",ko:"그 연구를",t:"obj"},{en:"familiar",ko:"익숙하다고",t:"comp"}]},
      {n:14, full:"사람들은 그 탁자를 빨갛게 칠한다", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"paint",ko:"칠한다",t:"verb"},{en:"the table",ko:"그 탁자를",t:"obj"},{en:"red",ko:"빨갛게",t:"comp"}]},
      {n:15, full:"비평가들은 그 지도자를 영웅이라고 믿는다", chunks:[{en:"Critics",ko:"비평가들은",t:"subj"},{en:"believe",ko:"믿는다",t:"verb"},{en:"the leader",ko:"그 지도자를",t:"obj"},{en:"a hero",ko:"영웅이라고",t:"comp"}]},
      {n:16, full:"우리는 그 물을 따뜻한 채로 둔다", chunks:[{en:"We",ko:"우리는",t:"subj"},{en:"leave",ko:"둔다",t:"verb"},{en:"the water",ko:"그 물을",t:"obj"},{en:"warm",ko:"따뜻한 채로",t:"comp"}]},
      {n:17, full:"시민들은 그 구성원을 지도자로 선출한다", chunks:[{en:"Citizens",ko:"시민들은",t:"subj"},{en:"elect",ko:"선출한다",t:"verb"},{en:"the member",ko:"그 구성원을",t:"obj"},{en:"leader",ko:"지도자로",t:"comp"}]},
      {n:18, full:"사람들은 그 영화를 익숙하게 여긴다", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"find",ko:"여긴다",t:"verb"},{en:"the movie",ko:"그 영화를",t:"obj"},{en:"familiar",ko:"익숙하다고",t:"comp"}]},
      {n:19, full:"의사들은 그 피해자가 지도자임을 증명한다", chunks:[{en:"Doctors",ko:"의사들은",t:"subj"},{en:"prove",ko:"증명한다",t:"verb"},{en:"the victim",ko:"그 피해자가",t:"obj"},{en:"a leader",ko:"지도자라고",t:"comp"}]},
      {n:20, full:"부모들은 그 영화를 이상하다고 여긴다", chunks:[{en:"Parents",ko:"부모들은",t:"subj"},{en:"consider",ko:"여긴다",t:"verb"},{en:"the movie",ko:"그 영화를",t:"obj"},{en:"strange",ko:"이상하다고",t:"comp"}]},
      {n:21, full:"우리는 이 수업을 Readmical이라고 부른다", chunks:[{en:"We",ko:"우리는",t:"subj"},{en:"call",ko:"부른다",t:"verb"},{en:"this class",ko:"이 수업을",t:"obj"},{en:"Readmical",ko:"Readmical이라고",t:"comp"}]},
      {n:22, full:"사람들은 그 구성원이 정직하다고 믿는다", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"believe",ko:"믿는다",t:"verb"},{en:"the member",ko:"그 구성원이",t:"obj"},{en:"honest",ko:"정직하다고",t:"comp"}]},
      {n:23, full:"그 팀은 그 선수를 주장으로 선출한다", chunks:[{en:"The team",ko:"그 팀은",t:"subj"},{en:"elects",ko:"선출한다",t:"verb"},{en:"the athlete",ko:"그 선수를",t:"obj"},{en:"captain",ko:"주장으로",t:"comp"}]},
      {n:24, full:"성인들은 그 의견이 분명하다고 여긴다", chunks:[{en:"Adults",ko:"성인들은",t:"subj"},{en:"find",ko:"여긴다",t:"verb"},{en:"the opinion",ko:"그 의견이",t:"obj"},{en:"clear",ko:"분명하다고",t:"comp"}]},
      {n:25, full:"그들은 그 탁자를 빨갛게 칠한다", chunks:[{en:"They",ko:"그들은",t:"subj"},{en:"paint",ko:"칠한다",t:"verb"},{en:"the table",ko:"그 탁자를",t:"obj"},{en:"red",ko:"빨갛게",t:"comp"}]},
      {n:26, full:"전문가들은 그 스타를 전설이라고 부른다", chunks:[{en:"Experts",ko:"전문가들은",t:"subj"},{en:"name",ko:"명명한다",t:"verb"},{en:"the star",ko:"그 스타를",t:"obj"},{en:"a legend",ko:"전설이라고",t:"comp"}]},
      {n:27, full:"우리는 그 물을 따뜻하게 유지한다", chunks:[{en:"We",ko:"우리는",t:"subj"},{en:"keep",ko:"유지한다",t:"verb"},{en:"the water",ko:"그 물을",t:"obj"},{en:"warm",ko:"따뜻하게",t:"comp"}]},
      {n:28, full:"전문가들은 그 의견이 사실임을 증명한다", chunks:[{en:"Experts",ko:"전문가들은",t:"subj"},{en:"prove",ko:"증명한다",t:"verb"},{en:"the opinion",ko:"그 의견이",t:"obj"},{en:"true",ko:"사실이라고",t:"comp"}]},
      {n:29, full:"사람들은 그 지도자를 영웅이라고 부른다", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"name",ko:"명명한다",t:"verb"},{en:"the leader",ko:"그 지도자를",t:"obj"},{en:"a hero",ko:"영웅이라고",t:"comp"}]},
      {n:30, full:"사람들은 그 스타를 전설이라고 부른다", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"call",ko:"부른다",t:"verb"},{en:"the star",ko:"그 스타를",t:"obj"},{en:"a legend",ko:"전설이라고",t:"comp"}]},
    ]},
    { id:"5형식(2)", items:[
      {n:1, full:"", chunks:[{en:"Customers",ko:"고객들은",t:"subj"},{en:"have",ko:"시킨다",t:"verb"},{en:"the lady",ko:"그 숙녀를",t:"obj"},{en:"sit",ko:"앉게",t:"comp"},{en:"for an hour",ko:"한 시간 동안",t:"mod"}]},
      {n:2, full:"", chunks:[{en:"A citizen",ko:"한 시민이",t:"subj"},{en:"lets",ko:"둔다",t:"verb"},{en:"the crowd",ko:"그 군중을",t:"obj"},{en:"leave",ko:"떠나게",t:"comp"}]},
      {n:3, full:"", chunks:[{en:"A parent",ko:"한 부모가",t:"subj"},{en:"helps",ko:"돕는다",t:"verb"},{en:"the calm baby",ko:"그 차분한 아기가",t:"obj"},{en:"stand",ko:"서도록",t:"comp"}]},
      {n:4, full:"", chunks:[{en:"Parents",ko:"부모들은",t:"subj"},{en:"make",ko:"만든다",t:"verb"},{en:"the danger",ko:"그 위험을",t:"obj"},{en:"clear",ko:"분명하게",t:"comp"}]},
      {n:5, full:"", chunks:[{en:"A captain",ko:"한 주장이",t:"subj"},{en:"has",ko:"시킨다",t:"verb"},{en:"the team",ko:"그 팀을",t:"obj"},{en:"start",ko:"시작하게",t:"comp"}]},
      {n:6, full:"", chunks:[{en:"Doctors",ko:"의사들은",t:"subj"},{en:"let",ko:"둔다",t:"verb"},{en:"the patient",ko:"그 환자를",t:"obj"},{en:"sleep",ko:"자게",t:"comp"}]},
      {n:7, full:"", chunks:[{en:"A parent",ko:"한 부모가",t:"subj"},{en:"makes",ko:"만든다",t:"verb"},{en:"the baby",ko:"그 아기를",t:"obj"},{en:"laugh",ko:"웃게",t:"comp"},{en:"in the park",ko:"공원에서",t:"mod"}]},
      {n:8, full:"", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"help",ko:"돕는다",t:"verb"},{en:"the group",ko:"그 집단이",t:"obj"},{en:"to succeed",ko:"성공하도록",t:"comp"}]},
      {n:9, full:"", chunks:[{en:"Families",ko:"가족들은",t:"subj"},{en:"have",ko:"시킨다",t:"verb"},{en:"the glass",ko:"그 유리잔을",t:"obj"},{en:"cleaned",ko:"닦이게",t:"comp"},{en:"in the kitchen",ko:"부엌에서",t:"mod"}]},
      {n:10, full:"", chunks:[{en:"A parent",ko:"한 부모가",t:"subj"},{en:"lets",ko:"둔다",t:"verb"},{en:"the calm baby",ko:"그 차분한 아기를",t:"obj"},{en:"sleep",ko:"자게",t:"comp"}]},
      {n:11, full:"", chunks:[{en:"An expert",ko:"한 전문가가",t:"subj"},{en:"gets",ko:"시킨다",t:"verb"},{en:"the floor",ko:"그 바닥을",t:"obj"},{en:"cleaned",ko:"닦이게",t:"comp"}]},
      {n:12, full:"", chunks:[{en:"A member",ko:"한 구성원이",t:"subj"},{en:"makes",ko:"만든다",t:"verb"},{en:"the project",ko:"그 프로젝트를",t:"obj"},{en:"a success",ko:"성공으로",t:"comp"}]},
      {n:13, full:"", chunks:[{en:"Families",ko:"가족들은",t:"subj"},{en:"have",ko:"시킨다",t:"verb"},{en:"the floor",ko:"그 바닥을",t:"obj"},{en:"washed",ko:"닦이게",t:"comp"},{en:"in the kitchen",ko:"부엌에서",t:"mod"}]},
      {n:14, full:"", chunks:[{en:"A critic",ko:"한 비평가가",t:"subj"},{en:"gets",ko:"만든다",t:"verb"},{en:"the music",ko:"그 음악을",t:"obj"},{en:"playing",ko:"흘러나오게",t:"comp"},{en:"in the car",ko:"차 안에서",t:"mod"}]},
      {n:15, full:"", chunks:[{en:"Experts",ko:"전문가들은",t:"subj"},{en:"make",ko:"만든다",t:"verb"},{en:"the group",ko:"그 집단을",t:"obj"},{en:"agree",ko:"동의하게",t:"comp"},{en:"with them",ko:"그들에게",t:"mod"}]},
      {n:16, full:"", chunks:[{en:"A leader",ko:"한 지도자가",t:"subj"},{en:"has",ko:"시킨다",t:"verb"},{en:"the group",ko:"그 집단을",t:"obj"},{en:"decide",ko:"결정하게",t:"comp"}]},
      {n:17, full:"", chunks:[{en:"A doctor",ko:"한 의사가",t:"subj"},{en:"gets",ko:"시킨다",t:"verb"},{en:"the group",ko:"그 집단이",t:"obj"},{en:"to decide",ko:"결정하도록",t:"comp"}]},
      {n:18, full:"", chunks:[{en:"Doctors",ko:"의사들은",t:"subj"},{en:"help",ko:"돕는다",t:"verb"},{en:"people",ko:"사람들이",t:"obj"},{en:"understand",ko:"이해하도록",t:"comp"}]},
      {n:19, full:"", chunks:[{en:"Adults",ko:"성인들은",t:"subj"},{en:"let",ko:"둔다",t:"verb"},{en:"the child",ko:"그 아이를",t:"obj"},{en:"play",ko:"놀게",t:"comp"},{en:"on the beach",ko:"해변에서",t:"mod"}]},
      {n:20, full:"", chunks:[{en:"Doctors",ko:"의사들은",t:"subj"},{en:"make",ko:"만든다",t:"verb"},{en:"the issue",ko:"그 문제를",t:"obj"},{en:"understood",ko:"이해되게",t:"comp"}]},
      {n:21, full:"", chunks:[{en:"A member",ko:"한 구성원이",t:"subj"},{en:"lets",ko:"둔다",t:"verb"},{en:"the guest",ko:"그 손님을",t:"obj"},{en:"sit",ko:"앉게",t:"comp"},{en:"for a minute",ko:"잠시 동안",t:"mod"}]},
      {n:22, full:"", chunks:[{en:"A critic",ko:"한 비평가가",t:"subj"},{en:"helps",ko:"돕는다",t:"verb"},{en:"the class",ko:"그 학급이",t:"obj"},{en:"learn",ko:"배우도록",t:"comp"}]},
      {n:23, full:"", chunks:[{en:"Parents",ko:"부모들은",t:"subj"},{en:"get",ko:"시킨다",t:"verb"},{en:"the baby",ko:"그 아기가",t:"obj"},{en:"to sleep",ko:"자도록",t:"comp"},{en:"for an hour",ko:"한 시간 동안",t:"mod"}]},
      {n:24, full:"", chunks:[{en:"An adult",ko:"한 성인이",t:"subj"},{en:"helps",ko:"돕는다",t:"verb"},{en:"the child",ko:"그 아이가",t:"obj"},{en:"to succeed",ko:"성공하도록",t:"comp"}]},
      {n:25, full:"", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"get",ko:"만든다",t:"verb"},{en:"the engine",ko:"그 엔진을",t:"obj"},{en:"running",ko:"작동하게",t:"comp"},{en:"on the highway",ko:"고속도로에서",t:"mod"}]},
      {n:26, full:"", chunks:[{en:"Members",ko:"구성원들은",t:"subj"},{en:"help",ko:"돕는다",t:"verb"},{en:"the proud team",ko:"그 자랑스러운 팀이",t:"obj"},{en:"to win",ko:"이기도록",t:"comp"}]},
      {n:27, full:"", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"get",ko:"시킨다",t:"verb"},{en:"the glass",ko:"그 유리잔을",t:"obj"},{en:"fixed",ko:"고쳐지게",t:"comp"}]},
      {n:28, full:"", chunks:[{en:"A critic",ko:"한 비평가가",t:"subj"},{en:"makes",ko:"만든다",t:"verb"},{en:"the science",ko:"그 과학을",t:"obj"},{en:"understood",ko:"이해되게",t:"comp"}]},
      {n:29, full:"", chunks:[{en:"A doctor",ko:"한 의사가",t:"subj"},{en:"has",ko:"시킨다",t:"verb"},{en:"the old lady",ko:"그 나이 든 숙녀를",t:"obj"},{en:"wait",ko:"기다리게",t:"comp"}]},
      {n:30, full:"", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"let",ko:"둔다",t:"verb"},{en:"the animal",ko:"그 동물을",t:"obj"},{en:"run",ko:"달리게",t:"comp"},{en:"in the desert",ko:"사막에서",t:"mod"}]},
      {n:31, full:"", chunks:[{en:"A critic",ko:"한 비평가가",t:"subj"},{en:"has",ko:"만든다",t:"verb"},{en:"the crowd",ko:"그 군중을",t:"obj"},{en:"laughing",ko:"웃고 있게",t:"comp"}]},
      {n:32, full:"", chunks:[{en:"I",ko:"나는",t:"subj"},{en:"had",ko:"당했다",t:"verb"},{en:"my leg",ko:"내 다리를",t:"obj"},{en:"broken",ko:"부러지게",t:"comp"}]},
      {n:33, full:"", chunks:[{en:"He",ko:"그는",t:"subj"},{en:"had",ko:"당했다",t:"verb"},{en:"his wallet",ko:"그의 지갑을",t:"obj"},{en:"stolen",ko:"도둑맞게",t:"comp"}]},
      {n:34, full:"", chunks:[{en:"A citizen",ko:"한 시민이",t:"subj"},{en:"feels",ko:"느낀다",t:"verb"},{en:"the water",ko:"그 물이",t:"obj"},{en:"running",ko:"흐르는 것을",t:"comp"},{en:"in the river",ko:"강에서",t:"mod"}]},
      {n:35, full:"", chunks:[{en:"A citizen",ko:"한 시민이",t:"subj"},{en:"notices",ko:"알아차린다",t:"verb"},{en:"the car",ko:"그 차가",t:"obj"},{en:"washed",ko:"씻긴 것을",t:"comp"}]},
      {n:36, full:"", chunks:[{en:"An expert",ko:"한 전문가가",t:"subj"},{en:"sees",ko:"본다",t:"verb"},{en:"the old audience",ko:"그 나이 든 관객이",t:"obj"},{en:"react",ko:"반응하는 것을",t:"comp"}]},
      {n:37, full:"", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"feel",ko:"느낀다",t:"verb"},{en:"the rain",ko:"그 비가",t:"obj"},{en:"fall",ko:"떨어지는 것을",t:"comp"},{en:"at the beach",ko:"해변에서",t:"mod"}]},
      {n:38, full:"", chunks:[{en:"Experts",ko:"전문가들은",t:"subj"},{en:"see",ko:"본다",t:"verb"},{en:"the red engine",ko:"그 빨간 엔진이",t:"obj"},{en:"stop",ko:"멈추는 것을",t:"comp"},{en:"on the highway",ko:"고속도로에서",t:"mod"}]},
      {n:39, full:"", chunks:[{en:"A critic",ko:"한 비평가가",t:"subj"},{en:"hears",ko:"듣는다",t:"verb"},{en:"the story",ko:"그 이야기가",t:"obj"},{en:"told",ko:"말해지는 것을",t:"comp"},{en:"in the class",ko:"수업에서",t:"mod"}]},
      {n:40, full:"", chunks:[{en:"A girl",ko:"한 소녀가",t:"subj"},{en:"feels",ko:"느낀다",t:"verb"},{en:"a bug",ko:"벌레 한 마리가",t:"obj"},{en:"moving",ko:"움직이는 것을",t:"comp"},{en:"on her hand",ko:"손 위에서",t:"mod"}]},
      {n:41, full:"", chunks:[{en:"A guest",ko:"한 손님이",t:"subj"},{en:"hears",ko:"듣는다",t:"verb"},{en:"the rain",ko:"그 비가",t:"obj"},{en:"falling",ko:"내리는 것을",t:"comp"}]},
      {n:42, full:"", chunks:[{en:"Experts",ko:"전문가들은",t:"subj"},{en:"watch",ko:"본다",t:"verb"},{en:"the crowd",ko:"그 군중이",t:"obj"},{en:"moving",ko:"움직이는 것을",t:"comp"},{en:"in the area",ko:"그 지역에서",t:"mod"}]},
      {n:43, full:"", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"feel",ko:"느낀다",t:"verb"},{en:"the rain",ko:"그 비가",t:"obj"},{en:"falling",ko:"내리는 것을",t:"comp"},{en:"on the highway",ko:"고속도로에서",t:"mod"}]},
      {n:44, full:"", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"hear",ko:"듣는다",t:"verb"},{en:"the music",ko:"그 음악이",t:"obj"},{en:"played",ko:"연주되는 것을",t:"comp"}]},
      {n:45, full:"", chunks:[{en:"An expert",ko:"한 전문가가",t:"subj"},{en:"observes",ko:"관찰한다",t:"verb"},{en:"the class",ko:"그 학급이",t:"obj"},{en:"react",ko:"반응하는 것을",t:"comp"}]},
      {n:46, full:"", chunks:[{en:"A parent",ko:"한 부모가",t:"subj"},{en:"hears",ko:"듣는다",t:"verb"},{en:"the crowd",ko:"그 군중이",t:"obj"},{en:"complain",ko:"불평하는 것을",t:"comp"},{en:"by the river",ko:"강가에서",t:"mod"}]},
      {n:47, full:"", chunks:[{en:"Experts",ko:"전문가들은",t:"subj"},{en:"observe",ko:"관찰한다",t:"verb"},{en:"the project",ko:"그 프로젝트가",t:"obj"},{en:"finished",ko:"끝난 것을",t:"comp"}]},
      {n:48, full:"", chunks:[{en:"Experts",ko:"전문가들은",t:"subj"},{en:"notice",ko:"알아차린다",t:"verb"},{en:"the project",ko:"그 프로젝트가",t:"obj"},{en:"finished",ko:"끝난 것을",t:"comp"}]},
      {n:49, full:"", chunks:[{en:"A doctor",ko:"한 의사가",t:"subj"},{en:"observes",ko:"관찰한다",t:"verb"},{en:"the science",ko:"그 과학이",t:"obj"},{en:"understood",ko:"이해되는 것을",t:"comp"},{en:"in the class",ko:"수업에서",t:"mod"}]},
      {n:50, full:"", chunks:[{en:"A critic",ko:"한 비평가가",t:"subj"},{en:"sees",ko:"본다",t:"verb"},{en:"the glass",ko:"그 유리잔이",t:"obj"},{en:"broken",ko:"깨진 것을",t:"comp"}]},
      {n:51, full:"", chunks:[{en:"A doctor",ko:"한 의사가",t:"subj"},{en:"notices",ko:"알아차린다",t:"verb"},{en:"the patient",ko:"그 환자가",t:"obj"},{en:"returning",ko:"돌아오는 것을",t:"comp"}]},
      {n:52, full:"", chunks:[{en:"A citizen",ko:"한 시민이",t:"subj"},{en:"observes",ko:"관찰한다",t:"verb"},{en:"the crowd",ko:"그 군중이",t:"obj"},{en:"reacting",ko:"반응하는 것을",t:"comp"},{en:"in the area",ko:"그 지역에서",t:"mod"}]},
      {n:53, full:"", chunks:[{en:"Doctors",ko:"의사들은",t:"subj"},{en:"see",ko:"본다",t:"verb"},{en:"the patient",ko:"그 환자가",t:"obj"},{en:"returning",ko:"돌아오는 것을",t:"comp"}]},
      {n:54, full:"", chunks:[{en:"Critics",ko:"비평가들은",t:"subj"},{en:"observe",ko:"관찰한다",t:"verb"},{en:"the crowd",ko:"그 군중이",t:"obj"},{en:"cough",ko:"기침하는 것을",t:"comp"}]},
      {n:55, full:"", chunks:[{en:"Parents",ko:"부모들은",t:"subj"},{en:"notice",ko:"알아차린다",t:"verb"},{en:"the crowd",ko:"그 군중이",t:"obj"},{en:"complaining",ko:"불평하는 것을",t:"comp"}]},
      {n:56, full:"", chunks:[{en:"Experts",ko:"전문가들은",t:"subj"},{en:"hear",ko:"듣는다",t:"verb"},{en:"the audience",ko:"그 관객이",t:"obj"},{en:"laughing",ko:"웃고 있는 것을",t:"comp"},{en:"in the forest",ko:"숲에서",t:"mod"}]},
      {n:57, full:"", chunks:[{en:"An expert",ko:"한 전문가가",t:"subj"},{en:"watches",ko:"지켜본다",t:"verb"},{en:"the project",ko:"그 프로젝트가",t:"obj"},{en:"finished",ko:"끝나는 것을",t:"comp"}]},
      {n:58, full:"", chunks:[{en:"An expert",ko:"한 전문가가",t:"subj"},{en:"notices",ko:"알아차린다",t:"verb"},{en:"the proud group",ko:"그 자랑스러운 집단이",t:"obj"},{en:"agree",ko:"동의하는 것을",t:"comp"}]},
      {n:59, full:"", chunks:[{en:"A child",ko:"한 아이가",t:"subj"},{en:"feels",ko:"느낀다",t:"verb"},{en:"the engine",ko:"그 엔진이",t:"obj"},{en:"start",ko:"시작되는 것을",t:"comp"}]},
      {n:60, full:"", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"notice",ko:"알아차린다",t:"verb"},{en:"the engine",ko:"그 엔진이",t:"obj"},{en:"stop",ko:"멈추는 것을",t:"comp"},{en:"on the highway",ko:"고속도로에서",t:"mod"}]},
      {n:61, full:"", chunks:[{en:"A critic",ko:"한 비평가가",t:"subj"},{en:"watches",ko:"지켜본다",t:"verb"},{en:"the team",ko:"그 팀이",t:"obj"},{en:"win",ko:"이기는 것을",t:"comp"}]},
      {n:62, full:"", chunks:[{en:"A doctor",ko:"한 의사가",t:"subj"},{en:"sees",ko:"본다",t:"verb"},{en:"the animal",ko:"그 동물이",t:"obj"},{en:"running",ko:"달리는 것을",t:"comp"},{en:"in the desert",ko:"사막에서",t:"mod"}]},
      {n:63, full:"", chunks:[{en:"Citizens",ko:"시민들은",t:"subj"},{en:"feel",ko:"느낀다",t:"verb"},{en:"the engine",ko:"그 엔진이",t:"obj"},{en:"running",ko:"작동하는 것을",t:"comp"}]},
      {n:64, full:"", chunks:[{en:"Parents",ko:"부모들은",t:"subj"},{en:"watch",ko:"본다",t:"verb"},{en:"the rain",ko:"그 비가",t:"obj"},{en:"falling",ko:"내리는 것을",t:"comp"}]},
      {n:65, full:"", chunks:[{en:"Experts",ko:"전문가들은",t:"subj"},{en:"observe",ko:"관찰한다",t:"verb"},{en:"the animal",ko:"그 동물이",t:"obj"},{en:"moving",ko:"움직이는 것을",t:"comp"},{en:"in the forest",ko:"숲에서",t:"mod"}]},
      {n:66, full:"", chunks:[{en:"Experts",ko:"전문가들은",t:"subj"},{en:"see",ko:"본다",t:"verb"},{en:"the issue",ko:"그 문제가",t:"obj"},{en:"understood",ko:"이해되는 것을",t:"comp"}]},
      {n:67, full:"", chunks:[{en:"A child",ko:"한 아이가",t:"subj"},{en:"watches",ko:"지켜본다",t:"verb"},{en:"the animal",ko:"그 동물이",t:"obj"},{en:"run",ko:"달리는 것을",t:"comp"},{en:"in the park",ko:"공원에서",t:"mod"}]},
      {n:68, full:"", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"hear",ko:"듣는다",t:"verb"},{en:"the baby",ko:"그 아기가",t:"obj"},{en:"cough",ko:"기침하는 것을",t:"comp"}]},
      {n:69, full:"시민들은 그 다리가 폐쇄되는 것을 지켜본다", chunks:[{en:"Citizens",ko:"시민들은",t:"subj"},{en:"watch",ko:"지켜본다",t:"verb"},{en:"the bridge",ko:"그 다리가",t:"obj"},{en:"closed",ko:"폐쇄되는 것을",t:"comp"}]},
      {n:70, full:"", chunks:[{en:"Parents",ko:"부모들은",t:"subj"},{en:"look at",ko:"본다",t:"verb"},{en:"the baby",ko:"그 아기가",t:"obj"},{en:"sleeping",ko:"자고 있는 것을",t:"comp"}]},
      {n:71, full:"", chunks:[{en:"Doctors",ko:"의사들은",t:"subj"},{en:"listen to",ko:"듣는다",t:"verb"},{en:"the audience",ko:"그 관객이",t:"obj"},{en:"laughing",ko:"웃고 있는 것을",t:"comp"}]},
      {n:72, full:"", chunks:[{en:"An expert",ko:"한 전문가가",t:"subj"},{en:"looks at",ko:"본다",t:"verb"},{en:"the team",ko:"그 팀이",t:"obj"},{en:"playing",ko:"경기하는 것을",t:"comp"}]},
      {n:73, full:"", chunks:[{en:"A child",ko:"한 아이가",t:"subj"},{en:"smells",ko:"냄새 맡는다",t:"verb"},{en:"the food",ko:"그 음식이",t:"obj"},{en:"burning",ko:"타는 것을",t:"comp"}]},
      {n:74, full:"", chunks:[{en:"A parent",ko:"한 부모가",t:"subj"},{en:"listens to",ko:"듣는다",t:"verb"},{en:"the child",ko:"그 아이가",t:"obj"},{en:"sing",ko:"노래하는 것을",t:"comp"}]},
      {n:75, full:"", chunks:[{en:"People",ko:"사람들은",t:"subj"},{en:"smell",ko:"냄새 맡는다",t:"verb"},{en:"the engine",ko:"그 엔진이",t:"obj"},{en:"burn",ko:"타는 것을",t:"comp"}]},
    ]},
    { id:"5형식(3)", items:[
      {n:1, full:"우리는 그 손님에게 잠시 멈추라고 조언한다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"advise", ko:"조언한다", t:"verb"},
        {en:"the guest", ko:"그 손님에게", t:"obj"},
        {en:"to pause", ko:"잠시 멈추라고", t:"comp"}]},
      {n:2, full:"전문가들은 그 유리잔이 고쳐지기를 요구한다", chunks:[
        {en:"Experts", ko:"전문가들은", t:"subj"},
        {en:"require", ko:"요구한다", t:"verb"},
        {en:"the glass", ko:"그 유리잔이", t:"obj"},
        {en:"fixed", ko:"고쳐지기를", t:"comp"}]},
      {n:3, full:"한 의사가 그 나이 든 환자에게 잠시 멈추라고 경고한다", chunks:[
        {en:"A doctor", ko:"한 의사가", t:"subj"},
        {en:"warns", ko:"경고한다", t:"verb"},
        {en:"the old patient", ko:"그 나이 든 환자에게", t:"obj"},
        {en:"to pause", ko:"잠시 멈추라고", t:"comp"}]},
      {n:4, full:"한 의사가 그 환자에게 은퇴하라고 상기시킨다", chunks:[
        {en:"A doctor", ko:"한 의사가", t:"subj"},
        {en:"reminds", ko:"상기시킨다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"to retire", ko:"은퇴하라고", t:"comp"}]},
      {n:5, full:"그 계획은 그 집단이 성공하도록 해준다", chunks:[
        {en:"The plan", ko:"그 계획은", t:"subj"},
        {en:"enables", ko:"가능하게 한다", t:"verb"},
        {en:"the group", ko:"그 집단이", t:"obj"},
        {en:"to succeed", ko:"성공하도록", t:"comp"}]},
      {n:6, full:"한 의사가 그 환자가 떠나도록 허락한다", chunks:[
        {en:"A doctor", ko:"한 의사가", t:"subj"},
        {en:"allows", ko:"허락한다", t:"verb"},
        {en:"the patient", ko:"그 환자가", t:"obj"},
        {en:"to leave", ko:"떠나도록", t:"comp"}]},
      {n:7, full:"우리는 그 식사가 준비되기를 요구한다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"require", ko:"요구한다", t:"verb"},
        {en:"the meal", ko:"그 식사가", t:"obj"},
        {en:"prepared", ko:"준비되기를", t:"comp"}]},
      {n:8, full:"한 지도자가 그 시끄러운 군중에게 잠시 멈추라고 강요한다", chunks:[
        {en:"A leader", ko:"한 지도자가", t:"subj"},
        {en:"forces", ko:"강요한다", t:"verb"},
        {en:"the loud crowd", ko:"그 시끄러운 군중에게", t:"obj"},
        {en:"to pause", ko:"잠시 멈추라고", t:"comp"}]},
      {n:9, full:"그 계획은 그 시민이 참여하도록 해준다", chunks:[
        {en:"The plan", ko:"그 계획은", t:"subj"},
        {en:"enables", ko:"가능하게 한다", t:"verb"},
        {en:"the citizen", ko:"그 시민이", t:"obj"},
        {en:"to participate", ko:"참여하도록", t:"comp"}]},
      {n:10, full:"한 지도자가 그 구성원이 합류하도록 허락한다", chunks:[
        {en:"A leader", ko:"한 지도자가", t:"subj"},
        {en:"allows", ko:"허락한다", t:"verb"},
        {en:"the member", ko:"그 구성원이", t:"obj"},
        {en:"to join", ko:"합류하도록", t:"comp"}]},
      {n:11, full:"한 지도자가 그 새 구성원이 참여하기를 원한다", chunks:[
        {en:"A leader", ko:"한 지도자가", t:"subj"},
        {en:"wants", ko:"원한다", t:"verb"},
        {en:"the new member", ko:"그 새 구성원이", t:"obj"},
        {en:"to participate", ko:"참여하기를", t:"comp"}]},
      {n:12, full:"우리는 그 손님이 짧은 한 달 동안 머물도록 설득한다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"persuade", ko:"설득한다", t:"verb"},
        {en:"the guest", ko:"그 손님을", t:"obj"},
        {en:"to stay for a short month", ko:"짧은 한 달 동안 머물도록", t:"comp"}]},
      {n:13, full:"한 비평가가 그 구성원이 다음 시즌에 합류하도록 설득한다", chunks:[
        {en:"A critic", ko:"한 비평가가", t:"subj"},
        {en:"persuades", ko:"설득한다", t:"verb"},
        {en:"the member", ko:"그 구성원을", t:"obj"},
        {en:"to join the next season", ko:"다음 시즌에 합류하도록", t:"comp"}]},
      {n:14, full:"한 전문가는 그 판매가 실패할 것이라고 예상한다", chunks:[
        {en:"An expert", ko:"한 전문가는", t:"subj"},
        {en:"expects", ko:"예상한다", t:"verb"},
        {en:"the sale", ko:"그 판매가", t:"obj"},
        {en:"to fail", ko:"실패할 것이라고", t:"comp"}]},
      {n:15, full:"한 지도자가 그 차가 세차되도록 명령한다", chunks:[
        {en:"A leader", ko:"한 지도자가", t:"subj"},
        {en:"orders", ko:"명령한다", t:"verb"},
        {en:"the car", ko:"그 차가", t:"obj"},
        {en:"washed", ko:"세차되도록", t:"comp"}]},
      {n:16, full:"우리는 그 구성원에게 응답하라고 말한다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"tell", ko:"말한다", t:"verb"},
        {en:"the member", ko:"그 구성원에게", t:"obj"},
        {en:"to respond", ko:"응답하라고", t:"comp"}]},
      {n:17, full:"한 비평가가 그 시인이 낭독하도록 초대한다", chunks:[
        {en:"A critic", ko:"한 비평가가", t:"subj"},
        {en:"invites", ko:"초대한다", t:"verb"},
        {en:"the poet", ko:"그 시인을", t:"obj"},
        {en:"to read", ko:"낭독하도록", t:"comp"}]},
      {n:18, full:"전문가들은 그 판매가 떨어지도록 몰아간다", chunks:[
        {en:"Experts", ko:"전문가들은", t:"subj"},
        {en:"force", ko:"몰아간다", t:"verb"},
        {en:"the sale", ko:"그 판매가", t:"obj"},
        {en:"to drop", ko:"떨어지도록", t:"comp"}]},
      {n:19, full:"한 지도자가 그 구성원이 미래에 성공하도록 해준다", chunks:[
        {en:"A leader", ko:"한 지도자가", t:"subj"},
        {en:"enables", ko:"가능하게 한다", t:"verb"},
        {en:"the member", ko:"그 구성원이", t:"obj"},
        {en:"to succeed in the future", ko:"미래에 성공하도록", t:"comp"}]},
      {n:20, full:"전문가들은 그 불이 멈출 것이라고 예상한다", chunks:[
        {en:"Experts", ko:"전문가들은", t:"subj"},
        {en:"expect", ko:"예상한다", t:"verb"},
        {en:"the fire", ko:"그 불이", t:"obj"},
        {en:"to stop", ko:"멈출 것이라고", t:"comp"}]},
      {n:21, full:"우리는 그 일이 완료되기를 기대한다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"expect", ko:"기대한다", t:"verb"},
        {en:"the work", ko:"그 일이", t:"obj"},
        {en:"done", ko:"완료되기를", t:"comp"}]},
      {n:22, full:"한 부모가 그 총명한 아이가 시도하도록 격려한다", chunks:[
        {en:"A parent", ko:"한 부모가", t:"subj"},
        {en:"encourages", ko:"격려한다", t:"verb"},
        {en:"the bright child", ko:"그 총명한 아이가", t:"obj"},
        {en:"to try", ko:"시도하도록", t:"comp"}]},
      {n:23, full:"전문가들은 그 구성원에게 참여하라고 가르친다", chunks:[
        {en:"Experts", ko:"전문가들은", t:"subj"},
        {en:"teach", ko:"가르친다", t:"verb"},
        {en:"the member", ko:"그 구성원에게", t:"obj"},
        {en:"to participate", ko:"참여하라고", t:"comp"}]},
      {n:24, full:"전문가들은 그 시민이 따르기를 요구한다", chunks:[
        {en:"Experts", ko:"전문가들은", t:"subj"},
        {en:"require", ko:"요구한다", t:"verb"},
        {en:"the citizen", ko:"그 시민이", t:"obj"},
        {en:"to obey", ko:"따르기를", t:"comp"}]},
      {n:25, full:"그 비는 그 판매가 떨어지도록 만든다", chunks:[
        {en:"The rain", ko:"그 비는", t:"subj"},
        {en:"causes", ko:"만든다", t:"verb"},
        {en:"the sale", ko:"그 판매가", t:"obj"},
        {en:"to drop", ko:"떨어지도록", t:"comp"}]},
      {n:26, full:"한 지도자는 그 집단이 그 시즌에 대해 결정하기를 필요로 한다", chunks:[
        {en:"A leader", ko:"한 지도자는", t:"subj"},
        {en:"needs", ko:"필요로 한다", t:"verb"},
        {en:"the group", ko:"그 집단이", t:"obj"},
        {en:"to decide about the season", ko:"그 시즌에 대해 결정하기를", t:"comp"}]},
      {n:27, full:"한 의사가 그 나이 든 환자에게 은퇴하라고 조언한다", chunks:[
        {en:"A doctor", ko:"한 의사가", t:"subj"},
        {en:"advises", ko:"조언한다", t:"verb"},
        {en:"the old patient", ko:"그 나이 든 환자에게", t:"obj"},
        {en:"to retire", ko:"은퇴하라고", t:"comp"}]},
      {n:28, full:"우리는 그 손님에게 음식을 가져오라고 요청한다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"ask", ko:"요청한다", t:"verb"},
        {en:"the guest", ko:"그 손님에게", t:"obj"},
        {en:"to bring food", ko:"음식을 가져오라고", t:"comp"}]},
      {n:29, full:"한 부모가 그 아이가 시도하도록 허락한다", chunks:[
        {en:"A parent", ko:"한 부모가", t:"subj"},
        {en:"allows", ko:"허락한다", t:"verb"},
        {en:"the child", ko:"그 아이가", t:"obj"},
        {en:"to try", ko:"시도하도록", t:"comp"}]},
      {n:30, full:"우리는 그 군중에게 그 공원을 떠나라고 경고한다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"warn", ko:"경고한다", t:"verb"},
        {en:"the crowd", ko:"그 군중에게", t:"obj"},
        {en:"to leave the park", ko:"그 공원을 떠나라고", t:"comp"}]},
      {n:31, full:"한 의사가 그 환자에게 은퇴하라고 요청한다", chunks:[
        {en:"A doctor", ko:"한 의사가", t:"subj"},
        {en:"asks", ko:"요청한다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"to retire", ko:"은퇴하라고", t:"comp"}]},
      {n:32, full:"우리는 그 바닥이 청소되도록 명령한다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"order", ko:"명령한다", t:"verb"},
        {en:"the floor", ko:"그 바닥이", t:"obj"},
        {en:"cleaned", ko:"청소되도록", t:"comp"}]},
      {n:33, full:"한 의사가 그 환자에게 다음 달에 돌아오라고 말한다", chunks:[
        {en:"A doctor", ko:"한 의사가", t:"subj"},
        {en:"tells", ko:"말한다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"to return next month", ko:"다음 달에 돌아오라고", t:"comp"}]},
      {n:34, full:"한 지도자가 그 집단에게 그 새 프로젝트를 시작하라고 말한다", chunks:[
        {en:"A leader", ko:"한 지도자가", t:"subj"},
        {en:"tells", ko:"말한다", t:"verb"},
        {en:"the group", ko:"그 집단에게", t:"obj"},
        {en:"to start the new project", ko:"그 새 프로젝트를 시작하라고", t:"comp"}]},
      {n:35, full:"그 엔진 문제는 그 차가 멈추도록 만든다", chunks:[
        {en:"The engine problem", ko:"그 엔진 문제는", t:"subj"},
        {en:"causes", ko:"만든다", t:"verb"},
        {en:"the car", ko:"그 차가", t:"obj"},
        {en:"to stop", ko:"멈추도록", t:"comp"}]},
      {n:36, full:"한 비평가가 그 아이에게 미래에 대해 신경 쓰라고 가르친다", chunks:[
        {en:"A critic", ko:"한 비평가가", t:"subj"},
        {en:"teaches", ko:"가르친다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"to care about the future", ko:"미래에 대해 신경 쓰라고", t:"comp"}]},
      {n:37, full:"전문가들은 그 지도자가 응답하도록 설득한다", chunks:[
        {en:"Experts", ko:"전문가들은", t:"subj"},
        {en:"persuade", ko:"설득한다", t:"verb"},
        {en:"the leader", ko:"그 지도자를", t:"obj"},
        {en:"to respond", ko:"응답하도록", t:"comp"}]},
      {n:38, full:"비평가들은 그 시인에게 응답하라고 요청한다", chunks:[
        {en:"Critics", ko:"비평가들은", t:"subj"},
        {en:"ask", ko:"요청한다", t:"verb"},
        {en:"the poet", ko:"그 시인에게", t:"obj"},
        {en:"to respond", ko:"응답하라고", t:"comp"}]},
      {n:39, full:"우리는 그 군중이 그 위험을 마주하도록 몰아간다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"force", ko:"몰아간다", t:"verb"},
        {en:"the crowd", ko:"그 군중이", t:"obj"},
        {en:"to face the danger", ko:"그 위험을 마주하도록", t:"comp"}]},
      {n:40, full:"우리는 그 손님이 머물도록 초대한다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"invite", ko:"초대한다", t:"verb"},
        {en:"the guest", ko:"그 손님을", t:"obj"},
        {en:"to stay", ko:"머물도록", t:"comp"}]},
      {n:41, full:"우리는 그 손님에게 그 식사를 가져오라고 상기시킨다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"remind", ko:"상기시킨다", t:"verb"},
        {en:"the guest", ko:"그 손님에게", t:"obj"},
        {en:"to bring the meal", ko:"그 식사를 가져오라고", t:"comp"}]},
      {n:42, full:"우리는 그 일이 완료되기를 필요로 한다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"need", ko:"필요로 한다", t:"verb"},
        {en:"the work", ko:"그 일이", t:"obj"},
        {en:"done", ko:"완료되기를", t:"comp"}]},
      {n:43, full:"한 주장이 그 팀에게 시작하라고 명령한다", chunks:[
        {en:"A captain", ko:"한 주장이", t:"subj"},
        {en:"orders", ko:"명령한다", t:"verb"},
        {en:"the team", ko:"그 팀에게", t:"obj"},
        {en:"to start", ko:"시작하라고", t:"comp"}]},
      {n:44, full:"한 부모가 그 총명한 아이가 시도하기를 원한다", chunks:[
        {en:"A parent", ko:"한 부모가", t:"subj"},
        {en:"wants", ko:"원한다", t:"verb"},
        {en:"the bright child", ko:"그 총명한 아이가", t:"obj"},
        {en:"to try", ko:"시도하기를", t:"comp"}]},
      {n:45, full:"한 전문가가 그 아이에게 그 짧은 책을 읽으라고 가르친다", chunks:[
        {en:"An expert", ko:"한 전문가가", t:"subj"},
        {en:"teaches", ko:"가르친다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"to read the short book", ko:"그 짧은 책을 읽으라고", t:"comp"}]},
      {n:46, full:"전문가들은 그 이야기가 쓰이기를 필요로 한다", chunks:[
        {en:"Experts", ko:"전문가들은", t:"subj"},
        {en:"need", ko:"필요로 한다", t:"verb"},
        {en:"the story", ko:"그 이야기가", t:"obj"},
        {en:"written", ko:"쓰이기를", t:"comp"}]},
      {n:47, full:"한 전문가가 그 새 구성원에게 그 수업에서 응답하라고 조언한다", chunks:[
        {en:"An expert", ko:"한 전문가가", t:"subj"},
        {en:"advises", ko:"조언한다", t:"verb"},
        {en:"the new member", ko:"그 새 구성원에게", t:"obj"},
        {en:"to respond in the class", ko:"그 수업에서 응답하라고", t:"comp"}]},
      {n:48, full:"한 구성원이 그 친구가 놀도록 초대한다", chunks:[
        {en:"A member", ko:"한 구성원이", t:"subj"},
        {en:"invites", ko:"초대한다", t:"verb"},
        {en:"the friend", ko:"그 친구를", t:"obj"},
        {en:"to play", ko:"놀도록", t:"comp"}]},
      {n:49, full:"우리는 그 군중에게 그 불을 마주하라고 경고한다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"warn", ko:"경고한다", t:"verb"},
        {en:"the crowd", ko:"그 군중에게", t:"obj"},
        {en:"to face the fire", ko:"그 불을 마주하라고", t:"comp"}]},
      {n:50, full:"한 비평가가 그 새 구성원이 신경 쓰도록 격려한다", chunks:[
        {en:"A critic", ko:"한 비평가가", t:"subj"},
        {en:"encourages", ko:"격려한다", t:"verb"},
        {en:"the new member", ko:"그 새 구성원이", t:"obj"},
        {en:"to care", ko:"신경 쓰도록", t:"comp"}]},
      {n:51, full:"우리는 그 시끄러운 집단이 그 수업에 참여하도록 격려한다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"encourage", ko:"격려한다", t:"verb"},
        {en:"the loud group", ko:"그 시끄러운 집단이", t:"obj"},
        {en:"to participate in the class", ko:"그 수업에 참여하도록", t:"comp"}]},
      {n:52, full:"그 계획은 그 프로젝트가 실패하도록 만든다", chunks:[
        {en:"The plan", ko:"그 계획은", t:"subj"},
        {en:"causes", ko:"만든다", t:"verb"},
        {en:"the project", ko:"그 프로젝트가", t:"obj"},
        {en:"to fail", ko:"실패하도록", t:"comp"}]},
      {n:53, full:"우리는 그 바닥이 청소되기를 원한다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"want", ko:"원한다", t:"verb"},
        {en:"the floor", ko:"그 바닥이", t:"obj"},
        {en:"cleaned", ko:"청소되기를", t:"comp"}]},
      {n:54, full:"한 부모가 그 아이에게 그 수업 전에 그 책을 반납하라고 상기시킨다", chunks:[
        {en:"A parent", ko:"한 부모가", t:"subj"},
        {en:"reminds", ko:"상기시킨다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"to return the book before the class", ko:"그 수업 전에 그 책을 반납하라고", t:"comp"}]}
    ]},
    { id:"5형식수동태", items:[
      {n:1, full:"그 회원은 운전하라고 요청받는다", chunks:[
        {en:"The member", ko:"그 회원은", t:"subj"},
        {en:"is asked", ko:"요청받는다", t:"verb"},
        {en:"to drive", ko:"운전하라고", t:"comp"}]},
      {n:2, full:"그 연구는 어렵다고 여겨진다", chunks:[
        {en:"The research", ko:"그 연구는", t:"subj"},
        {en:"is found", ko:"여겨진다", t:"verb"},
        {en:"hard", ko:"어렵다고", t:"comp"}]},
      {n:3, full:"그 방식은 이상하다고 여겨진다", chunks:[
        {en:"The style", ko:"그 방식은", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"strange", ko:"이상하다고", t:"comp"}]},
      {n:4, full:"그 물은 따뜻하게 유지된다", chunks:[
        {en:"The water", ko:"그 물은", t:"subj"},
        {en:"is kept", ko:"유지된다", t:"verb"},
        {en:"warm", ko:"따뜻하게", t:"comp"}]},
      {n:5, full:"그 식사는 맛있다고 여겨진다", chunks:[
        {en:"The meal", ko:"그 식사는", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"delicious", ko:"맛있다고", t:"comp"}]},
      {n:6, full:"그 화학물질은 위험이라고 불린다", chunks:[
        {en:"The chemical", ko:"그 화학물질은", t:"subj"},
        {en:"is called", ko:"불린다", t:"verb"},
        {en:"a danger", ko:"위험이라고", t:"comp"}]},
      {n:7, full:"그 여왕은 지도자로 뽑힌다", chunks:[
        {en:"The queen", ko:"그 여왕은", t:"subj"},
        {en:"is elected", ko:"뽑힌다", t:"verb"},
        {en:"leader", ko:"지도자로", t:"comp"}]},
      {n:8, full:"그 방식은 새롭다고 여겨진다", chunks:[
        {en:"The style", ko:"그 방식은", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"new", ko:"새롭다고", t:"comp"}]},
      {n:9, full:"그 화학물질은 나쁘다고 여겨진다", chunks:[
        {en:"The chemical", ko:"그 화학물질은", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"bad", ko:"나쁘다고", t:"comp"}]},
      {n:10, full:"그 환자는 은퇴하라고 요청받는다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"is asked", ko:"요청받는다", t:"verb"},
        {en:"to retire", ko:"은퇴하라고", t:"comp"}]},
      {n:11, full:"그 수프는 맛있다고 여겨진다", chunks:[
        {en:"The soup", ko:"그 수프는", t:"subj"},
        {en:"is found", ko:"여겨진다", t:"verb"},
        {en:"delicious", ko:"맛있다고", t:"comp"}]},
      {n:12, full:"그 관객은 웃도록 들린다", chunks:[
        {en:"The audience", ko:"그 관객은", t:"subj"},
        {en:"is heard", ko:"들린다", t:"verb"},
        {en:"to laugh", ko:"웃도록", t:"comp"}]},
      {n:13, full:"그 형태는 새롭다고 여겨진다", chunks:[
        {en:"The form", ko:"그 형태는", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"new", ko:"새롭다고", t:"comp"}]},
      {n:14, full:"소금은 나쁘다고 여겨진다", chunks:[
        {en:"Salt", ko:"소금은", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"bad", ko:"나쁘다고", t:"comp"}]},
      {n:15, full:"그 아이는 서도록 도움받는다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"is helped", ko:"도움받는다", t:"verb"},
        {en:"to stand", ko:"서도록", t:"comp"}]},
      {n:16, full:"그 얼음은 위험이라고 불린다", chunks:[
        {en:"The ice", ko:"그 얼음은", t:"subj"},
        {en:"is called", ko:"불린다", t:"verb"},
        {en:"a danger", ko:"위험이라고", t:"comp"}]},
      {n:17, full:"그 무리는 동의하라고 하게 된다", chunks:[
        {en:"The group", ko:"그 무리는", t:"subj"},
        {en:"is made", ko:"하게 된다", t:"verb"},
        {en:"to agree", ko:"동의하라고", t:"comp"}]},
      {n:18, full:"그 군중은 반응하는 것이 보인다", chunks:[
        {en:"The crowd", ko:"그 군중은", t:"subj"},
        {en:"is seen", ko:"보인다", t:"verb"},
        {en:"to react", ko:"반응하는 것이", t:"comp"}]},
      {n:19, full:"그 여왕은 대답하라고 권유받는다", chunks:[
        {en:"The queen", ko:"그 여왕은", t:"subj"},
        {en:"is advised", ko:"권유받는다", t:"verb"},
        {en:"to respond", ko:"대답하라고", t:"comp"}]},
      {n:20, full:"그 환자는 그 자리에 앉으라고 요청받는다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"is asked", ko:"요청받는다", t:"verb"},
        {en:"to take the seat", ko:"그 자리에 앉으라고", t:"comp"}]},
      {n:21, full:"그 아이는 그 책을 가져가라고 듣는다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"is told", ko:"듣는다", t:"verb"},
        {en:"to take the book", ko:"그 책을 가져가라고", t:"comp"}]},
      {n:22, full:"그 경찰은 떠나라고 듣는다", chunks:[
        {en:"The police", ko:"그 경찰은", t:"subj"},
        {en:"are told", ko:"듣는다", t:"verb"},
        {en:"to leave", ko:"떠나라고", t:"comp"}]},
      {n:23, full:"그 영화는 성공이라고 불린다", chunks:[
        {en:"The movie", ko:"그 영화는", t:"subj"},
        {en:"is called", ko:"불린다", t:"verb"},
        {en:"a success", ko:"성공이라고", t:"comp"}]},
      {n:24, full:"그 꿈은 달콤하다고 여겨진다", chunks:[
        {en:"The dream", ko:"그 꿈은", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"sweet", ko:"달콤하다고", t:"comp"}]},
      {n:25, full:"그 계획은 어렵다고 여겨진다", chunks:[
        {en:"The project", ko:"그 계획은", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"hard", ko:"어렵다고", t:"comp"}]},
      {n:26, full:"그 군중은 당황하도록 보인다", chunks:[
        {en:"The crowd", ko:"그 군중은", t:"subj"},
        {en:"is seen", ko:"보인다", t:"verb"},
        {en:"to panic", ko:"당황하도록", t:"comp"}]},
      {n:27, full:"그 별은 반응하는 것이 보인다", chunks:[
        {en:"The star", ko:"그 별은", t:"subj"},
        {en:"is seen", ko:"보인다", t:"verb"},
        {en:"to react", ko:"반응하는 것이", t:"comp"}]},
      {n:28, full:"자연은 깨끗하게 유지된다", chunks:[
        {en:"Nature", ko:"자연은", t:"subj"},
        {en:"is kept", ko:"유지된다", t:"verb"},
        {en:"clean", ko:"깨끗하게", t:"comp"}]},
      {n:29, full:"그 비는 가볍다고 여겨진다", chunks:[
        {en:"The rain", ko:"그 비는", t:"subj"},
        {en:"is found", ko:"여겨진다", t:"verb"},
        {en:"light", ko:"가볍다고", t:"comp"}]},
      {n:30, full:"그 수는 높다고 여겨진다", chunks:[
        {en:"The number", ko:"그 수는", t:"subj"},
        {en:"is found", ko:"여겨진다", t:"verb"},
        {en:"high", ko:"높다고", t:"comp"}]},
      {n:31, full:"그 바다는 잔잔하다고 여겨진다", chunks:[
        {en:"The sea", ko:"그 바다는", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"calm", ko:"잔잔하다고", t:"comp"}]},
      {n:32, full:"그 동물은 달리는 것을 관찰된다", chunks:[
        {en:"The animal", ko:"그 동물은", t:"subj"},
        {en:"is watched", ko:"관찰된다", t:"verb"},
        {en:"running", ko:"달리는 것을", t:"comp"}]},
      {n:33, full:"그 군중은 당황하도록 하게 된다", chunks:[
        {en:"The crowd", ko:"그 군중은", t:"subj"},
        {en:"is made", ko:"하게 된다", t:"verb"},
        {en:"to panic", ko:"당황하도록", t:"comp"}]},
      {n:34, full:"그 얼음은 차갑게 유지된다", chunks:[
        {en:"The ice", ko:"그 얼음은", t:"subj"},
        {en:"is kept", ko:"유지된다", t:"verb"},
        {en:"cold", ko:"차갑게", t:"comp"}]},
      {n:35, full:"그 날씨는 나쁘다고 여겨진다", chunks:[
        {en:"The weather", ko:"그 날씨는", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"bad", ko:"나쁘다고", t:"comp"}]},
      {n:36, full:"그 아기는 웃도록 하게 된다", chunks:[
        {en:"The baby", ko:"그 아기는", t:"subj"},
        {en:"is made", ko:"하게 된다", t:"verb"},
        {en:"to laugh", ko:"웃도록", t:"comp"}]},
      {n:37, full:"그 풀은 부드럽다고 여겨진다", chunks:[
        {en:"The grass", ko:"그 풀은", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"soft", ko:"부드럽다고", t:"comp"}]},
      {n:38, full:"자연은 잔잔하다고 여겨진다", chunks:[
        {en:"Nature", ko:"자연은", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"calm", ko:"잔잔하다고", t:"comp"}]},
      {n:39, full:"그 나무는 어렵다고 여겨진다", chunks:[
        {en:"The wood", ko:"그 나무는", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"hard", ko:"어렵다고", t:"comp"}]},
      {n:40, full:"그 바다는 위험이라고 불린다", chunks:[
        {en:"The sea", ko:"그 바다는", t:"subj"},
        {en:"is called", ko:"불린다", t:"verb"},
        {en:"a danger", ko:"위험이라고", t:"comp"}]},
      {n:41, full:"그 날씨는 따뜻하게 여겨진다", chunks:[
        {en:"The weather", ko:"그 날씨는", t:"subj"},
        {en:"is found", ko:"여겨진다", t:"verb"},
        {en:"warm", ko:"따뜻하게", t:"comp"}]},
      {n:42, full:"그 환자는 돌아오라고 명령받는다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"is ordered", ko:"명령받는다", t:"verb"},
        {en:"to return", ko:"돌아오라고", t:"comp"}]},
      {n:43, full:"그 모델은 스타라고 여겨진다", chunks:[
        {en:"The model", ko:"그 모델은", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"a star", ko:"스타라고", t:"comp"}]},
      {n:44, full:"그 장미는 마른 상태로 유지된다", chunks:[
        {en:"The rose", ko:"그 장미는", t:"subj"},
        {en:"is kept", ko:"유지된다", t:"verb"},
        {en:"dry", ko:"마른 상태로", t:"comp"}]},
      {n:45, full:"그 장미는 짙다고 여겨진다", chunks:[
        {en:"The rose", ko:"그 장미는", t:"subj"},
        {en:"is found", ko:"여겨진다", t:"verb"},
        {en:"dark", ko:"짙다고", t:"comp"}]},
      {n:46, full:"그 팀은 시작하라고 듣는다", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"is told", ko:"듣는다", t:"verb"},
        {en:"to start", ko:"시작하라고", t:"comp"}]},
      {n:47, full:"그 모델은 돌아오라고 초대받는다", chunks:[
        {en:"The model", ko:"그 모델은", t:"subj"},
        {en:"is invited", ko:"초대받는다", t:"verb"},
        {en:"to return", ko:"돌아오라고", t:"comp"}]},
      {n:48, full:"그 식사는 가볍다고 여겨진다", chunks:[
        {en:"The meal", ko:"그 식사는", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"light", ko:"가볍다고", t:"comp"}]},
      {n:49, full:"그 손님은 운전하라고 듣는다", chunks:[
        {en:"The guest", ko:"그 손님은", t:"subj"},
        {en:"is told", ko:"듣는다", t:"verb"},
        {en:"to drive", ko:"운전하라고", t:"comp"}]},
      {n:50, full:"그 형태는 분명하다고 여겨진다", chunks:[
        {en:"The form", ko:"그 형태는", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"clear", ko:"분명하다고", t:"comp"}]},
      {n:51, full:"그 연구는 익숙하다고 여겨진다", chunks:[
        {en:"The research", ko:"그 연구는", t:"subj"},
        {en:"is found", ko:"여겨진다", t:"verb"},
        {en:"familiar", ko:"익숙하다고", t:"comp"}]},
      {n:52, full:"그 아이는 잊으라고 도움받는다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"is helped", ko:"도움받는다", t:"verb"},
        {en:"to forget", ko:"잊으라고", t:"comp"}]},
      {n:53, full:"그 회원은 지도자로 임명된다", chunks:[
        {en:"The member", ko:"그 회원은", t:"subj"},
        {en:"is named", ko:"임명된다", t:"verb"},
        {en:"leader", ko:"지도자로", t:"comp"}]},
      {n:54, full:"그 나무는 마른 상태로 유지된다", chunks:[
        {en:"The wood", ko:"그 나무는", t:"subj"},
        {en:"is kept", ko:"유지된다", t:"verb"},
        {en:"dry", ko:"마른 상태로", t:"comp"}]},
      {n:55, full:"그 미소는 따뜻하게 여겨진다", chunks:[
        {en:"The smile", ko:"그 미소는", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"warm", ko:"따뜻하게", t:"comp"}]},
      {n:56, full:"그 가격은 높다고 여겨진다", chunks:[
        {en:"The price", ko:"그 가격은", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"high", ko:"높다고", t:"comp"}]},
      {n:57, full:"그 환자는 잊으라고 하게 된다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"is made", ko:"하게 된다", t:"verb"},
        {en:"to forget", ko:"잊으라고", t:"comp"}]},
      {n:58, full:"그녀의 미소는 밝다고 여겨진다", chunks:[
        {en:"Her smile", ko:"그녀의 미소는", t:"subj"},
        {en:"is found", ko:"여겨진다", t:"verb"},
        {en:"bright", ko:"밝다고", t:"comp"}]},
      {n:59, full:"그 풀은 낮게 유지된다", chunks:[
        {en:"The grass", ko:"그 풀은", t:"subj"},
        {en:"is kept", ko:"유지된다", t:"verb"},
        {en:"low", ko:"낮게", t:"comp"}]},
      {n:60, full:"그 경찰은 멈추라고 경고받는다", chunks:[
        {en:"The police", ko:"그 경찰은", t:"subj"},
        {en:"are warned", ko:"경고받는다", t:"verb"},
        {en:"to pause", ko:"멈추라고", t:"comp"}]},
      {n:61, full:"소금은 마른 상태로 유지된다", chunks:[
        {en:"Salt", ko:"소금은", t:"subj"},
        {en:"is kept", ko:"유지된다", t:"verb"},
        {en:"dry", ko:"마른 상태로", t:"comp"}]},
      {n:62, full:"그 꿈은 이상하다고 여겨진다", chunks:[
        {en:"The dream", ko:"그 꿈은", t:"subj"},
        {en:"is considered", ko:"여겨진다", t:"verb"},
        {en:"strange", ko:"이상하다고", t:"comp"}]},
    ]},
    { id:"MASH UP(문장 구조)", items:[
      {n:1, full:"그 책은 읽힌다 (한 의사에 의해)", chunks:[
        {en:"The book", ko:"그 책은", t:"subj"},
        {en:"is read", ko:"읽힌다", t:"verb"},
        {en:"by a doctor", ko:"한 의사에 의해", t:"mod"}]},
      {n:2, full:"그 화학물질은 연구된다 (전문가들에 의해)", chunks:[
        {en:"The chemical", ko:"그 화학물질은", t:"subj"},
        {en:"is studied", ko:"연구된다", t:"verb"},
        {en:"by experts", ko:"전문가들에 의해", t:"mod"}]},
      {n:3, full:"한 비평가가 좋아한다 그 영화를", chunks:[
        {en:"A critic", ko:"한 비평가가", t:"subj"},
        {en:"likes", ko:"좋아한다", t:"verb"},
        {en:"the movie", ko:"그 영화를", t:"obj"}]},
      {n:4, full:"그 수프는 여겨진다 맛있다고 (비평가들에게)", chunks:[
        {en:"The soup", ko:"그 수프는", t:"subj"},
        {en:"is found", ko:"여겨진다", t:"verb"},
        {en:"delicious", ko:"맛있다고", t:"comp"},
        {en:"by critics", ko:"비평가들에게", t:"mod"}]},
      {n:5, full:"그 팀이 이긴다 그 경기를", chunks:[
        {en:"The team", ko:"그 팀이", t:"subj"},
        {en:"wins", ko:"이긴다", t:"verb"},
        {en:"the game", ko:"그 경기를", t:"obj"}]},
      {n:6, full:"그 엔진이 멈춘다 (고속도로 위에서)", chunks:[
        {en:"The engine", ko:"그 엔진이", t:"subj"},
        {en:"stops", ko:"멈춘다", t:"verb"},
        {en:"on the highway", ko:"고속도로 위에서", t:"mod"}]},
      {n:7, full:"한 끼 식사가 만들어진다 (그 아이를 위해) (한 부모에 의해)", chunks:[
        {en:"A meal", ko:"한 끼 식사가", t:"subj"},
        {en:"is made", ko:"만들어진다", t:"verb"},
        {en:"for the child", ko:"그 아이를 위해", t:"mod"},
        {en:"by a parent", ko:"한 부모에 의해", t:"mod"}]},
      {n:8, full:"그 환자가 돌아온다", chunks:[
        {en:"The patient", ko:"그 환자가", t:"subj"},
        {en:"returns", ko:"돌아온다", t:"verb"}]},
      {n:9, full:"사람들은 일한다 (열심히)", chunks:[
        {en:"People", ko:"사람들은", t:"subj"},
        {en:"work", ko:"일한다", t:"verb"},
        {en:"hard", ko:"열심히", t:"mod"}]},
      {n:10, full:"비평가들은 여긴다 그 꿈을 이상하다고", chunks:[
        {en:"Critics", ko:"비평가들은", t:"subj"},
        {en:"consider", ko:"여긴다", t:"verb"},
        {en:"the dream", ko:"그 꿈을", t:"obj"},
        {en:"strange", ko:"이상하다고", t:"comp"}]},
      {n:11, full:"그 음악은 연주된다 (한 비평가에 의해)", chunks:[
        {en:"The music", ko:"그 음악은", t:"subj"},
        {en:"is played", ko:"연주된다", t:"verb"},
        {en:"by a critic", ko:"한 비평가에 의해", t:"mod"}]},
      {n:12, full:"우리는 부른다 그 영화를 성공작이라고", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"call", ko:"부른다", t:"verb"},
        {en:"the movie", ko:"그 영화를", t:"obj"},
        {en:"a success", ko:"성공작이라고", t:"comp"}]},
      {n:13, full:"비평가들은 좋아한다 그 음악을", chunks:[
        {en:"Critics", ko:"비평가들은", t:"subj"},
        {en:"like", ko:"좋아한다", t:"verb"},
        {en:"the music", ko:"그 음악을", t:"obj"}]},
      {n:14, full:"그 세계는 보인다 이상하게", chunks:[
        {en:"The world", ko:"그 세계는", t:"subj"},
        {en:"seems", ko:"보인다", t:"verb"},
        {en:"strange", ko:"이상하게", t:"comp"}]},
      {n:15, full:"그 수프는 이다 맛있다", chunks:[
        {en:"The soup", ko:"그 수프는", t:"subj"},
        {en:"is", ko:"이다", t:"verb"},
        {en:"delicious", ko:"맛있다", t:"comp"}]},
      {n:16, full:"한 부모가 요리한다 그 식사를 (부엌에서)", chunks:[
        {en:"A parent", ko:"한 부모가", t:"subj"},
        {en:"cooks", ko:"요리한다", t:"verb"},
        {en:"the meal", ko:"그 식사를", t:"obj"},
        {en:"in the kitchen", ko:"부엌에서", t:"mod"}]},
      {n:17, full:"문제들이 일어난다", chunks:[
        {en:"Problems", ko:"문제들이", t:"subj"},
        {en:"happen", ko:"일어난다", t:"verb"}]},
      {n:18, full:"한 부모가 만든다 그 아기를 웃게", chunks:[
        {en:"A parent", ko:"한 부모가", t:"subj"},
        {en:"makes", ko:"만든다", t:"verb"},
        {en:"the baby", ko:"그 아기를", t:"obj"},
        {en:"laugh", ko:"웃게", t:"comp"}]},
      {n:19, full:"시민들이 뽑는다 그 회원을 지도자로", chunks:[
        {en:"Citizens", ko:"시민들이", t:"subj"},
        {en:"elect", ko:"뽑는다", t:"verb"},
        {en:"the member", ko:"그 회원을", t:"obj"},
        {en:"leader", ko:"지도자로", t:"comp"}]},
      {n:20, full:"그 바다는 보인다 잔잔하게", chunks:[
        {en:"The sea", ko:"그 바다는", t:"subj"},
        {en:"looks", ko:"보인다", t:"verb"},
        {en:"calm", ko:"잔잔하게", t:"comp"}]},
      {n:21, full:"전문가들이 말해준다 그 무리에게 그 진실을", chunks:[
        {en:"Experts", ko:"전문가들이", t:"subj"},
        {en:"tell", ko:"말해준다", t:"verb"},
        {en:"the group", ko:"그 무리에게", t:"obj"},
        {en:"the truth", ko:"그 진실을", t:"obj"}]},
      {n:22, full:"한 부모가 요리해준다 그 아이에게 한 끼 식사를", chunks:[
        {en:"A parent", ko:"한 부모가", t:"subj"},
        {en:"cooks", ko:"요리해준다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"a meal", ko:"한 끼 식사를", t:"obj"}]},
      {n:23, full:"한 지도자가 말한다 그 무리에게 시작하라고", chunks:[
        {en:"A leader", ko:"한 지도자가", t:"subj"},
        {en:"tells", ko:"말한다", t:"verb"},
        {en:"the group", ko:"그 무리에게", t:"obj"},
        {en:"to start", ko:"시작하라고", t:"comp"}]},
      {n:24, full:"가격은 다양하다", chunks:[
        {en:"Prices", ko:"가격은", t:"subj"},
        {en:"vary", ko:"다양하다", t:"verb"}]},
      {n:25, full:"아이들은 사랑한다 음악을", chunks:[
        {en:"Children", ko:"아이들은", t:"subj"},
        {en:"love", ko:"사랑한다", t:"verb"},
        {en:"music", ko:"음악을", t:"obj"}]},
      {n:26, full:"한 지도자가 보여준다 그 팀에게 한 계획을", chunks:[
        {en:"A leader", ko:"한 지도자가", t:"subj"},
        {en:"shows", ko:"보여준다", t:"verb"},
        {en:"the team", ko:"그 팀에게", t:"obj"},
        {en:"a plan", ko:"한 계획을", t:"obj"}]},
      {n:27, full:"그 군중이 반응한다", chunks:[
        {en:"The crowd", ko:"그 군중이", t:"subj"},
        {en:"reacts", ko:"반응한다", t:"verb"}]},
      {n:28, full:"한 의사가 여긴다 그 연구를 익숙하다고", chunks:[
        {en:"A doctor", ko:"한 의사가", t:"subj"},
        {en:"finds", ko:"여긴다", t:"verb"},
        {en:"the research", ko:"그 연구를", t:"obj"},
        {en:"familiar", ko:"익숙하다고", t:"comp"}]},
      {n:29, full:"한 의사가 돕는다 그 환자를", chunks:[
        {en:"A doctor", ko:"한 의사가", t:"subj"},
        {en:"helps", ko:"돕는다", t:"verb"},
        {en:"the patient", ko:"그 환자를", t:"obj"}]},
      {n:30, full:"전문가들이 본다 그 군중이 반응하는 것을", chunks:[
        {en:"Experts", ko:"전문가들이", t:"subj"},
        {en:"see", ko:"본다", t:"verb"},
        {en:"the crowd", ko:"그 군중이", t:"obj"},
        {en:"react", ko:"반응하는 것을", t:"comp"}]},
      {n:31, full:"그 변화가 일어난다", chunks:[
        {en:"The change", ko:"그 변화가", t:"subj"},
        {en:"happens", ko:"일어난다", t:"verb"}]},
      {n:32, full:"전문가들이 연구한다 그 화학물질을", chunks:[
        {en:"Experts", ko:"전문가들이", t:"subj"},
        {en:"study", ko:"연구한다", t:"verb"},
        {en:"the chemical", ko:"그 화학물질을", t:"obj"}]},
      {n:33, full:"한 의사가 읽는다 그 책을 (부엌에서)", chunks:[
        {en:"A doctor", ko:"한 의사가", t:"subj"},
        {en:"reads", ko:"읽는다", t:"verb"},
        {en:"the book", ko:"그 책을", t:"obj"},
        {en:"in the kitchen", ko:"부엌에서", t:"mod"}]},
      {n:34, full:"그 계획은 준비된다 (그 팀에 의해)", chunks:[
        {en:"The plan", ko:"그 계획은", t:"subj"},
        {en:"is prepared", ko:"준비된다", t:"verb"},
        {en:"by the team", ko:"그 팀에 의해", t:"mod"}]},
      {n:35, full:"한 부모가 만들어준다 그 아이에게 한 끼 식사를", chunks:[
        {en:"A parent", ko:"한 부모가", t:"subj"},
        {en:"makes", ko:"만들어준다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"a meal", ko:"한 끼 식사를", t:"obj"}]},
      {n:36, full:"시민들은 싫어한다 그 전쟁을", chunks:[
        {en:"Citizens", ko:"시민들은", t:"subj"},
        {en:"hate", ko:"싫어한다", t:"verb"},
        {en:"the war", ko:"그 전쟁을", t:"obj"}]},
      {n:37, full:"편지 한 통이 보내진다 (그 아이에게) (한 부모에 의해)", chunks:[
        {en:"A letter", ko:"편지 한 통이", t:"subj"},
        {en:"is sent", ko:"보내진다", t:"verb"},
        {en:"to the child", ko:"그 아이에게", t:"mod"},
        {en:"by a parent", ko:"한 부모에 의해", t:"mod"}]},
      {n:38, full:"그 회원은 된다 지도자가", chunks:[
        {en:"The member", ko:"그 회원은", t:"subj"},
        {en:"becomes", ko:"된다", t:"verb"},
        {en:"a leader", ko:"지도자가", t:"comp"}]},
      {n:39, full:"그 답들은 다르다", chunks:[
        {en:"The answers", ko:"그 답들은", t:"subj"},
        {en:"differ", ko:"다르다", t:"verb"}]},
      {n:40, full:"의견은 다르다", chunks:[
        {en:"Opinions", ko:"의견은", t:"subj"},
        {en:"differ", ko:"다르다", t:"verb"}]},
      {n:41, full:"그 관객이 웃는다", chunks:[
        {en:"The audience", ko:"그 관객이", t:"subj"},
        {en:"laughs", ko:"웃는다", t:"verb"}]},
      {n:42, full:"사람들은 사랑한다 그 세계를", chunks:[
        {en:"People", ko:"사람들은", t:"subj"},
        {en:"love", ko:"사랑한다", t:"verb"},
        {en:"the world", ko:"그 세계를", t:"obj"}]},
      {n:43, full:"그 부엌들은 유지된다 따뜻하게 (사람들에 의해)", chunks:[
        {en:"The kitchens", ko:"그 부엌들은", t:"subj"},
        {en:"are kept", ko:"유지된다", t:"verb"},
        {en:"warm", ko:"따뜻하게", t:"comp"},
        {en:"by people", ko:"사람들에 의해", t:"mod"}]},
      {n:44, full:"그 아이는 보인다 자랑스럽게", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"looks", ko:"보인다", t:"verb"},
        {en:"proud", ko:"자랑스럽게", t:"comp"}]},
      {n:45, full:"우리는 돕는다 그 아이가 서도록", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"help", ko:"돕는다", t:"verb"},
        {en:"the child", ko:"그 아이가", t:"obj"},
        {en:"stand", ko:"서도록", t:"comp"}]},
      {n:46, full:"아이들은 배운다 역사를 (한 전문가에게)", chunks:[
        {en:"Children", ko:"아이들은", t:"subj"},
        {en:"are taught", ko:"배운다", t:"verb"},
        {en:"history", ko:"역사를", t:"obj"},
        {en:"by an expert", ko:"한 전문가에게", t:"mod"}]},
      {n:47, full:"그 환자는 받는다 물을 (한 의사에게)", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"is given", ko:"받는다", t:"verb"},
        {en:"water", ko:"물을", t:"obj"},
        {en:"by a doctor", ko:"한 의사에게", t:"mod"}]},
      {n:48, full:"한 의사가 요청한다 그 환자에게 은퇴하라고", chunks:[
        {en:"A doctor", ko:"한 의사가", t:"subj"},
        {en:"asks", ko:"요청한다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"to retire", ko:"은퇴하라고", t:"comp"}]},
      {n:49, full:"그 비가 내린다 (해변에)", chunks:[
        {en:"The rain", ko:"그 비가", t:"subj"},
        {en:"falls", ko:"내린다", t:"verb"},
        {en:"at the beach", ko:"해변에", t:"mod"}]},
      {n:50, full:"한 의사가 찾아준다 그 아이에게 책 한 권을", chunks:[
        {en:"A doctor", ko:"한 의사가", t:"subj"},
        {en:"finds", ko:"찾아준다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"a book", ko:"책 한 권을", t:"obj"}]},
      {n:51, full:"그 아이는 받는다 편지 한 통을 (한 부모에게)", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"is sent", ko:"받는다", t:"verb"},
        {en:"a letter", ko:"편지 한 통을", t:"obj"},
        {en:"by a parent", ko:"한 부모에게", t:"mod"}]},
      {n:52, full:"그 군중들은 보인다 반응하는 것이 (전문가들에게)", chunks:[
        {en:"The crowds", ko:"그 군중들은", t:"subj"},
        {en:"are seen", ko:"보인다", t:"verb"},
        {en:"to react", ko:"반응하는 것이", t:"comp"},
        {en:"by experts", ko:"전문가들에게", t:"mod"}]},
      {n:53, full:"그 무리들은 하게 된다 동의하도록 (한 지도자에 의해)", chunks:[
        {en:"The groups", ko:"그 무리들은", t:"subj"},
        {en:"are made", ko:"하게 된다", t:"verb"},
        {en:"to agree", ko:"동의하도록", t:"comp"},
        {en:"by a leader", ko:"한 지도자에 의해", t:"mod"}]},
      {n:54, full:"한 전문가가 가르친다 아이들에게 역사를", chunks:[
        {en:"An expert", ko:"한 전문가가", t:"subj"},
        {en:"teaches", ko:"가르친다", t:"verb"},
        {en:"children", ko:"아이들에게", t:"obj"},
        {en:"history", ko:"역사를", t:"obj"}]},
      {n:55, full:"한 지도자가 차지한다 그 자리를", chunks:[
        {en:"A leader", ko:"한 지도자가", t:"subj"},
        {en:"takes", ko:"차지한다", t:"verb"},
        {en:"the seat", ko:"그 자리를", t:"obj"}]},
      {n:56, full:"그 환자는 요청받는다 은퇴하라고 (한 의사에게)", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"is asked", ko:"요청받는다", t:"verb"},
        {en:"to retire", ko:"은퇴하라고", t:"comp"},
        {en:"by a doctor", ko:"한 의사에게", t:"mod"}]},
      {n:57, full:"그 회원들은 받아 본다 한 계획을 (한 지도자에게)", chunks:[
        {en:"The members", ko:"그 회원들은", t:"subj"},
        {en:"are shown", ko:"받아 본다", t:"verb"},
        {en:"a plan", ko:"한 계획을", t:"obj"},
        {en:"by a leader", ko:"한 지도자에게", t:"mod"}]},
      {n:58, full:"그 회원은 임명된다 지도자로 (그 팀에 의해)", chunks:[
        {en:"The member", ko:"그 회원은", t:"subj"},
        {en:"is named", ko:"임명된다", t:"verb"},
        {en:"leader", ko:"지도자로", t:"comp"},
        {en:"by the team", ko:"그 팀에 의해", t:"mod"}]},
      {n:59, full:"그 경찰은 듣는다 떠나라고 (한 지도자에게)", chunks:[
        {en:"The police", ko:"그 경찰은", t:"subj"},
        {en:"are told", ko:"듣는다", t:"verb"},
        {en:"to leave", ko:"떠나라고", t:"comp"},
        {en:"by a leader", ko:"한 지도자에게", t:"mod"}]},
      {n:60, full:"책들이 찾아진다 (그 아이들을 위해) (한 의사에 의해)", chunks:[
        {en:"Books", ko:"책들이", t:"subj"},
        {en:"are found", ko:"찾아진다", t:"verb"},
        {en:"for the children", ko:"그 아이들을 위해", t:"mod"},
        {en:"by a doctor", ko:"한 의사에 의해", t:"mod"}]},
      {n:61, full:"한 의사가 준다 그 환자에게 물을", chunks:[
        {en:"A doctor", ko:"한 의사가", t:"subj"},
        {en:"gives", ko:"준다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"water", ko:"물을", t:"obj"}]},
      {n:62, full:"사람들은 부른다 그 스타를 영웅이라고", chunks:[
        {en:"People", ko:"사람들은", t:"subj"},
        {en:"name", ko:"부른다", t:"verb"},
        {en:"the star", ko:"그 스타를", t:"obj"},
        {en:"a hero", ko:"영웅이라고", t:"comp"}]},
      {n:63, full:"그 스타는 이다 영웅", chunks:[
        {en:"The star", ko:"그 스타는", t:"subj"},
        {en:"is", ko:"이다", t:"verb"},
        {en:"a hero", ko:"영웅", t:"comp"}]},
      {n:64, full:"한 비평가가 보여준다 사람들에게 그 영화를", chunks:[
        {en:"A critic", ko:"한 비평가가", t:"subj"},
        {en:"shows", ko:"보여준다", t:"verb"},
        {en:"people", ko:"사람들에게", t:"obj"},
        {en:"the movie", ko:"그 영화를", t:"obj"}]},
      {n:65, full:"그 자리들은 차지된다 (그 손님에 의해)", chunks:[
        {en:"The seats", ko:"그 자리들은", t:"subj"},
        {en:"are taken", ko:"차지된다", t:"verb"},
        {en:"by the guest", ko:"그 손님에 의해", t:"mod"}]},
      {n:66, full:"그 물은 이다 따뜻하다", chunks:[
        {en:"The water", ko:"그 물은", t:"subj"},
        {en:"is", ko:"이다", t:"verb"},
        {en:"warm", ko:"따뜻하다", t:"comp"}]},
      {n:67, full:"그 그림들은 그려진다 (한 아이에 의해)", chunks:[
        {en:"The pictures", ko:"그 그림들은", t:"subj"},
        {en:"are drawn", ko:"그려진다", t:"verb"},
        {en:"by a child", ko:"한 아이에 의해", t:"mod"}]},
      {n:68, full:"한 친구가 빌려준다 그 손님에게 돈을", chunks:[
        {en:"A friend", ko:"한 친구가", t:"subj"},
        {en:"lends", ko:"빌려준다", t:"verb"},
        {en:"the guest", ko:"그 손님에게", t:"obj"},
        {en:"money", ko:"돈을", t:"obj"}]},
      {n:69, full:"그 영화는 불린다 성공작이라고 (한 비평가에게)", chunks:[
        {en:"The movie", ko:"그 영화는", t:"subj"},
        {en:"is called", ko:"불린다", t:"verb"},
        {en:"a success", ko:"성공작이라고", t:"comp"},
        {en:"by a critic", ko:"한 비평가에게", t:"mod"}]},
      {n:70, full:"그 영화들은 관람된다 (사람들에 의해)", chunks:[
        {en:"The movies", ko:"그 영화들은", t:"subj"},
        {en:"are watched", ko:"관람된다", t:"verb"},
        {en:"by people", ko:"사람들에 의해", t:"mod"}]},
      {n:71, full:"사람들은 유지한다 그 물을 따뜻하게", chunks:[
        {en:"People", ko:"사람들은", t:"subj"},
        {en:"keep", ko:"유지한다", t:"verb"},
        {en:"the water", ko:"그 물을", t:"obj"},
        {en:"warm", ko:"따뜻하게", t:"comp"}]},
      {n:72, full:"한 부모가 보내준다 그 아이에게 편지 한 통을", chunks:[
        {en:"A parent", ko:"한 부모가", t:"subj"},
        {en:"sends", ko:"보내준다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"a letter", ko:"편지 한 통을", t:"obj"}]},
      {n:73, full:"그 아기는 하게 된다 웃도록 (한 부모에 의해)", chunks:[
        {en:"The baby", ko:"그 아기는", t:"subj"},
        {en:"is made", ko:"하게 된다", t:"verb"},
        {en:"to laugh", ko:"웃도록", t:"comp"},
        {en:"by a parent", ko:"한 부모에 의해", t:"mod"}]},
      {n:74, full:"식사가 요리된다 (그 손님들을 위해) (한 부모에 의해)", chunks:[
        {en:"Meals", ko:"식사가", t:"subj"},
        {en:"are cooked", ko:"요리된다", t:"verb"},
        {en:"for the guests", ko:"그 손님들을 위해", t:"mod"},
        {en:"by a parent", ko:"한 부모에 의해", t:"mod"}]},
      {n:75, full:"그 여왕은 된다 지도자가", chunks:[
        {en:"The queen", ko:"그 여왕은", t:"subj"},
        {en:"becomes", ko:"된다", t:"verb"},
        {en:"a leader", ko:"지도자가", t:"comp"}]},
      {n:76, full:"노래 한 곡이 불린다 (사람들에게) (한 비평가에 의해)", chunks:[
        {en:"A song", ko:"노래 한 곡이", t:"subj"},
        {en:"is sung", ko:"불린다", t:"verb"},
        {en:"to the people", ko:"사람들에게", t:"mod"},
        {en:"by a critic", ko:"한 비평가에 의해", t:"mod"}]},
      {n:77, full:"그 영화는 들린다 꿈처럼", chunks:[
        {en:"The movie", ko:"그 영화는", t:"subj"},
        {en:"sounds", ko:"들린다", t:"verb"},
        {en:"like a dream", ko:"꿈처럼", t:"comp"}]},
      {n:78, full:"한 계획이 보여진다 (그 회원들에게) (한 지도자에 의해)", chunks:[
        {en:"A plan", ko:"한 계획이", t:"subj"},
        {en:"is shown", ko:"보여진다", t:"verb"},
        {en:"to the members", ko:"그 회원들에게", t:"mod"},
        {en:"by a leader", ko:"한 지도자에 의해", t:"mod"}]},
      {n:79, full:"그 회원들은 초대받는다 합류하라고 (한 비평가에게)", chunks:[
        {en:"The members", ko:"그 회원들은", t:"subj"},
        {en:"are invited", ko:"초대받는다", t:"verb"},
        {en:"to join", ko:"합류하라고", t:"comp"},
        {en:"by a critic", ko:"한 비평가에게", t:"mod"}]},
      {n:80, full:"방식은 다양하다", chunks:[
        {en:"Styles", ko:"방식은", t:"subj"},
        {en:"vary", ko:"다양하다", t:"verb"}]},
      {n:81, full:"그 편지들은 쓰여진다 (한 회원에 의해)", chunks:[
        {en:"The letters", ko:"그 편지들은", t:"subj"},
        {en:"are written", ko:"쓰여진다", t:"verb"},
        {en:"by a member", ko:"한 회원에 의해", t:"mod"}]},
      {n:82, full:"그 회원들은 뽑힌다 지도자로 (시민들에 의해)", chunks:[
        {en:"The members", ko:"그 회원들은", t:"subj"},
        {en:"are elected", ko:"뽑힌다", t:"verb"},
        {en:"leaders", ko:"지도자로", t:"comp"},
        {en:"by citizens", ko:"시민들에 의해", t:"mod"}]},
      {n:83, full:"그 날씨는 변한다 차갑게", chunks:[
        {en:"The weather", ko:"그 날씨는", t:"subj"},
        {en:"turns", ko:"변한다", t:"verb"},
        {en:"cold", ko:"차갑게", t:"comp"}]},
      {n:84, full:"사람들은 싫어한다 그 전쟁을", chunks:[
        {en:"People", ko:"사람들은", t:"subj"},
        {en:"hate", ko:"싫어한다", t:"verb"},
        {en:"the war", ko:"그 전쟁을", t:"obj"}]},
      {n:85, full:"그 식사들은 요리된다 (한 부모에 의해)", chunks:[
        {en:"The meals", ko:"그 식사들은", t:"subj"},
        {en:"are cooked", ko:"요리된다", t:"verb"},
        {en:"by a parent", ko:"한 부모에 의해", t:"mod"}]},
      {n:86, full:"그 지도자는 보인다 의사처럼", chunks:[
        {en:"The leader", ko:"그 지도자는", t:"subj"},
        {en:"looks", ko:"보인다", t:"verb"},
        {en:"like a doctor", ko:"의사처럼", t:"comp"}]},
      {n:87, full:"그 아기가 잔다 (부엌에서)", chunks:[
        {en:"The baby", ko:"그 아기가", t:"subj"},
        {en:"sleeps", ko:"잔다", t:"verb"},
        {en:"in the kitchen", ko:"부엌에서", t:"mod"}]},
      {n:88, full:"한 전문가가 부탁한다 그 아이에게 부탁 하나를", chunks:[
        {en:"An expert", ko:"한 전문가가", t:"subj"},
        {en:"asks", ko:"부탁한다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"a favor", ko:"부탁 하나를", t:"obj"}]},
      {n:89, full:"그 화학물질은 냄새가 난다 소금처럼", chunks:[
        {en:"The chemical", ko:"그 화학물질은", t:"subj"},
        {en:"smells", ko:"냄새가 난다", t:"verb"},
        {en:"like salt", ko:"소금처럼", t:"comp"}]},
      {n:90, full:"한 아이가 그린다 그림 한 장을 (해변에서)", chunks:[
        {en:"A child", ko:"한 아이가", t:"subj"},
        {en:"draws", ko:"그린다", t:"verb"},
        {en:"a picture", ko:"그림 한 장을", t:"obj"},
        {en:"at the beach", ko:"해변에서", t:"mod"}]},
      {n:91, full:"전문가들이 만든다 그 군중을 멈추게", chunks:[
        {en:"Experts", ko:"전문가들이", t:"subj"},
        {en:"force", ko:"만든다", t:"verb"},
        {en:"the crowd", ko:"그 군중을", t:"obj"},
        {en:"to pause", ko:"멈추게", t:"comp"}]},
      {n:92, full:"그 문은 열린다 (한 의사에 의해)", chunks:[
        {en:"The door", ko:"그 문은", t:"subj"},
        {en:"is opened", ko:"열린다", t:"verb"},
        {en:"by a doctor", ko:"한 의사에 의해", t:"mod"}]},
      {n:93, full:"한 비평가가 권한다 그 회원에게 대답하라고", chunks:[
        {en:"A critic", ko:"한 비평가가", t:"subj"},
        {en:"advises", ko:"권한다", t:"verb"},
        {en:"the member", ko:"그 회원에게", t:"obj"},
        {en:"to respond", ko:"대답하라고", t:"comp"}]},
      {n:94, full:"물이 주어진다 (그 환자에게) (한 의사에 의해)", chunks:[
        {en:"Water", ko:"물이", t:"subj"},
        {en:"is given", ko:"주어진다", t:"verb"},
        {en:"to the patient", ko:"그 환자에게", t:"mod"},
        {en:"by a doctor", ko:"한 의사에 의해", t:"mod"}]},
      {n:95, full:"역사가 가르쳐진다 (아이들에게) (한 전문가에 의해)", chunks:[
        {en:"History", ko:"역사가", t:"subj"},
        {en:"is taught", ko:"가르쳐진다", t:"verb"},
        {en:"to children", ko:"아이들에게", t:"mod"},
        {en:"by an expert", ko:"한 전문가에 의해", t:"mod"}]},
      {n:96, full:"그 미소는 이다 밝다", chunks:[
        {en:"The smile", ko:"그 미소는", t:"subj"},
        {en:"is", ko:"이다", t:"verb"},
        {en:"bright", ko:"밝다", t:"comp"}]},
      {n:97, full:"그 계획들은 여겨진다 새롭다고 (전문가들에게)", chunks:[
        {en:"The projects", ko:"그 계획들은", t:"subj"},
        {en:"are considered", ko:"여겨진다", t:"verb"},
        {en:"new", ko:"새롭다고", t:"comp"},
        {en:"by experts", ko:"전문가들에게", t:"mod"}]},
      {n:98, full:"한 의사가 묻는다 그 환자에게 질문 하나를", chunks:[
        {en:"A doctor", ko:"한 의사가", t:"subj"},
        {en:"asks", ko:"묻는다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"a question", ko:"질문 하나를", t:"obj"}]},
      {n:99, full:"그 경기들은 승리한다 (그 팀에 의해)", chunks:[
        {en:"The games", ko:"그 경기들은", t:"subj"},
        {en:"are won", ko:"승리한다", t:"verb"},
        {en:"by the team", ko:"그 팀에 의해", t:"mod"}]},
      {n:100, full:"그 질문은 답해진다 (한 지도자에 의해)", chunks:[
        {en:"The question", ko:"그 질문은", t:"subj"},
        {en:"is answered", ko:"답해진다", t:"verb"},
        {en:"by a leader", ko:"한 지도자에 의해", t:"mod"}]},
    ]},
    { id:"기본 시제", items:[
      {n:1, full:"나의 아버지는 타곤 했다 자전거를 (사무실로) (오래전에)", chunks:[
        {en:"My father", ko:"나의 아버지는", t:"subj"},
        {en:"would ride", ko:"타곤 했다", t:"verb"},
        {en:"a bike", ko:"자전거를", t:"obj"},
        {en:"to the office", ko:"사무실로", t:"mod"},
        {en:"long ago", ko:"오래전에", t:"mod"}]},
      {n:2, full:"시인들은 거닐곤 했다 (강가를) (휴일마다)", chunks:[
        {en:"Poets", ko:"시인들은", t:"subj"},
        {en:"would wander", ko:"거닐곤 했다", t:"verb"},
        {en:"by the river", ko:"강가를", t:"mod"},
        {en:"every holiday", ko:"휴일마다", t:"mod"}]},
      {n:3, full:"그 팀은 경기하곤 했다 (주말마다)", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"would compete", ko:"경기하곤 했다", t:"verb"},
        {en:"every weekend", ko:"주말마다", t:"mod"}]},
      {n:4, full:"나의 형은 자주 어기곤 했다 그의 약속을", chunks:[
        {en:"My brother", ko:"나의 형은", t:"subj"},
        {en:"would often break", ko:"자주 어기곤 했다", t:"verb"},
        {en:"his promise", ko:"그의 약속을", t:"obj"}]},
      {n:5, full:"나의 어머니는 가져다주곤 했다 그 손님들에게 한 끼 식사를", chunks:[
        {en:"My mother", ko:"나의 어머니는", t:"subj"},
        {en:"would bring", ko:"가져다주곤 했다", t:"verb"},
        {en:"the guests", ko:"그 손님들에게", t:"obj"},
        {en:"a meal", ko:"한 끼 식사를", t:"obj"}]},
      {n:6, full:"나는 가지고 있었다 독서하는 습관을 (밤에)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"used to have", ko:"가지고 있었다", t:"verb"},
        {en:"a habit of reading", ko:"독서하는 습관을", t:"obj"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:7, full:"이 거리는 였다 조용한 곳", chunks:[
        {en:"This street", ko:"이 거리는", t:"subj"},
        {en:"used to be", ko:"였다", t:"verb"},
        {en:"quiet", ko:"조용한 곳", t:"comp"}]},
      {n:8, full:"그 의사는 일했었다 (공항에서)", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"used to work", ko:"일했었다", t:"verb"},
        {en:"at the airport", ko:"공항에서", t:"mod"}]},
      {n:9, full:"나의 아버지는 계획하곤 했다 가족 휴가를", chunks:[
        {en:"My father", ko:"나의 아버지는", t:"subj"},
        {en:"used to plan", ko:"계획하곤 했다", t:"verb"},
        {en:"the family vacation", ko:"가족 휴가를", t:"obj"}]},
      {n:10, full:"나의 가족은 여행하곤 했다 (바다로) (휴가마다)", chunks:[
        {en:"My family", ko:"나의 가족은", t:"subj"},
        {en:"used to travel", ko:"여행하곤 했다", t:"verb"},
        {en:"to the sea", ko:"바다로", t:"mod"},
        {en:"every vacation", ko:"휴가마다", t:"mod"}]},
      {n:11, full:"그 시장들은 열렸었다 (한 달에 한 번)", chunks:[
        {en:"The markets", ko:"그 시장들은", t:"subj"},
        {en:"used to open", ko:"열렸었다", t:"verb"},
        {en:"once a month", ko:"한 달에 한 번", t:"mod"}]},
      {n:12, full:"그 기차는 섰었다 (이 역에)", chunks:[
        {en:"The train", ko:"그 기차는", t:"subj"},
        {en:"used to stop", ko:"섰었다", t:"verb"},
        {en:"at this station", ko:"이 역에", t:"mod"}]},
      {n:13, full:"그 항공편들이 도착했다 (늦게) (어제)", chunks:[
        {en:"The flights", ko:"그 항공편들이", t:"subj"},
        {en:"arrived", ko:"도착했다", t:"verb"},
        {en:"late", ko:"늦게", t:"mod"},
        {en:"yesterday", ko:"어제", t:"mod"}]},
      {n:14, full:"그 관객이 떠났다 그 방을 (한 시간 전에)", chunks:[
        {en:"The audience", ko:"그 관객이", t:"subj"},
        {en:"left", ko:"떠났다", t:"verb"},
        {en:"the room", ko:"그 방을", t:"obj"},
        {en:"an hour ago", ko:"한 시간 전에", t:"mod"}]},
      {n:15, full:"나는 샀다 그 표를 (한 달 전에)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"bought", ko:"샀다", t:"verb"},
        {en:"the ticket", ko:"그 표를", t:"obj"},
        {en:"a month ago", ko:"한 달 전에", t:"mod"}]},
      {n:16, full:"그 비평가는 한때 일했다 (공항에서)", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"once worked", ko:"한때 일했다", t:"verb"},
        {en:"at the airport", ko:"공항에서", t:"mod"}]},
      {n:17, full:"그 날씨는 되었다 추워 (휴일 동안)", chunks:[
        {en:"The weather", ko:"그 날씨는", t:"subj"},
        {en:"became", ko:"되었다", t:"verb"},
        {en:"cold", ko:"추워", t:"comp"},
        {en:"during the holiday", ko:"휴일 동안", t:"mod"}]},
      {n:18, full:"그 시장은 되었다 조용해 (그 행사 후에)", chunks:[
        {en:"The market", ko:"그 시장은", t:"subj"},
        {en:"grew", ko:"되었다", t:"verb"},
        {en:"quiet", ko:"조용해", t:"comp"},
        {en:"after the event", ko:"그 행사 후에", t:"mod"}]},
      {n:19, full:"나의 아버지는 주었다 그 아이에게 표 한 장을 (어제)", chunks:[
        {en:"My father", ko:"나의 아버지는", t:"subj"},
        {en:"gave", ko:"주었다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"a ticket", ko:"표 한 장을", t:"obj"},
        {en:"yesterday", ko:"어제", t:"mod"}]},
      {n:20, full:"그 아이의 탄생은 만들었다 그 가족을 자랑스럽게", chunks:[
        {en:"The birth of the child", ko:"그 아이의 탄생은", t:"subj"},
        {en:"made", ko:"만들었다", t:"verb"},
        {en:"the family", ko:"그 가족을", t:"obj"},
        {en:"proud", ko:"자랑스럽게", t:"comp"}]},
      {n:21, full:"그 표들은 샀다 (한 달 전에)", chunks:[
        {en:"The tickets", ko:"그 표들은", t:"subj"},
        {en:"were bought", ko:"샀다", t:"verb"},
        {en:"a month ago", ko:"한 달 전에", t:"mod"}]},
      {n:22, full:"그 행사는 열렸다 (학교에서) (그 휴일에)", chunks:[
        {en:"The event", ko:"그 행사는", t:"subj"},
        {en:"was held", ko:"열렸다", t:"verb"},
        {en:"at the school", ko:"학교에서", t:"mod"},
        {en:"on the holiday", ko:"그 휴일에", t:"mod"}]},
      {n:23, full:"그 손님들은 받았다 일정표를 (어제)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"were sent", ko:"받았다", t:"verb"},
        {en:"a schedule", ko:"일정표를", t:"obj"},
        {en:"yesterday", ko:"어제", t:"mod"}]},
      {n:24, full:"표 한 장이 주어졌다 (모든 회원에게)", chunks:[
        {en:"A ticket", ko:"표 한 장이", t:"subj"},
        {en:"was given", ko:"주어졌다", t:"verb"},
        {en:"to every member", ko:"모든 회원에게", t:"mod"}]},
      {n:25, full:"그 시인은 불렸다 천재라고 (오래전에)", chunks:[
        {en:"The poet", ko:"그 시인은", t:"subj"},
        {en:"was called", ko:"불렸다", t:"verb"},
        {en:"a genius", ko:"천재라고", t:"comp"},
        {en:"long ago", ko:"오래전에", t:"mod"}]},
      {n:26, full:"그 도로는 유지되었다 깨끗하게 (그 행사 동안)", chunks:[
        {en:"The road", ko:"그 도로는", t:"subj"},
        {en:"was kept", ko:"유지되었다", t:"verb"},
        {en:"clean", ko:"깨끗하게", t:"comp"},
        {en:"during the event", ko:"그 행사 동안", t:"mod"}]},
      {n:27, full:"강물은 흘러간다 (바다로)", chunks:[
        {en:"The river", ko:"강물은", t:"subj"},
        {en:"runs", ko:"흘러간다", t:"verb"},
        {en:"to the sea", ko:"바다로", t:"mod"}]},
      {n:28, full:"별들은 나타난다 (밤하늘에)", chunks:[
        {en:"Stars", ko:"별들은", t:"subj"},
        {en:"appear", ko:"나타난다", t:"verb"},
        {en:"in the night sky", ko:"밤하늘에", t:"mod"}]},
      {n:29, full:"물은 된다 얼음이 (추운 날씨에는)", chunks:[
        {en:"Water", ko:"물은", t:"subj"},
        {en:"becomes", ko:"된다", t:"verb"},
        {en:"ice", ko:"얼음이", t:"comp"},
        {en:"in cold weather", ko:"추운 날씨에는", t:"mod"}]},
      {n:30, full:"날씨는 바뀐다 (계절에 따라)", chunks:[
        {en:"The weather", ko:"날씨는", t:"subj"},
        {en:"changes", ko:"바뀐다", t:"verb"},
        {en:"with the season", ko:"계절에 따라", t:"mod"}]},
      {n:31, full:"가격은 항상 오른다 (시장에서)", chunks:[
        {en:"Prices", ko:"가격은", t:"subj"},
        {en:"always increase", ko:"항상 오른다", t:"verb"},
        {en:"in the market", ko:"시장에서", t:"mod"}]},
      {n:32, full:"기억력은 자주 쇠퇴한다 (나이가 들면서)", chunks:[
        {en:"Memory", ko:"기억력은", t:"subj"},
        {en:"often fails", ko:"자주 쇠퇴한다", t:"verb"},
        {en:"with age", ko:"나이가 들면서", t:"mod"}]},
      {n:33, full:"그 공항은 된다 붐비게 (휴일마다)", chunks:[
        {en:"The airport", ko:"그 공항은", t:"subj"},
        {en:"becomes", ko:"된다", t:"verb"},
        {en:"busy", ko:"붐비게", t:"comp"},
        {en:"every holiday", ko:"휴일마다", t:"mod"}]},
      {n:34, full:"회사들은 바꾼다 기차 시간표를 (계절마다)", chunks:[
        {en:"Companies", ko:"회사들은", t:"subj"},
        {en:"change", ko:"바꾼다", t:"verb"},
        {en:"the train schedule", ko:"기차 시간표를", t:"obj"},
        {en:"every season", ko:"계절마다", t:"mod"}]},
      {n:35, full:"사람들은 자주 유지한다 오래된 습관을", chunks:[
        {en:"People", ko:"사람들은", t:"subj"},
        {en:"often keep", ko:"자주 유지한다", t:"verb"},
        {en:"old habits", ko:"오래된 습관을", t:"obj"}]},
      {n:36, full:"그 회사는 준다 모든 회원에게 일정표를", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"gives", ko:"준다", t:"verb"},
        {en:"every member", ko:"모든 회원에게", t:"obj"},
        {en:"a schedule", ko:"일정표를", t:"obj"}]},
      {n:37, full:"나이는 자주 만든다 사람들을 조용하게", chunks:[
        {en:"Age", ko:"나이는", t:"subj"},
        {en:"often makes", ko:"자주 만든다", t:"verb"},
        {en:"people", ko:"사람들을", t:"obj"},
        {en:"quiet", ko:"조용하게", t:"comp"}]},
      {n:38, full:"사람들은 자주 잊는다 과거를", chunks:[
        {en:"People", ko:"사람들은", t:"subj"},
        {en:"often forget", ko:"자주 잊는다", t:"verb"},
        {en:"the past", ko:"과거를", t:"obj"}]},
      {n:39, full:"시인들은 글을 쓴다 (과거에 대해)", chunks:[
        {en:"Poets", ko:"시인들은", t:"subj"},
        {en:"write", ko:"글을 쓴다", t:"verb"},
        {en:"about the past", ko:"과거에 대해", t:"mod"}]},
      {n:40, full:"나의 어머니는 기억한다 그녀의 아이의 탄생을", chunks:[
        {en:"My mother", ko:"나의 어머니는", t:"subj"},
        {en:"remembers", ko:"기억한다", t:"verb"},
        {en:"the birth of her child", ko:"그녀의 아이의 탄생을", t:"obj"}]},
      {n:41, full:"그 일정표들은 바뀐다 (계절마다)", chunks:[
        {en:"The schedules", ko:"그 일정표들은", t:"subj"},
        {en:"are changed", ko:"바뀐다", t:"verb"},
        {en:"every season", ko:"계절마다", t:"mod"}]},
      {n:42, full:"표는 팔린다 (역에서)", chunks:[
        {en:"Tickets", ko:"표는", t:"subj"},
        {en:"are sold", ko:"팔린다", t:"verb"},
        {en:"at the station", ko:"역에서", t:"mod"}]},
      {n:43, full:"모든 손님은 받는다 표 한 장을 (공항에서)", chunks:[
        {en:"Every guest", ko:"모든 손님은", t:"subj"},
        {en:"is given", ko:"받는다", t:"verb"},
        {en:"a ticket", ko:"표 한 장을", t:"obj"},
        {en:"at the airport", ko:"공항에서", t:"mod"}]},
      {n:44, full:"그 의사는 불린다 영웅이라고", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"is called", ko:"불린다", t:"verb"},
        {en:"a hero", ko:"영웅이라고", t:"comp"}]},
      {n:45, full:"그 환자들은 항상 유지된다 차분하게 (의사들에 의해)", chunks:[
        {en:"The patients", ko:"그 환자들은", t:"subj"},
        {en:"are always kept", ko:"항상 유지된다", t:"verb"},
        {en:"calm", ko:"차분하게", t:"comp"},
        {en:"by the doctors", ko:"의사들에 의해", t:"mod"}]},
      {n:46, full:"그 기차는 도착한다 (역에) (오늘 밤)", chunks:[
        {en:"The train", ko:"그 기차는", t:"subj"},
        {en:"arrives", ko:"도착한다", t:"verb"},
        {en:"at the station", ko:"역에", t:"mod"},
        {en:"tonight", ko:"오늘 밤", t:"mod"}]},
      {n:47, full:"나의 항공편은 떠난다 (내일)", chunks:[
        {en:"My flight", ko:"나의 항공편은", t:"subj"},
        {en:"leaves", ko:"떠난다", t:"verb"},
        {en:"tomorrow", ko:"내일", t:"mod"}]},
      {n:48, full:"그 손님들은 도착한다 (공항에) (곧)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"arrive", ko:"도착한다", t:"verb"},
        {en:"at the airport", ko:"공항에", t:"mod"},
        {en:"soon", ko:"곧", t:"mod"}]},
      {n:49, full:"그 비평가는 돌아온다 (그 도시에서) (곧)", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"returns", ko:"돌아온다", t:"verb"},
        {en:"from the city", ko:"그 도시에서", t:"mod"},
        {en:"soon", ko:"곧", t:"mod"}]},
      {n:50, full:"나의 가족은 비행기로 간다 (그 도시로) (다음 주말에)", chunks:[
        {en:"My family", ko:"나의 가족은", t:"subj"},
        {en:"flies", ko:"비행기로 간다", t:"verb"},
        {en:"to the city", ko:"그 도시로", t:"mod"},
        {en:"next weekend", ko:"다음 주말에", t:"mod"}]},
      {n:51, full:"그 의사들은 출발한다 (병원으로) (오늘 밤)", chunks:[
        {en:"The doctors", ko:"그 의사들은", t:"subj"},
        {en:"depart", ko:"출발한다", t:"verb"},
        {en:"for the hospital", ko:"병원으로", t:"mod"},
        {en:"tonight", ko:"오늘 밤", t:"mod"}]},
      {n:52, full:"우리는 탑승한다 그 비행기에 (한 시간 뒤에)", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"board", ko:"탑승한다", t:"verb"},
        {en:"the plane", ko:"그 비행기에", t:"obj"},
        {en:"in an hour", ko:"한 시간 뒤에", t:"mod"}]},
      {n:53, full:"가격은 떨어질 것이다 (그 계절 후반에)", chunks:[
        {en:"Prices", ko:"가격은", t:"subj"},
        {en:"will fall", ko:"떨어질 것이다", t:"verb"},
        {en:"late in the season", ko:"그 계절 후반에", t:"mod"}]},
      {n:54, full:"그 날씨는 변할 것이다 춥게 (오늘 밤)", chunks:[
        {en:"The weather", ko:"그 날씨는", t:"subj"},
        {en:"will turn", ko:"변할 것이다", t:"verb"},
        {en:"cold", ko:"춥게", t:"comp"},
        {en:"tonight", ko:"오늘 밤", t:"mod"}]},
      {n:55, full:"그 비평가는 볼 것이다 그 영화를 (내일)", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"will watch", ko:"볼 것이다", t:"verb"},
        {en:"the movie", ko:"그 영화를", t:"obj"},
        {en:"tomorrow", ko:"내일", t:"mod"}]},
      {n:56, full:"나는 탈 것이다 그 자전거를 (역까지) (내일)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"will ride", ko:"탈 것이다", t:"verb"},
        {en:"the bike", ko:"그 자전거를", t:"obj"},
        {en:"to the station", ko:"역까지", t:"mod"},
        {en:"tomorrow", ko:"내일", t:"mod"}]},
      {n:57, full:"그 지도자는 줄 것이다 그 팀에게 답을 (내일)", chunks:[
        {en:"The leader", ko:"그 지도자는", t:"subj"},
        {en:"will give", ko:"줄 것이다", t:"verb"},
        {en:"the team", ko:"그 팀에게", t:"obj"},
        {en:"an answer", ko:"답을", t:"obj"},
        {en:"tomorrow", ko:"내일", t:"mod"}]},
      {n:58, full:"그 행사는 만들 것이다 그 도시를 붐비게 (다음 주말에)", chunks:[
        {en:"The event", ko:"그 행사는", t:"subj"},
        {en:"will make", ko:"만들 것이다", t:"verb"},
        {en:"the city", ko:"그 도시를", t:"obj"},
        {en:"busy", ko:"붐비게", t:"comp"},
        {en:"next weekend", ko:"다음 주말에", t:"mod"}]},
      {n:59, full:"그 일정표는 바뀔 것이다 (내일)", chunks:[
        {en:"The schedule", ko:"그 일정표는", t:"subj"},
        {en:"will be changed", ko:"바뀔 것이다", t:"verb"},
        {en:"tomorrow", ko:"내일", t:"mod"}]},
      {n:60, full:"그 행사는 열릴 것이다 (다음 주말에)", chunks:[
        {en:"The event", ko:"그 행사는", t:"subj"},
        {en:"will be held", ko:"열릴 것이다", t:"verb"},
        {en:"next weekend", ko:"다음 주말에", t:"mod"}]},
      {n:61, full:"그 손님들은 받을 것이다 표 한 장을 (오늘 밤)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"will be given", ko:"받을 것이다", t:"verb"},
        {en:"a ticket", ko:"표 한 장을", t:"obj"},
        {en:"tonight", ko:"오늘 밤", t:"mod"}]},
      {n:62, full:"그 도로는 유지될 것이다 깨끗하게 (그 휴일 동안)", chunks:[
        {en:"The road", ko:"그 도로는", t:"subj"},
        {en:"will be kept", ko:"유지될 것이다", t:"verb"},
        {en:"clean", ko:"깨끗하게", t:"comp"},
        {en:"during the holiday", ko:"그 휴일 동안", t:"mod"}]},
      {n:63, full:"그 팀은 경기할 것이다 (다음 주말에)", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"is going to compete", ko:"경기할 것이다", t:"verb"},
        {en:"next weekend", ko:"다음 주말에", t:"mod"}]},
      {n:64, full:"나는 살 것이다 표 한 장을 (오늘 밤)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"am going to buy", ko:"살 것이다", t:"verb"},
        {en:"a ticket", ko:"표 한 장을", t:"obj"},
        {en:"tonight", ko:"오늘 밤", t:"mod"}]},
      {n:65, full:"나의 가족은 비행기로 갈 것이다 (그 도시로) (다음 달에)", chunks:[
        {en:"My family", ko:"나의 가족은", t:"subj"},
        {en:"is going to fly", ko:"비행기로 갈 것이다", t:"verb"},
        {en:"to the city", ko:"그 도시로", t:"mod"},
        {en:"next month", ko:"다음 달에", t:"mod"}]},
      {n:66, full:"그 서류는 보내질 것이다 (내일)", chunks:[
        {en:"The paper", ko:"그 서류는", t:"subj"},
        {en:"is going to be sent", ko:"보내질 것이다", t:"verb"},
        {en:"tomorrow", ko:"내일", t:"mod"}]},
      {n:67, full:"그 기차는 막 도착하려 한다", chunks:[
        {en:"The train", ko:"그 기차는", t:"subj"},
        {en:"is about to arrive", ko:"막 도착하려 한다", t:"verb"}]},
      {n:68, full:"그 시장들은 막 닫으려 한다", chunks:[
        {en:"The markets", ko:"그 시장들은", t:"subj"},
        {en:"are about to close", ko:"막 닫으려 한다", t:"verb"}]},
      {n:69, full:"그 손님들은 막 탑승하려 한다 그 항공편에", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"are about to board", ko:"막 탑승하려 한다", t:"verb"},
        {en:"the flight", ko:"그 항공편에", t:"obj"}]},
      {n:70, full:"그 행사는 막 열리려 한다", chunks:[
        {en:"The event", ko:"그 행사는", t:"subj"},
        {en:"is about to be held", ko:"막 열리려 한다", t:"verb"}]},
    ]},
    { id:"진행 시제", items:[
      {n:1, full:"눈이 내리고 있다 (지붕 위에)", chunks:[
        {en:"Snow", ko:"눈이", t:"subj"},
        {en:"is falling", ko:"내리고 있다", t:"verb"},
        {en:"on the roof", ko:"지붕 위에", t:"mod"}]},
      {n:2, full:"누군가가 두드리고 있다 (대문을)", chunks:[
        {en:"Someone", ko:"누군가가", t:"subj"},
        {en:"is knocking", ko:"두드리고 있다", t:"verb"},
        {en:"at the gate", ko:"대문을", t:"mod"}]},
      {n:3, full:"그 아이들은 헤엄치고 있다 (수영장에서)", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"are swimming", ko:"헤엄치고 있다", t:"verb"},
        {en:"in the pool", ko:"수영장에서", t:"mod"}]},
      {n:4, full:"그 개들이 뛰어들고 있다 (수영장 안으로)", chunks:[
        {en:"The dogs", ko:"그 개들이", t:"subj"},
        {en:"are jumping", ko:"뛰어들고 있다", t:"verb"},
        {en:"into the pool", ko:"수영장 안으로", t:"mod"}]},
      {n:5, full:"그 얼음이 녹고 있다 (따뜻한 물속에서)", chunks:[
        {en:"The ice", ko:"그 얼음이", t:"subj"},
        {en:"is melting", ko:"녹고 있다", t:"verb"},
        {en:"in the warm water", ko:"따뜻한 물속에서", t:"mod"}]},
      {n:6, full:"무대 위의 소음이 커지고 있다 크게", chunks:[
        {en:"The noise on the stage", ko:"무대 위의 소음이", t:"subj"},
        {en:"is growing", ko:"커지고 있다", t:"verb"},
        {en:"loud", ko:"크게", t:"comp"}]},
      {n:7, full:"하늘이 되어가고 있다 어둡게 (구름으로)", chunks:[
        {en:"The sky", ko:"하늘이", t:"subj"},
        {en:"is becoming", ko:"되어가고 있다", t:"verb"},
        {en:"dark", ko:"어둡게", t:"comp"},
        {en:"with clouds", ko:"구름으로", t:"mod"}]},
      {n:8, full:"그 물이 변하고 있다 차갑게 (지금)", chunks:[
        {en:"The water", ko:"그 물이", t:"subj"},
        {en:"is turning", ko:"변하고 있다", t:"verb"},
        {en:"cold", ko:"차갑게", t:"comp"},
        {en:"now", ko:"지금", t:"mod"}]},
      {n:9, full:"그 소년들이 오르고 있다 (지붕 위로)", chunks:[
        {en:"The boys", ko:"그 소년들이", t:"subj"},
        {en:"are climbing", ko:"오르고 있다", t:"verb"},
        {en:"onto the roof", ko:"지붕 위로", t:"mod"}]},
      {n:10, full:"그 요리사들이 굽고 있다 음식을 (부엌에서)", chunks:[
        {en:"The cooks", ko:"그 요리사들이", t:"subj"},
        {en:"are baking", ko:"굽고 있다", t:"verb"},
        {en:"food", ko:"음식을", t:"obj"},
        {en:"in the kitchen", ko:"부엌에서", t:"mod"}]},
      {n:11, full:"군중 속 사람들이 흔들고 있다 그들의 손을 (무대를 향해)", chunks:[
        {en:"People in the crowd", ko:"군중 속 사람들이", t:"subj"},
        {en:"are waving", ko:"흔들고 있다", t:"verb"},
        {en:"their hands", ko:"그들의 손을", t:"obj"},
        {en:"at the stage", ko:"무대를 향해", t:"mod"}]},
      {n:12, full:"바람이 흔들고 있다 그 창문을", chunks:[
        {en:"The wind", ko:"바람이", t:"subj"},
        {en:"is shaking", ko:"흔들고 있다", t:"verb"},
        {en:"the window", ko:"그 창문을", t:"obj"}]},
      {n:13, full:"나의 어머니는 주고 있다 그 아이에게 우유를 (지금 이 순간)", chunks:[
        {en:"My mother", ko:"나의 어머니는", t:"subj"},
        {en:"is giving", ko:"주고 있다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"milk", ko:"우유를", t:"obj"},
        {en:"at this moment", ko:"지금 이 순간", t:"mod"}]},
      {n:14, full:"그 폭풍이 만들고 있다 그 도로를 젖게", chunks:[
        {en:"The storm", ko:"그 폭풍이", t:"subj"},
        {en:"is making", ko:"만들고 있다", t:"verb"},
        {en:"the road", ko:"그 도로를", t:"obj"},
        {en:"wet", ko:"젖게", t:"comp"}]},
      {n:15, full:"그 군중이 춤추고 있다 (거리에서)", chunks:[
        {en:"The crowd", ko:"그 군중이", t:"subj"},
        {en:"is dancing", ko:"춤추고 있다", t:"verb"},
        {en:"in the street", ko:"거리에서", t:"mod"}]},
      {n:16, full:"그 개가 쫓고 있다 그 공을 (정원에서)", chunks:[
        {en:"The dog", ko:"그 개가", t:"subj"},
        {en:"is chasing", ko:"쫓고 있다", t:"verb"},
        {en:"the ball", ko:"그 공을", t:"obj"},
        {en:"in the garden", ko:"정원에서", t:"mod"}]},
      {n:17, full:"그 문들이 닫히고 있다 (지금 이 순간)", chunks:[
        {en:"The gates", ko:"그 문들이", t:"subj"},
        {en:"are being closed", ko:"닫히고 있다", t:"verb"},
        {en:"at this moment", ko:"지금 이 순간", t:"mod"}]},
      {n:18, full:"그 수프가 끓여지고 있다 (부엌에서)", chunks:[
        {en:"The soup", ko:"그 수프가", t:"subj"},
        {en:"is being boiled", ko:"끓여지고 있다", t:"verb"},
        {en:"in the kitchen", ko:"부엌에서", t:"mod"}]},
      {n:19, full:"그 지붕들이 덮이고 있다 (눈으로)", chunks:[
        {en:"The roofs", ko:"그 지붕들이", t:"subj"},
        {en:"are being covered", ko:"덮이고 있다", t:"verb"},
        {en:"with snow", ko:"눈으로", t:"mod"}]},
      {n:20, full:"그 무대가 청소되고 있다 (지금 이 순간)", chunks:[
        {en:"The stage", ko:"그 무대가", t:"subj"},
        {en:"is being cleaned", ko:"청소되고 있다", t:"verb"},
        {en:"at the present moment", ko:"지금 이 순간", t:"mod"}]},
      {n:21, full:"그 음식이 구워지고 있다 (손님들을 위해)", chunks:[
        {en:"The food", ko:"그 음식이", t:"subj"},
        {en:"is being baked", ko:"구워지고 있다", t:"verb"},
        {en:"for the guests", ko:"손님들을 위해", t:"mod"}]},
      {n:22, full:"그 아이들이 유지되고 있다 따뜻하게 (불 옆에서)", chunks:[
        {en:"The children", ko:"그 아이들이", t:"subj"},
        {en:"are being kept", ko:"유지되고 있다", t:"verb"},
        {en:"warm", ko:"따뜻하게", t:"comp"},
        {en:"by the fire", ko:"불 옆에서", t:"mod"}]},
      {n:23, full:"그 수영장이 청소되고 있다 (지금 이 순간)", chunks:[
        {en:"The pool", ko:"그 수영장이", t:"subj"},
        {en:"is being cleaned", ko:"청소되고 있다", t:"verb"},
        {en:"at this moment", ko:"지금 이 순간", t:"mod"}]},
      {n:24, full:"그 손님들이 받고 있다 따뜻한 식사를", chunks:[
        {en:"The guests", ko:"그 손님들이", t:"subj"},
        {en:"are being given", ko:"받고 있다", t:"verb"},
        {en:"a warm meal", ko:"따뜻한 식사를", t:"obj"}]},
      {n:25, full:"그 아이들이 춤추고 있었다 (무대 위에서)", chunks:[
        {en:"The children", ko:"그 아이들이", t:"subj"},
        {en:"were dancing", ko:"춤추고 있었다", t:"verb"},
        {en:"on the stage", ko:"무대 위에서", t:"mod"}]},
      {n:26, full:"그 개들이 뛰어넘고 있었다 (문 위를)", chunks:[
        {en:"The dogs", ko:"그 개들이", t:"subj"},
        {en:"were jumping", ko:"뛰어넘고 있었다", t:"verb"},
        {en:"over the gate", ko:"문 위를", t:"mod"}]},
      {n:27, full:"그 얼음이 녹고 있었다 (도로 위에서)", chunks:[
        {en:"The ice", ko:"그 얼음이", t:"subj"},
        {en:"was melting", ko:"녹고 있었다", t:"verb"},
        {en:"on the road", ko:"도로 위에서", t:"mod"}]},
      {n:28, full:"그 물이 끓고 있었다 (불 위에서)", chunks:[
        {en:"The water", ko:"그 물이", t:"subj"},
        {en:"was boiling", ko:"끓고 있었다", t:"verb"},
        {en:"on the fire", ko:"불 위에서", t:"mod"}]},
      {n:29, full:"그 수영장이 얼고 있었다 (밤에)", chunks:[
        {en:"The pool", ko:"그 수영장이", t:"subj"},
        {en:"was freezing", ko:"얼고 있었다", t:"verb"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:30, full:"그 소음이 커지고 있었다 크게 (문 앞에서)", chunks:[
        {en:"The noise", ko:"그 소음이", t:"subj"},
        {en:"was growing", ko:"커지고 있었다", t:"verb"},
        {en:"loud", ko:"크게", t:"comp"},
        {en:"at the gate", ko:"문 앞에서", t:"mod"}]},
      {n:31, full:"그 바다가 변하고 있었다 어둡게 (폭풍 동안)", chunks:[
        {en:"The sea", ko:"그 바다가", t:"subj"},
        {en:"was turning", ko:"변하고 있었다", t:"verb"},
        {en:"dark", ko:"어둡게", t:"comp"},
        {en:"during the storm", ko:"폭풍 동안", t:"mod"}]},
      {n:32, full:"구름이 덮고 있었다 하늘을 (어제)", chunks:[
        {en:"Clouds", ko:"구름이", t:"subj"},
        {en:"were covering", ko:"덮고 있었다", t:"verb"},
        {en:"the sky", ko:"하늘을", t:"obj"},
        {en:"yesterday", ko:"어제", t:"mod"}]},
      {n:33, full:"그 소년들이 쫓고 있었다 그 개를 (정원에서)", chunks:[
        {en:"The boys", ko:"그 소년들이", t:"subj"},
        {en:"were chasing", ko:"쫓고 있었다", t:"verb"},
        {en:"the dog", ko:"그 개를", t:"obj"},
        {en:"in the garden", ko:"정원에서", t:"mod"}]},
      {n:34, full:"바람이 흔들고 있었다 그 창문을 (밤새)", chunks:[
        {en:"The wind", ko:"바람이", t:"subj"},
        {en:"was shaking", ko:"흔들고 있었다", t:"verb"},
        {en:"the window", ko:"그 창문을", t:"obj"},
        {en:"all night", ko:"밤새", t:"mod"}]},
      {n:35, full:"나의 어머니는 사주고 있었다 그 손님들에게 과일을", chunks:[
        {en:"My mother", ko:"나의 어머니는", t:"subj"},
        {en:"was buying", ko:"사주고 있었다", t:"verb"},
        {en:"the guests", ko:"그 손님들에게", t:"obj"},
        {en:"fruit", ko:"과일을", t:"obj"}]},
      {n:36, full:"그 비가 만들고 있었다 그 풀을 젖게", chunks:[
        {en:"The rain", ko:"그 비가", t:"subj"},
        {en:"was making", ko:"만들고 있었다", t:"verb"},
        {en:"the grass", ko:"그 풀을", t:"obj"},
        {en:"wet", ko:"젖게", t:"comp"}]},
      {n:37, full:"그 손님들이 두드리고 있었다 (대문을)", chunks:[
        {en:"The guests", ko:"그 손님들이", t:"subj"},
        {en:"were knocking", ko:"두드리고 있었다", t:"verb"},
        {en:"at the gate", ko:"대문을", t:"mod"}]},
      {n:38, full:"그 군중이 손을 흔들고 춤추고 있었다 (거리에서)", chunks:[
        {en:"The crowd", ko:"그 군중이", t:"subj"},
        {en:"was waving", ko:"손을 흔들고", t:"verb"},
        {en:"and", ko:"", t:"skip"},
        {en:"dancing", ko:"춤추고 있었다", t:"verb"},
        {en:"in the street", ko:"거리에서", t:"mod"}]},
      {n:39, full:"그 물이 얼고 있었다 (차가운 바람 속에서)", chunks:[
        {en:"The water", ko:"그 물이", t:"subj"},
        {en:"was freezing", ko:"얼고 있었다", t:"verb"},
        {en:"in the cold wind", ko:"차가운 바람 속에서", t:"mod"}]},
      {n:40, full:"그 개가 쫓고 있었다 그 소년을 (도로 위에서)", chunks:[
        {en:"The dog", ko:"그 개가", t:"subj"},
        {en:"was chasing", ko:"쫓고 있었다", t:"verb"},
        {en:"the boy", ko:"그 소년을", t:"obj"},
        {en:"on the road", ko:"도로 위에서", t:"mod"}]},
      {n:41, full:"그 지붕이 청소되고 있었다 (어제)", chunks:[
        {en:"The roof", ko:"그 지붕이", t:"subj"},
        {en:"was being cleaned", ko:"청소되고 있었다", t:"verb"},
        {en:"yesterday", ko:"어제", t:"mod"}]},
      {n:42, full:"그 창문들이 청소되고 있었다 (어제)", chunks:[
        {en:"The windows", ko:"그 창문들이", t:"subj"},
        {en:"were being cleaned", ko:"청소되고 있었다", t:"verb"},
        {en:"yesterday", ko:"어제", t:"mod"}]},
      {n:43, full:"그 문이 흔들리고 있었다 (바람에 의해)", chunks:[
        {en:"The gate", ko:"그 문이", t:"subj"},
        {en:"was being shaken", ko:"흔들리고 있었다", t:"verb"},
        {en:"by the wind", ko:"바람에 의해", t:"mod"}]},
      {n:44, full:"그 도로가 덮이고 있었다 (눈으로)", chunks:[
        {en:"The road", ko:"그 도로가", t:"subj"},
        {en:"was being covered", ko:"덮이고 있었다", t:"verb"},
        {en:"with snow", ko:"눈으로", t:"mod"}]},
      {n:45, full:"그 손님들이 유지되고 있었다 따뜻하게 (폭풍 동안)", chunks:[
        {en:"The guests", ko:"그 손님들이", t:"subj"},
        {en:"were being kept", ko:"유지되고 있었다", t:"verb"},
        {en:"warm", ko:"따뜻하게", t:"comp"},
        {en:"during the storm", ko:"폭풍 동안", t:"mod"}]},
      {n:46, full:"그 아이들이 받고 있었다 따뜻한 수프를", chunks:[
        {en:"The children", ko:"그 아이들이", t:"subj"},
        {en:"were being given", ko:"받고 있었다", t:"verb"},
        {en:"warm soup", ko:"따뜻한 수프를", t:"obj"}]},
      {n:47, full:"나는 헤엄치고 있을 것이다 (수영장에서) (오늘 밤)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"will be swimming", ko:"헤엄치고 있을 것이다", t:"verb"},
        {en:"in the pool", ko:"수영장에서", t:"mod"},
        {en:"tonight", ko:"오늘 밤", t:"mod"}]},
      {n:48, full:"눈이 내리고 있을 것이다 (지붕 위에) (내일)", chunks:[
        {en:"Snow", ko:"눈이", t:"subj"},
        {en:"will be falling", ko:"내리고 있을 것이다", t:"verb"},
        {en:"on the roof", ko:"지붕 위에", t:"mod"},
        {en:"tomorrow", ko:"내일", t:"mod"}]},
      {n:49, full:"그 날씨는 변해가고 있을 것이다 차갑게 (오늘 밤)", chunks:[
        {en:"The weather", ko:"그 날씨는", t:"subj"},
        {en:"will be turning", ko:"변해가고 있을 것이다", t:"verb"},
        {en:"cold", ko:"차갑게", t:"comp"},
        {en:"tonight", ko:"오늘 밤", t:"mod"}]},
      {n:50, full:"그 팀은 오르고 있을 것이다 (지붕 위로) (내일)", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"will be climbing", ko:"오르고 있을 것이다", t:"verb"},
        {en:"onto the roof", ko:"지붕 위로", t:"mod"},
        {en:"tomorrow", ko:"내일", t:"mod"}]},
      {n:51, full:"그 폭풍은 만들고 있을 것이다 그 바다를 어둡게", chunks:[
        {en:"The storm", ko:"그 폭풍은", t:"subj"},
        {en:"will be making", ko:"만들고 있을 것이다", t:"verb"},
        {en:"the sea", ko:"그 바다를", t:"obj"},
        {en:"dark", ko:"어둡게", t:"comp"}]},
      {n:52, full:"이 자전거는 속한다 나의 형에게", chunks:[
        {en:"This bike", ko:"이 자전거는", t:"subj"},
        {en:"belongs to", ko:"속한다", t:"verb"},
        {en:"my brother", ko:"나의 형에게", t:"obj"}]},
      {n:53, full:"이 책들은 속한다 그 학교에", chunks:[
        {en:"These books", ko:"이 책들은", t:"subj"},
        {en:"belong to", ko:"속한다", t:"verb"},
        {en:"the school", ko:"그 학교에", t:"obj"}]},
      {n:54, full:"성공은 달려 있다 노력에", chunks:[
        {en:"Success", ko:"성공은", t:"subj"},
        {en:"depends on", ko:"달려 있다", t:"verb"},
        {en:"effort", ko:"노력에", t:"obj"}]},
      {n:55, full:"그 결과들은 달려 있다 날씨에", chunks:[
        {en:"The results", ko:"그 결과들은", t:"subj"},
        {en:"depend on", ko:"달려 있다", t:"verb"},
        {en:"the weather", ko:"날씨에", t:"obj"}]},
      {n:56, full:"현재 날씨는 보인다 따뜻하게", chunks:[
        {en:"The present weather", ko:"현재 날씨는", t:"subj"},
        {en:"seems", ko:"보인다", t:"verb"},
        {en:"warm", ko:"따뜻하게", t:"comp"}]},
      {n:57, full:"현재 일정표는 보인다 이상하게", chunks:[
        {en:"The present schedule", ko:"현재 일정표는", t:"subj"},
        {en:"looks", ko:"보인다", t:"verb"},
        {en:"strange", ko:"이상하게", t:"comp"}]},
      {n:58, full:"그 상자들은 담고 있다 과일을", chunks:[
        {en:"The boxes", ko:"그 상자들은", t:"subj"},
        {en:"contain", ko:"담고 있다", t:"verb"},
        {en:"fruit", ko:"과일을", t:"obj"}]},
      {n:59, full:"그 가방은 담고 있다 달걀을", chunks:[
        {en:"The bag", ko:"그 가방은", t:"subj"},
        {en:"contains", ko:"담고 있다", t:"verb"},
        {en:"eggs", ko:"달걀을", t:"obj"}]},
      {n:60, full:"나의 누나는 소유하고 있다 자동차 한 대를", chunks:[
        {en:"My sister", ko:"나의 누나는", t:"subj"},
        {en:"owns", ko:"소유하고 있다", t:"verb"},
        {en:"a car", ko:"자동차 한 대를", t:"obj"}]},
      {n:61, full:"그 팀은 소유하고 있다 그 경기장을", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"owns", ko:"소유하고 있다", t:"verb"},
        {en:"the field", ko:"그 경기장을", t:"obj"}]},
      {n:62, full:"그 팀은 받을 만하다 성공을", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"deserves", ko:"받을 만하다", t:"verb"},
        {en:"success", ko:"성공을", t:"obj"}]},
      {n:63, full:"나의 누나는 받을 만하다 그 돈을", chunks:[
        {en:"My sister", ko:"나의 누나는", t:"subj"},
        {en:"deserves", ko:"받을 만하다", t:"verb"},
        {en:"the money", ko:"그 돈을", t:"obj"}]},
      {n:64, full:"그 변화들은 의미한다 위험을", chunks:[
        {en:"The changes", ko:"그 변화들은", t:"subj"},
        {en:"mean", ko:"의미한다", t:"verb"},
        {en:"danger", ko:"위험을", t:"obj"}]},
      {n:65, full:"높은 가격은 의미한다 낮은 판매를", chunks:[
        {en:"A high price", ko:"높은 가격은", t:"subj"},
        {en:"means", ko:"의미한다", t:"verb"},
        {en:"low sales", ko:"낮은 판매를", t:"obj"}]},
      {n:66, full:"그 군중은 여긴다 그 시인을 천재라고", chunks:[
        {en:"The crowd", ko:"그 군중은", t:"subj"},
        {en:"considers", ko:"여긴다", t:"verb"},
        {en:"the poet", ko:"그 시인을", t:"obj"},
        {en:"a genius", ko:"천재라고", t:"comp"}]},
      {n:67, full:"너는 굴고 있다 이상하게 (지금)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"are being", ko:"굴고 있다", t:"verb"},
        {en:"strange", ko:"이상하게", t:"comp"},
        {en:"now", ko:"지금", t:"mod"}]},
      {n:68, full:"나의 형은 굴고 있다 솔직하게 (손님들에게)", chunks:[
        {en:"My brother", ko:"나의 형은", t:"subj"},
        {en:"is being", ko:"굴고 있다", t:"verb"},
        {en:"honest", ko:"솔직하게", t:"comp"},
        {en:"with the guests", ko:"손님들에게", t:"mod"}]},
    ]},
    { id:"조동사(1)", items:[
      {n:1, ctx:{en:"The pool is deep.", ko:"그 수영장은 깊다."}, full:"그 아이들은 헤엄칠 수 없다 (도움 없이)", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"cannot swim", ko:"헤엄칠 수 없다", t:"verb"},
        {en:"without help", ko:"도움 없이", t:"mod"}]},
      {n:2, ctx:{en:"Citizens demand a new law.", ko:"시민들이 새 법을 요구한다."}, full:"그 법은 바뀔 수 있다 (그 행사 전에)", chunks:[
        {en:"The law", ko:"그 법은", t:"subj"},
        {en:"could change", ko:"바뀔 수 있다", t:"verb"},
        {en:"before the event", ko:"그 행사 전에", t:"mod"}]},
      {n:3, ctx:{en:"The office does not require the tax every month.", ko:"그 사무소는 매달 그 세금을 요구하지 않는다."}, full:"너는 그 세금을 내도 된다 (매 계절)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"can pay", ko:"내도 된다", t:"verb"},
        {en:"the tax", ko:"그 세금을", t:"obj"},
        {en:"every season", ko:"매 계절", t:"mod"}]},
      {n:4, ctx:{en:"The class forgot the rule.", ko:"그 반은 그 규칙을 잊었다."}, full:"그 선생님은 그 규칙을 반복할 수 있다", chunks:[
        {en:"The teacher", ko:"그 선생님은", t:"subj"},
        {en:"can repeat", ko:"반복할 수 있다", t:"verb"},
        {en:"the rule", ko:"그 규칙을", t:"obj"}]},
      {n:5, ctx:{en:"The old law had no office for the tax.", ko:"그 옛 법에는 그 세금을 위한 사무소가 없었다."}, full:"그 세금은 납부될 수 없었다 (과거에)", chunks:[
        {en:"The tax", ko:"그 세금은", t:"subj"},
        {en:"could not be paid", ko:"납부될 수 없었다", t:"verb"},
        {en:"in the past", ko:"과거에", t:"mod"}]},
      {n:6, ctx:{en:"The room holds old pictures.", ko:"그 방은 오래된 그림들을 보관한다."}, full:"사진은 찍히면 안 된다 (이 방에서)", chunks:[
        {en:"Pictures", ko:"사진은", t:"subj"},
        {en:"may not be taken", ko:"찍히면 안 된다", t:"verb"},
        {en:"in this room", ko:"이 방에서", t:"mod"}]},
      {n:7, ctx:{en:"The doctor has time tomorrow.", ko:"그 의사는 내일 시간이 있다."}, full:"그 의사는 그 환자를 진찰할 수 있을 것이다 (내일)", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"will be able to examine", ko:"진찰할 수 있을 것이다", t:"verb"},
        {en:"the patient", ko:"그 환자를", t:"obj"},
        {en:"tomorrow", ko:"내일", t:"mod"}]},
      {n:8, ctx:{en:"The road is wet.", ko:"그 도로가 젖어 있다."}, full:"그 손님들은 늦게 도착할 수도 있다 (오늘 밤)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"could arrive", ko:"도착할 수도 있다", t:"verb"},
        {en:"late tonight", ko:"오늘 밤 늦게", t:"mod"}]},
      {n:9, ctx:{en:"The rain stopped yesterday.", ko:"그 비는 어제 그쳤다."}, full:"그 물은 안전할 수도 있다 (지금)", chunks:[
        {en:"The water", ko:"그 물은", t:"subj"},
        {en:"could be", ko:"~일 수도 있다", t:"verb"},
        {en:"safe", ko:"안전한", t:"comp"},
        {en:"now", ko:"지금", t:"mod"}]},
      {n:10, ctx:{en:"The box held many books.", ko:"그 상자는 많은 책을 담고 있었다."}, full:"그 상자는 들어 올려질 수 없었다 (아이에 의해)", chunks:[
        {en:"The box", ko:"그 상자는", t:"subj"},
        {en:"could not be lifted", ko:"들어 올려질 수 없었다", t:"verb"},
        {en:"by a child", ko:"아이에 의해", t:"mod"}]},
      {n:11, ctx:{en:"The roof was low in the old house.", ko:"그 옛집은 지붕이 낮았다."}, full:"그 소년들은 올라갈 수 있었다 (그 지붕 위로)", chunks:[
        {en:"The boys", ko:"그 소년들은", t:"subj"},
        {en:"could climb", ko:"올라갈 수 있었다", t:"verb"},
        {en:"onto the roof", ko:"그 지붕 위로", t:"mod"}]},
      {n:12, ctx:{en:"The customer asked for an answer.", ko:"그 고객이 답변을 요청했다."}, full:"그 회사는 그 고객에게 편지를 보낼 수 있었다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"was able to send", ko:"보낼 수 있었다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"a letter", ko:"편지를", t:"obj"}]},
      {n:13, ctx:{en:"The rule allows an early start.", ko:"그 규정은 이른 시작을 허용한다."}, full:"회원들은 등록해도 된다 (그 행사 전에)", chunks:[
        {en:"Members", ko:"회원들은", t:"subj"},
        {en:"can register", ko:"등록해도 된다", t:"verb"},
        {en:"before the event", ko:"그 행사 전에", t:"mod"}]},
      {n:14, ctx:{en:"Tickets were required at the gate.", ko:"그 문에서 표가 요구되었다."}, full:"그 손님들은 들어갈 수 없었다 (표 없이)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"could not enter", ko:"들어갈 수 없었다", t:"verb"},
        {en:"without a ticket", ko:"표 없이", t:"mod"}]},
      {n:15, ctx:{en:"A child falls from a bike.", ko:"아이가 자전거에서 넘어진다."}, full:"헬멧은 아이를 안전하게 지킬 수 있다", chunks:[
        {en:"A helmet", ko:"헬멧은", t:"subj"},
        {en:"can keep", ko:"지킬 수 있다", t:"verb"},
        {en:"a child", ko:"아이를", t:"obj"},
        {en:"safe", ko:"안전하게", t:"comp"}]},
      {n:16, ctx:{en:"No one reads the letter.", ko:"아무도 그 편지를 읽지 못한다."}, full:"나는 그 편지를 번역할 수 있다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"can translate", ko:"번역할 수 있다", t:"verb"},
        {en:"the letter", ko:"그 편지를", t:"obj"}]},
      {n:17, ctx:{en:"Children run into the street.", ko:"아이들이 도로로 뛰어든다."}, full:"엄격한 규칙은 아이들을 보호할 수 있다", chunks:[
        {en:"A strict rule", ko:"엄격한 규칙은", t:"subj"},
        {en:"can protect", ko:"보호할 수 있다", t:"verb"},
        {en:"children", ko:"아이들을", t:"obj"}]},
      {n:18, ctx:{en:"No one lifts the box.", ko:"아무도 그 상자를 들지 못한다."}, full:"그 운동선수들은 그 상자를 들 수 있다", chunks:[
        {en:"The athletes", ko:"그 운동선수들은", t:"subj"},
        {en:"can lift", ko:"들 수 있다", t:"verb"},
        {en:"the box", ko:"그 상자를", t:"obj"}]},
      {n:19, ctx:{en:"The patient needs a doctor now.", ko:"그 환자는 지금 의사가 필요하다."}, full:"그 의사는 도착할 수 있다 (그 병원에, 한 시간 안에)", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"can arrive", ko:"도착할 수 있다", t:"verb"},
        {en:"at the hospital", ko:"그 병원에", t:"mod"},
        {en:"in an hour", ko:"한 시간 안에", t:"mod"}]},
      {n:20, ctx:{en:"The law does not allow noise at night.", ko:"그 법은 밤에 소음을 허용하지 않는다."}, full:"그 법은 엄격해 보일 수 있다", chunks:[
        {en:"The law", ko:"그 법은", t:"subj"},
        {en:"can seem", ko:"보일 수 있다", t:"verb"},
        {en:"strict", ko:"엄격하게", t:"comp"}]},
      {n:21, ctx:{en:"The office has a new rule for guests.", ko:"그 사무소는 손님을 위한 새 규정이 있다."}, full:"너는 네 이름을 등록해도 된다 (그 문에서)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"can register", ko:"등록해도 된다", t:"verb"},
        {en:"your name", ko:"네 이름을", t:"obj"},
        {en:"at the gate", ko:"그 문에서", t:"mod"}]},
      {n:22, ctx:{en:"The company had a bad season.", ko:"그 회사는 안 좋은 시즌을 보냈다."}, full:"그 회사는 그 요금을 낼 수 없었다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"was not able to pay", ko:"낼 수 없었다", t:"verb"},
        {en:"the fee", ko:"그 요금을", t:"obj"}]},
      {n:23, ctx:{en:"The company made the rule.", ko:"그 회사가 그 규정을 만들었다."}, full:"그 규정은 바뀔 수 없다 (그 팀에 의해)", chunks:[
        {en:"The rule", ko:"그 규정은", t:"subj"},
        {en:"cannot be changed", ko:"바뀔 수 없다", t:"verb"},
        {en:"by the team", ko:"그 팀에 의해", t:"mod"}]},
      {n:24, ctx:{en:"The city office is open to citizens.", ko:"그 시청은 시민들에게 열려 있다."}, full:"시민들은 신청해도 된다 (여권을)", chunks:[
        {en:"Citizens", ko:"시민들은", t:"subj"},
        {en:"may apply", ko:"신청해도 된다", t:"verb"},
        {en:"for a passport", ko:"여권을", t:"mod"}]},
      {n:25, ctx:{en:"The company opened the office to members.", ko:"그 회사는 회원들에게 그 사무실을 개방했다."}, full:"회원들은 그 사무실에 들어가도 된다", chunks:[
        {en:"Members", ko:"회원들은", t:"subj"},
        {en:"can enter", ko:"들어가도 된다", t:"verb"},
        {en:"the office", ko:"그 사무실에", t:"obj"}]},
      {n:26, ctx:{en:"The gate has no office.", ko:"그 문에는 사무소가 없다."}, full:"그 요금은 납부될 수 없다 (그 문에서)", chunks:[
        {en:"The fee", ko:"그 요금은", t:"subj"},
        {en:"cannot be paid", ko:"납부될 수 없다", t:"verb"},
        {en:"at the gate", ko:"그 문에서", t:"mod"}]},
      {n:27, ctx:{en:"The companies saved money for a season.", ko:"그 회사들은 한 시즌 동안 돈을 모았다."}, full:"그 회사들은 그 요금을 낼 수 있다", chunks:[
        {en:"The companies", ko:"그 회사들은", t:"subj"},
        {en:"are able to pay", ko:"낼 수 있다", t:"verb"},
        {en:"the fee", ko:"그 요금을", t:"obj"}]},
      {n:28, ctx:{en:"A child goes to school in the dark.", ko:"아이가 어두울 때 학교에 간다."}, full:"교복은 아이를 보호할 수 있다", chunks:[
        {en:"A uniform", ko:"교복은", t:"subj"},
        {en:"can protect", ko:"보호할 수 있다", t:"verb"},
        {en:"a child", ko:"아이를", t:"obj"}]},
      {n:29, ctx:{en:"The letter is in an old style.", ko:"그 편지는 옛 문체로 되어 있다."}, full:"나는 그 편지를 번역할 수 없다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"am not able to translate", ko:"번역할 수 없다", t:"verb"},
        {en:"the letter", ko:"그 편지를", t:"obj"}]},
      {n:30, ctx:{en:"The teacher knows the old style.", ko:"그 선생님은 그 옛 문체를 안다."}, full:"그 편지는 번역될 수 있었다 (그 선생님에 의해)", chunks:[
        {en:"The letter", ko:"그 편지는", t:"subj"},
        {en:"could be translated", ko:"번역될 수 있었다", t:"verb"},
        {en:"by the teacher", ko:"그 선생님에 의해", t:"mod"}]},
      {n:31, ctx:{en:"The rule allows the airport to examine every bag.", ko:"그 규정은 그 공항이 모든 가방을 검사하도록 허용한다."}, full:"그 여권은 검사될 수 있다 (그 공항에서)", chunks:[
        {en:"The passport", ko:"그 여권은", t:"subj"},
        {en:"may be examined", ko:"검사될 수 있다", t:"verb"},
        {en:"at the airport", ko:"그 공항에서", t:"mod"}]},
      {n:32, ctx:{en:"The old rule required a uniform.", ko:"그 옛 규정은 유니폼을 요구했다."}, full:"그 팀은 출전할 수 없었다 (유니폼 없이)", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"could not compete", ko:"출전할 수 없었다", t:"verb"},
        {en:"without a uniform", ko:"유니폼 없이", t:"mod"}]},
      {n:33, ctx:{en:"The class does not understand the story.", ko:"그 반은 그 이야기를 이해하지 못한다."}, full:"그 선생님은 그 반에게 그림을 보여줄 수 있다", chunks:[
        {en:"The teacher", ko:"그 선생님은", t:"subj"},
        {en:"can show", ko:"보여줄 수 있다", t:"verb"},
        {en:"the class", ko:"그 반에게", t:"obj"},
        {en:"a picture", ko:"그림을", t:"obj"}]},
      {n:34, ctx:{en:"My father heard the old story every night in the past.", ko:"내 아버지는 과거에 그 옛이야기를 매일 밤 들었다."}, full:"내 아버지는 그 옛이야기를 반복할 수 있었다", chunks:[
        {en:"My father", ko:"내 아버지는", t:"subj"},
        {en:"could repeat", ko:"반복할 수 있었다", t:"verb"},
        {en:"the old story", ko:"그 옛이야기를", t:"obj"}]},
      {n:35, ctx:{en:"The game begins without helmets.", ko:"그 경기는 헬멧 없이 시작된다."}, full:"그 운동선수들은 출전할 수 있다 (헬멧 없이)", chunks:[
        {en:"The athletes", ko:"그 운동선수들은", t:"subj"},
        {en:"are able to compete", ko:"출전할 수 있다", t:"verb"},
        {en:"without a helmet", ko:"헬멧 없이", t:"mod"}]},
      {n:36, ctx:{en:"The child prepared the bag at night.", ko:"그 아이는 밤에 가방을 준비했다."}, full:"그 아이는 준비를 마칠 수 있었다 (한 시간 만에)", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"could get", ko:"~해질 수 있었다", t:"verb"},
        {en:"ready", ko:"준비된 상태로", t:"comp"},
        {en:"in an hour", ko:"한 시간 만에", t:"mod"}]},
      {n:37, ctx:{en:"People steal passports at the airport.", ko:"사람들이 그 공항에서 여권을 훔친다."}, full:"그 여권은 안전하게 보관될 수 있다 (가방 안에)", chunks:[
        {en:"The passport", ko:"그 여권은", t:"subj"},
        {en:"can be kept", ko:"보관될 수 있다", t:"verb"},
        {en:"safe", ko:"안전하게", t:"comp"},
        {en:"in a bag", ko:"가방 안에", t:"mod"}]},
      {n:38, ctx:{en:"The company gives free tickets to members.", ko:"그 회사는 회원들에게 무료 표를 준다."}, full:"너는 신청해도 된다 (무료 표를)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"may apply", ko:"신청해도 된다", t:"verb"},
        {en:"for a free ticket", ko:"무료 표를", t:"mod"}]},
      {n:39, ctx:{en:"The guests were athletes in the past.", ko:"그 손님들은 과거에 운동선수였다."}, full:"그 손님들은 헤엄칠 수 있다 (그 수영장에서)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"are able to swim", ko:"헤엄칠 수 있다", t:"verb"},
        {en:"in the pool", ko:"그 수영장에서", t:"mod"}]},
      {n:40, ctx:{en:"The gate was closed.", ko:"그 문은 닫혀 있었다."}, full:"그 손님들은 들어갈 수 없었다 (그 사무실에)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"were not able to enter", ko:"들어갈 수 없었다", t:"verb"},
        {en:"the office", ko:"그 사무실에", t:"obj"}]},
      {n:41, ctx:{en:"The box holds many books.", ko:"그 상자는 많은 책을 담고 있다."}, full:"나는 그 상자를 들 수 없다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"cannot lift", ko:"들 수 없다", t:"verb"},
        {en:"the box", ko:"그 상자를", t:"obj"}]},
      {n:42, ctx:{en:"The patient coughs at the hospital.", ko:"그 환자가 그 병원에서 기침을 한다."}, full:"마스크는 그 의사를 안전하게 지킬 수 있다", chunks:[
        {en:"A mask", ko:"마스크는", t:"subj"},
        {en:"can keep", ko:"지킬 수 있다", t:"verb"},
        {en:"the doctor", ko:"그 의사를", t:"obj"},
        {en:"safe", ko:"안전하게", t:"comp"}]},
      {n:43, ctx:{en:"The rule closes the garden during the event.", ko:"그 규정은 행사 동안 그 정원을 닫는다."}, full:"손님들은 들어가도 된다 (그 행사 후에)", chunks:[
        {en:"Guests", ko:"손님들은", t:"subj"},
        {en:"may enter", ko:"들어가도 된다", t:"verb"},
        {en:"after the event", ko:"그 행사 후에", t:"mod"}]},
      {n:44, ctx:{en:"The office keeps the paper for the teacher.", ko:"그 사무실이 그 선생님을 위해 그 서류를 보관한다."}, full:"너는 그 서류를 제출해도 된다 (그 사무실에서)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"can submit", ko:"제출해도 된다", t:"verb"},
        {en:"the paper", ko:"그 서류를", t:"obj"},
        {en:"at the office", ko:"그 사무실에서", t:"mod"}]},
      {n:45, ctx:{en:"The class studied every night.", ko:"그 반은 매일 밤 공부했다."}, full:"그 반은 그 문제를 풀 수 있었다 (어제)", chunks:[
        {en:"The class", ko:"그 반은", t:"subj"},
        {en:"was able to solve", ko:"풀 수 있었다", t:"verb"},
        {en:"the problem", ko:"그 문제를", t:"obj"},
        {en:"yesterday", ko:"어제", t:"mod"}]},
      {n:46, ctx:{en:"The team discusses the rule now.", ko:"그 팀은 지금 그 규정을 논의한다."}, full:"그 규정은 바뀔 수 있다 (그 시즌 전에)", chunks:[
        {en:"The rule", ko:"그 규정은", t:"subj"},
        {en:"could change", ko:"바뀔 수 있다", t:"verb"},
        {en:"before the season", ko:"그 시즌 전에", t:"mod"}]},
      {n:47, ctx:{en:"The office is only for members.", ko:"그 사무실은 회원 전용이다."}, full:"너는 그 사무실에 들어갈 수 없다", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"cannot enter", ko:"들어갈 수 없다", t:"verb"},
        {en:"the office", ko:"그 사무실에", t:"obj"}]},
      {n:48, ctx:{en:"The rule allows time for the paper.", ko:"그 규정은 그 서류를 위한 시간을 허용한다."}, full:"그 서류는 제출되어도 된다 (그 주말 전에)", chunks:[
        {en:"The paper", ko:"그 서류는", t:"subj"},
        {en:"can be submitted", ko:"제출되어도 된다", t:"verb"},
        {en:"before the weekend", ko:"그 주말 전에", t:"mod"}]},
      {n:49, ctx:{en:"The problem was for adults.", ko:"그 문제는 어른들을 위한 것이었다."}, full:"그 아이는 그 문제를 풀 수 없었다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"could not solve", ko:"풀 수 없었다", t:"verb"},
        {en:"the problem", ko:"그 문제를", t:"obj"}]},
      {n:50, ctx:{en:"The patient needs a mask.", ko:"그 환자는 마스크가 필요하다."}, full:"그 의사는 그 환자에게 마스크를 가져다줄 수 있다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"can bring", ko:"가져다줄 수 있다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"a mask", ko:"마스크를", t:"obj"}]},
    ]},
    { id:"조동사(2)", items:[
      {n:1, ctx:{en:"The ache stopped this morning.", ko:"그 통증은 오늘 아침에 멎었다."}, full:"그 통증은 돌아올지도 모른다 (밤에)", chunks:[
        {en:"The ache", ko:"그 통증은", t:"subj"},
        {en:"may return", ko:"돌아올지도 모른다", t:"verb"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:2, ctx:{en:"The trains left the city an hour ago.", ko:"그 기차들은 한 시간 전에 그 도시를 떠났다."}, full:"그 기차들은 도착할 것임에 틀림없다 (곧)", chunks:[
        {en:"The trains", ko:"그 기차들은", t:"subj"},
        {en:"must arrive", ko:"도착할 것임에 틀림없다", t:"verb"},
        {en:"soon", ko:"곧", t:"mod"}]},
      {n:3, ctx:{en:"The hospital gives every patient a meal.", ko:"그 병원은 모든 환자에게 식사를 제공한다."}, full:"음식은 반입되면 안 된다 (그 병원 안으로)", chunks:[
        {en:"Food", ko:"음식은", t:"subj"},
        {en:"must not be brought", ko:"반입되면 안 된다", t:"verb"},
        {en:"into the hospital", ko:"그 병원 안으로", t:"mod"}]},
      {n:4, ctx:{en:"The symptom is familiar.", ko:"그 증상은 낯익다."}, full:"그 의사는 그 원인을 알지도 모른다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"could know", ko:"알지도 모른다", t:"verb"},
        {en:"the cause", ko:"그 원인을", t:"obj"}]},
      {n:5, ctx:{en:"The symptom is new.", ko:"그 증상은 새롭다."}, full:"그 증상은 진찰되어야 한다 (의사에 의해)", chunks:[
        {en:"The symptom", ko:"그 증상은", t:"subj"},
        {en:"should be examined", ko:"진찰되어야 한다", t:"verb"},
        {en:"by a doctor", ko:"의사에 의해", t:"mod"}]},
      {n:6, ctx:{en:"The company sent a letter about the fee.", ko:"그 회사가 그 요금에 관한 편지를 보냈다."}, full:"우리는 그 요금을 내야 했다 (어제)", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"had to pay", ko:"내야 했다", t:"verb"},
        {en:"the fee", ko:"그 요금을", t:"obj"},
        {en:"yesterday", ko:"어제", t:"mod"}]},
      {n:7, ctx:{en:"The law exists for citizens.", ko:"그 법은 시민을 위해 존재한다."}, full:"시민들은 보호받아야 한다 (그 법에 의해)", chunks:[
        {en:"Citizens", ko:"시민들은", t:"subj"},
        {en:"must be protected", ko:"보호받아야 한다", t:"verb"},
        {en:"by the law", ko:"그 법에 의해", t:"mod"}]},
      {n:8, ctx:{en:"The old habit causes the ache.", ko:"그 오랜 습관이 그 통증을 일으킨다."}, full:"우리는 그 오랜 습관을 그만둬야 한다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"ought to quit", ko:"그만둬야 한다", t:"verb"},
        {en:"the old habit", ko:"그 오랜 습관을", t:"obj"}]},
      {n:9, ctx:{en:"Children swim in the river.", ko:"아이들이 그 강에서 헤엄친다."}, full:"그 물은 깨끗한 상태여야 한다", chunks:[
        {en:"The water", ko:"그 물은", t:"subj"},
        {en:"must stay", ko:"~인 상태여야 한다", t:"verb"},
        {en:"clean", ko:"깨끗한", t:"comp"}]},
      {n:10, ctx:{en:"The story appeared before the event.", ko:"그 이야기는 그 사건 전에 나왔다."}, full:"그 이야기는 단서일 리 없다", chunks:[
        {en:"The story", ko:"그 이야기는", t:"subj"},
        {en:"cannot be", ko:"~일 리 없다", t:"verb"},
        {en:"a clue", ko:"단서", t:"comp"}]},
      {n:11, ctx:{en:"The pool is deep.", ko:"그 수영장은 깊다."}, full:"그 아이들은 헤엄치면 안 된다 (그 깊은 수영장에서)", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"must not swim", ko:"헤엄치면 안 된다", t:"verb"},
        {en:"in the deep pool", ko:"그 깊은 수영장에서", t:"mod"}]},
      {n:12, ctx:{en:"The medicine does not work.", ko:"그 약이 듣지 않는다."}, full:"너는 그 의사에게 말하는 게 좋다 (그 통증에 대해)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"should tell", ko:"말하는 게 좋다", t:"verb"},
        {en:"the doctor", ko:"그 의사에게", t:"obj"},
        {en:"about the ache", ko:"그 통증에 대해", t:"mod"}]},
      {n:13, ctx:{en:"Patients sleep in the room.", ko:"환자들이 그 방에서 잔다."}, full:"그 환자는 조용해야 한다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"ought to be", ko:"~해야 한다", t:"verb"},
        {en:"quiet", ko:"조용한", t:"comp"}]},
      {n:14, ctx:{en:"The child feels warm.", ko:"그 아이는 몸이 따뜻하다."}, full:"그 증상은 열의 징후일지도 모른다", chunks:[
        {en:"The symptom", ko:"그 증상은", t:"subj"},
        {en:"could be", ko:"~일지도 모른다", t:"verb"},
        {en:"a sign of a fever", ko:"열의 징후", t:"comp"}]},
      {n:15, ctx:{en:"The patient asks for the medicine.", ko:"그 환자가 그 약을 요청한다."}, full:"그 간호사는 그 환자에게 그 약을 가져다줄지도 모른다 (오늘 밤)", chunks:[
        {en:"The nurse", ko:"그 간호사는", t:"subj"},
        {en:"may bring", ko:"가져다줄지도 모른다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"the medicine", ko:"그 약을", t:"obj"},
        {en:"tonight", ko:"오늘 밤", t:"mod"}]},
      {n:16, ctx:{en:"Patients sleep in the room.", ko:"환자들이 그 방에서 잔다."}, full:"너는 뛰면 안 된다 (그 병원에서)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"must not run", ko:"뛰면 안 된다", t:"verb"},
        {en:"in the hospital", ko:"그 병원에서", t:"mod"}]},
      {n:17, ctx:{en:"The rule keeps athletes safe.", ko:"그 규칙은 운동선수들을 안전하게 지킨다."}, full:"모든 운동선수는 헬멧을 써야 한다", chunks:[
        {en:"Every athlete", ko:"모든 운동선수는", t:"subj"},
        {en:"must wear", ko:"써야 한다", t:"verb"},
        {en:"a helmet", ko:"헬멧을", t:"obj"}]},
      {n:18, ctx:{en:"The doctor gave good advice.", ko:"그 의사가 좋은 조언을 해주었다."}, full:"그 조언은 잊혀서는 안 된다", chunks:[
        {en:"The advice", ko:"그 조언은", t:"subj"},
        {en:"should not be forgotten", ko:"잊혀서는 안 된다", t:"verb"}]},
      {n:19, ctx:{en:"The ache returns every night.", ko:"그 통증은 매일 밤 돌아온다."}, full:"너는 그 약을 먹는 게 좋다", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"should take", ko:"먹는 게 좋다", t:"verb"},
        {en:"the medicine", ko:"그 약을", t:"obj"}]},
      {n:20, ctx:{en:"The doctor watches the symptom.", ko:"그 의사는 그 증상을 지켜본다."}, full:"그 증상은 그 의사에게 단서를 줄 것임에 틀림없다", chunks:[
        {en:"The symptom", ko:"그 증상은", t:"subj"},
        {en:"must give", ko:"줄 것임에 틀림없다", t:"verb"},
        {en:"the doctor", ko:"그 의사에게", t:"obj"},
        {en:"a clue", ko:"단서를", t:"obj"}]},
      {n:21, ctx:{en:"The road is wet.", ko:"그 도로가 젖어 있다."}, full:"그 손님들은 도착할 것 같다 (늦게)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"are likely to arrive", ko:"도착할 것 같다", t:"verb"},
        {en:"late", ko:"늦게", t:"mod"}]},
      {n:22, ctx:{en:"The office keeps the papers of members.", ko:"그 사무실은 회원들의 서류를 보관한다."}, full:"손님들은 그 사무실에 들어가면 안 된다", chunks:[
        {en:"Guests", ko:"손님들은", t:"subj"},
        {en:"must not enter", ko:"들어가면 안 된다", t:"verb"},
        {en:"the office", ko:"그 사무실에", t:"obj"}]},
      {n:23, ctx:{en:"The room smells bad.", ko:"그 방에서 안 좋은 냄새가 난다."}, full:"너는 그 창문을 열어 두는 게 좋다", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"should keep", ko:"두는 게 좋다", t:"verb"},
        {en:"the window", ko:"그 창문을", t:"obj"},
        {en:"open", ko:"열린 상태로", t:"comp"}]},
      {n:24, ctx:{en:"The fever fell every night.", ko:"그 열은 매일 밤 내렸다."}, full:"그 열은 내릴 것 같다 (오늘 밤)", chunks:[
        {en:"The fever", ko:"그 열은", t:"subj"},
        {en:"is likely to fall", ko:"내릴 것 같다", t:"verb"},
        {en:"tonight", ko:"오늘 밤", t:"mod"}]},
      {n:25, ctx:{en:"The class has no paper from you.", ko:"그 반은 너에게서 받은 서류가 없다."}, full:"너는 그 서류를 제출해야 한다 (내일)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"need to submit", ko:"제출해야 한다", t:"verb"},
        {en:"the paper", ko:"그 서류를", t:"obj"},
        {en:"tomorrow", ko:"내일", t:"mod"}]},
      {n:26, ctx:{en:"The patient has a fever.", ko:"그 환자는 열이 있다."}, full:"그 의사는 그 환자에게 마스크를 줘야 할 것이다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"will have to give", ko:"줘야 할 것이다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"a mask", ko:"마스크를", t:"obj"}]},
      {n:27, ctx:{en:"The event is in our city.", ko:"그 행사는 우리 도시에서 열린다."}, full:"너는 여권을 가져올 필요 없다", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"do not have to bring", ko:"가져올 필요 없다", t:"verb"},
        {en:"a passport", ko:"여권을", t:"obj"}]},
      {n:28, ctx:{en:"The rule requires a uniform.", ko:"그 규정은 유니폼을 요구한다."}, full:"그 회사는 모든 회원에게 유니폼을 줘야 한다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"must give", ko:"줘야 한다", t:"verb"},
        {en:"every member", ko:"모든 회원에게", t:"obj"},
        {en:"a uniform", ko:"유니폼을", t:"obj"}]},
      {n:29, ctx:{en:"The company gives old uniforms.", ko:"그 회사는 낡은 유니폼을 준다."}, full:"그 유니폼은 새것일 필요 없다", chunks:[
        {en:"The uniform", ko:"그 유니폼은", t:"subj"},
        {en:"does not have to be", ko:"~일 필요 없다", t:"verb"},
        {en:"new", ko:"새것", t:"comp"}]},
      {n:30, ctx:{en:"The letter is on the desk.", ko:"그 편지가 책상 위에 있다."}, full:"그 편지는 보내질지도 모른다 (내일)", chunks:[
        {en:"The letter", ko:"그 편지는", t:"subj"},
        {en:"might be sent", ko:"보내질지도 모른다", t:"verb"},
        {en:"tomorrow", ko:"내일", t:"mod"}]},
      {n:31, ctx:{en:"The exercise finishes at night.", ko:"그 운동은 밤에 끝난다."}, full:"그 약은 복용될지도 모른다 (그 운동 후에)", chunks:[
        {en:"The medicine", ko:"그 약은", t:"subj"},
        {en:"might be taken", ko:"복용될지도 모른다", t:"verb"},
        {en:"after the exercise", ko:"그 운동 후에", t:"mod"}]},
      {n:32, ctx:{en:"The team began the paper late.", ko:"그 팀은 그 서류를 늦게 시작했다."}, full:"그 서류는 제출될 것 같다 (늦게)", chunks:[
        {en:"The paper", ko:"그 서류는", t:"subj"},
        {en:"is likely to be submitted", ko:"제출될 것 같다", t:"verb"},
        {en:"late", ko:"늦게", t:"mod"}]},
      {n:33, ctx:{en:"The class seems hard.", ko:"그 수업은 어려워 보인다."}, full:"너는 그 수업을 그만두지 않는 게 좋다", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"should not quit", ko:"그만두지 않는 게 좋다", t:"verb"},
        {en:"the class", ko:"그 수업을", t:"obj"}]},
      {n:34, ctx:{en:"Guests wait at every station.", ko:"손님들이 모든 역에서 기다린다."}, full:"기차는 멈춰야 한다 (모든 역에서)", chunks:[
        {en:"Trains", ko:"기차는", t:"subj"},
        {en:"must stop", ko:"멈춰야 한다", t:"verb"},
        {en:"at every station", ko:"모든 역에서", t:"mod"}]},
      {n:35, ctx:{en:"The baby sleeps in the room.", ko:"그 아기는 그 방에서 잔다."}, full:"그 방은 따뜻한 게 좋다 (그 아기를 위해)", chunks:[
        {en:"The room", ko:"그 방은", t:"subj"},
        {en:"should be", ko:"~인 게 좋다", t:"verb"},
        {en:"warm", ko:"따뜻한", t:"comp"},
        {en:"for the baby", ko:"그 아기를 위해", t:"mod"}]},
      {n:36, ctx:{en:"The doctor studied the clue.", ko:"그 의사는 그 단서를 연구했다."}, full:"그 단서는 알려져 있음에 틀림없다 (그 의사에 의해)", chunks:[
        {en:"The clue", ko:"그 단서는", t:"subj"},
        {en:"must be known", ko:"알려져 있음에 틀림없다", t:"verb"},
        {en:"by the doctor", ko:"그 의사에 의해", t:"mod"}]},
      {n:37, ctx:{en:"The ache returns after sleep.", ko:"그 통증은 자고 나면 돌아온다."}, full:"환자들은 스트레칭하는 편이 낫다 (매일 아침)", chunks:[
        {en:"Patients", ko:"환자들은", t:"subj"},
        {en:"had better stretch", ko:"스트레칭하는 편이 낫다", t:"verb"},
        {en:"every morning", ko:"매일 아침", t:"mod"}]},
      {n:38, ctx:{en:"The schedule is clear.", ko:"그 일정은 여유가 있다."}, full:"그 팀은 서두르지 않는 게 좋다", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"should not hurry", ko:"서두르지 않는 게 좋다", t:"verb"}]},
      {n:39, ctx:{en:"The medicine worked before.", ko:"그 약은 전에 효과가 있었다."}, full:"그 약은 그 환자를 차분하게 만들 것 같다", chunks:[
        {en:"The medicine", ko:"그 약은", t:"subj"},
        {en:"is likely to make", ko:"만들 것 같다", t:"verb"},
        {en:"the patient", ko:"그 환자를", t:"obj"},
        {en:"calm", ko:"차분하게", t:"comp"}]},
      {n:40, ctx:{en:"The office is not open now.", ko:"그 사무실은 지금 열려 있지 않다."}, full:"그 손님들은 기다려야 한다 (그 문에서)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"have to wait", ko:"기다려야 한다", t:"verb"},
        {en:"at the gate", ko:"그 문에서", t:"mod"}]},
      {n:41, ctx:{en:"The gate does not examine bags.", ko:"그 문에서는 가방을 검사하지 않는다."}, full:"너는 여권을 가져올 필요 없다", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"do not need to bring", ko:"가져올 필요 없다", t:"verb"},
        {en:"a passport", ko:"여권을", t:"obj"}]},
      {n:42, ctx:{en:"The law is strict.", ko:"그 법은 엄격하다."}, full:"시민들은 그 법을 따라야 한다", chunks:[
        {en:"Citizens", ko:"시민들은", t:"subj"},
        {en:"must follow", ko:"따라야 한다", t:"verb"},
        {en:"the law", ko:"그 법을", t:"obj"}]},
      {n:43, ctx:{en:"The train departs soon.", ko:"그 기차는 곧 출발한다."}, full:"그 아이들은 서두르는 편이 낫다", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"had better hurry", ko:"서두르는 편이 낫다", t:"verb"}]},
      {n:44, ctx:{en:"Many patients arrived.", ko:"많은 환자가 도착했다."}, full:"그 의사는 모든 환자를 진찰해야 할 것이다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"will have to examine", ko:"진찰해야 할 것이다", t:"verb"},
        {en:"every patient", ko:"모든 환자를", t:"obj"}]},
      {n:45, ctx:{en:"Animals come to the gate.", ko:"동물들이 그 문으로 온다."}, full:"그 문은 열린 채로 두어지면 안 된다", chunks:[
        {en:"The gate", ko:"그 문은", t:"subj"},
        {en:"must not be left", ko:"두어지면 안 된다", t:"verb"},
        {en:"open", ko:"열린 채로", t:"comp"}]},
      {n:46, ctx:{en:"The customer cannot read the letter.", ko:"그 고객은 그 편지를 읽지 못한다."}, full:"그 편지는 번역되어야 한다", chunks:[
        {en:"The letter", ko:"그 편지는", t:"subj"},
        {en:"needs to be translated", ko:"번역되어야 한다", t:"verb"}]},
      {n:47, ctx:{en:"The nurse worked every morning.", ko:"그 간호사는 매일 아침 일했다."}, full:"그 간호사는 쉬어야 한다 (밤에)", chunks:[
        {en:"The nurse", ko:"그 간호사는", t:"subj"},
        {en:"ought to rest", ko:"쉬어야 한다", t:"verb"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:48, ctx:{en:"The ache returns at night.", ko:"그 통증은 밤에 돌아온다."}, full:"너는 그 약을 먹어야 한다 (오늘 밤)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"need to take", ko:"먹어야 한다", t:"verb"},
        {en:"the medicine", ko:"그 약을", t:"obj"},
        {en:"tonight", ko:"오늘 밤", t:"mod"}]},
      {n:49, ctx:{en:"The city requires a tax every season.", ko:"그 시는 매 계절 세금을 요구한다."}, full:"너는 그 세금을 내야 한다 (매 계절)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"must pay", ko:"내야 한다", t:"verb"},
        {en:"the tax", ko:"그 세금을", t:"obj"},
        {en:"every season", ko:"매 계절", t:"mod"}]},
      {n:50, ctx:{en:"The symptom is bad.", ko:"그 증상이 심하다."}, full:"그 환자는 힘든 운동을 피하는 게 좋다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"should avoid", ko:"피하는 게 좋다", t:"verb"},
        {en:"hard exercise", ko:"힘든 운동을", t:"obj"}]},
      {n:51, ctx:{en:"The medicine is new.", ko:"그 약은 새것이다."}, full:"그 약은 그 환자를 차분하게 만들지도 모른다", chunks:[
        {en:"The medicine", ko:"그 약은", t:"subj"},
        {en:"may make", ko:"만들지도 모른다", t:"verb"},
        {en:"the patient", ko:"그 환자를", t:"obj"},
        {en:"calm", ko:"차분하게", t:"comp"}]},
      {n:52, ctx:{en:"The engine burns.", ko:"그 엔진은 뜨겁게 타오른다."}, full:"너는 그 엔진을 만지면 안 된다", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"must not touch", ko:"만지면 안 된다", t:"verb"},
        {en:"the engine", ko:"그 엔진을", t:"obj"}]},
      {n:53, ctx:{en:"The room is warm.", ko:"그 방은 따뜻하다."}, full:"그 창문은 열린 채로 유지되어야 한다", chunks:[
        {en:"The window", ko:"그 창문은", t:"subj"},
        {en:"ought to be kept", ko:"유지되어야 한다", t:"verb"},
        {en:"open", ko:"열린 채로", t:"comp"}]},
      {n:54, ctx:{en:"The fever is not high now.", ko:"그 열은 지금 높지 않다."}, full:"그 열은 내릴지도 모른다 (오늘 밤)", chunks:[
        {en:"The fever", ko:"그 열은", t:"subj"},
        {en:"may fall", ko:"내릴지도 모른다", t:"verb"},
        {en:"tonight", ko:"오늘 밤", t:"mod"}]},
      {n:55, ctx:{en:"The night is cold.", ko:"밤이 춥다."}, full:"그 아이는 따뜻하게 유지되어야 한다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"should be kept", ko:"유지되어야 한다", t:"verb"},
        {en:"warm", ko:"따뜻하게", t:"comp"}]},
      {n:56, ctx:{en:"The fever grows at night.", ko:"그 열은 밤에 심해진다."}, full:"너는 그 약을 먹는 편이 낫다 (오늘 밤)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"had better take", ko:"먹는 편이 낫다", t:"verb"},
        {en:"the medicine", ko:"그 약을", t:"obj"},
        {en:"tonight", ko:"오늘 밤", t:"mod"}]},
      {n:57, ctx:{en:"The exercise seems hard.", ko:"그 운동은 어려워 보인다."}, full:"그 운동은 회피되어서는 안 된다", chunks:[
        {en:"The exercise", ko:"그 운동은", t:"subj"},
        {en:"should not be avoided", ko:"회피되어서는 안 된다", t:"verb"}]},
      {n:58, ctx:{en:"The patient has an ache now.", ko:"그 환자는 지금 통증이 있다."}, full:"그 환자는 그 약을 받아야 한다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"should be given", ko:"받아야 한다", t:"verb"},
        {en:"the medicine", ko:"그 약을", t:"obj"}]},
      {n:59, ctx:{en:"The child plays in the garden.", ko:"그 아이가 그 정원에서 논다."}, full:"그 아이는 열이 있을 리 없다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"cannot have", ko:"있을 리 없다", t:"verb"},
        {en:"a fever", ko:"열이", t:"obj"}]},
      {n:60, ctx:{en:"The story differs from the truth.", ko:"그 이야기는 진실과 다르다."}, full:"그 이야기는 사실일 리 없다", chunks:[
        {en:"The story", ko:"그 이야기는", t:"subj"},
        {en:"cannot be", ko:"~일 리 없다", t:"verb"},
        {en:"true", ko:"사실", t:"comp"}]},
      {n:61, ctx:{en:"The company was strict about the rule.", ko:"그 회사는 그 규정에 엄격했다."}, full:"그 규정은 지켜져야 했다 (모든 회원에 의해)", chunks:[
        {en:"The rule", ko:"그 규정은", t:"subj"},
        {en:"had to be followed", ko:"지켜져야 했다", t:"verb"},
        {en:"by every member", ko:"모든 회원에 의해", t:"mod"}]},
      {n:62, ctx:{en:"The child's face is red.", ko:"그 아이의 얼굴이 빨갛다."}, full:"그 증상은 열의 징후임에 틀림없다", chunks:[
        {en:"The symptom", ko:"그 증상은", t:"subj"},
        {en:"must be", ko:"~임에 틀림없다", t:"verb"},
        {en:"a sign of a fever", ko:"열의 징후", t:"comp"}]},
      {n:63, ctx:{en:"The teacher waits for the paper.", ko:"그 선생님이 그 서류를 기다린다."}, full:"그 서류는 제출되어야 한다 (그 주말 전에)", chunks:[
        {en:"The paper", ko:"그 서류는", t:"subj"},
        {en:"must be submitted", ko:"제출되어야 한다", t:"verb"},
        {en:"before the weekend", ko:"그 주말 전에", t:"mod"}]},
      {n:64, ctx:{en:"Animals enter the garden at night.", ko:"동물들이 밤에 그 정원에 들어온다."}, full:"그 문은 닫힌 채로 유지되어야 한다 (밤에)", chunks:[
        {en:"The gate", ko:"그 문은", t:"subj"},
        {en:"must be kept", ko:"유지되어야 한다", t:"verb"},
        {en:"closed", ko:"닫힌 채로", t:"comp"},
        {en:"at night", ko:"밤에", t:"mod"}]},
      {n:65, ctx:{en:"The patient sleeps now.", ko:"그 환자는 지금 자고 있다."}, full:"그 약이 그 환자를 차분하게 유지하고 있음에 틀림없다", chunks:[
        {en:"The medicine", ko:"그 약이", t:"subj"},
        {en:"must keep", ko:"유지하고 있음에 틀림없다", t:"verb"},
        {en:"the patient", ko:"그 환자를", t:"obj"},
        {en:"calm", ko:"차분하게", t:"comp"}]},
      {n:66, ctx:{en:"The guests left early.", ko:"그 손님들은 일찍 출발했다."}, full:"그 손님들은 도착할 것이다 (그 행사 전에)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"should arrive", ko:"도착할 것이다", t:"verb"},
        {en:"before the event", ko:"그 행사 전에", t:"mod"}]},
      {n:67, ctx:{en:"The children forgot the rule.", ko:"그 아이들이 그 규칙을 잊었다."}, full:"그 선생님은 그 규칙을 반복해야 한다", chunks:[
        {en:"The teacher", ko:"그 선생님은", t:"subj"},
        {en:"must repeat", ko:"반복해야 한다", t:"verb"},
        {en:"the rule", ko:"그 규칙을", t:"obj"}]},
      {n:68, ctx:{en:"The nurse visits every morning.", ko:"그 간호사는 매일 아침 방문한다."}, full:"그 환자는 조언을 받을지도 모른다 (내일)", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"might be given", ko:"받을지도 모른다", t:"verb"},
        {en:"advice", ko:"조언을", t:"obj"},
        {en:"tomorrow", ko:"내일", t:"mod"}]},
      {n:69, ctx:{en:"Children run into the street.", ko:"아이들이 도로로 뛰어든다."}, full:"그 규칙은 그 아이들을 안전하게 지켜야 한다", chunks:[
        {en:"The rule", ko:"그 규칙은", t:"subj"},
        {en:"must keep", ko:"지켜야 한다", t:"verb"},
        {en:"the children", ko:"그 아이들을", t:"obj"},
        {en:"safe", ko:"안전하게", t:"comp"}]},
      {n:70, ctx:{en:"The flight departs tomorrow.", ko:"그 항공편은 내일 출발한다."}, full:"그 요금은 납부되어야 한다 (그 항공편 전에)", chunks:[
        {en:"The fee", ko:"그 요금은", t:"subj"},
        {en:"must be paid", ko:"납부되어야 한다", t:"verb"},
        {en:"before the flight", ko:"그 항공편 전에", t:"mod"}]},
      {n:71, ctx:{en:"The symptom is strange.", ko:"그 증상은 이상하다."}, full:"의사들은 그 원인을 알지도 모른다", chunks:[
        {en:"Doctors", ko:"의사들은", t:"subj"},
        {en:"may know", ko:"알지도 모른다", t:"verb"},
        {en:"the cause", ko:"그 원인을", t:"obj"}]},
      {n:72, ctx:{en:"The doctor knows the symptom.", ko:"그 의사는 그 증상을 안다."}, full:"시민들은 그 의사의 조언을 따라야 한다", chunks:[
        {en:"Citizens", ko:"시민들은", t:"subj"},
        {en:"ought to follow", ko:"따라야 한다", t:"verb"},
        {en:"the advice of the doctor", ko:"그 의사의 조언을", t:"obj"}]},
      {n:73, ctx:{en:"The nurse gave the medicine an hour ago.", ko:"그 간호사가 한 시간 전에 그 약을 주었다."}, full:"그 약은 그 환자를 차분하게 유지할 것이다", chunks:[
        {en:"The medicine", ko:"그 약은", t:"subj"},
        {en:"should keep", ko:"유지할 것이다", t:"verb"},
        {en:"the patient", ko:"그 환자를", t:"obj"},
        {en:"calm", ko:"차분하게", t:"comp"}]},
      {n:74, ctx:{en:"The doctor examined the patient.", ko:"그 의사가 그 환자를 진찰했다."}, full:"그 의사는 그 답을 알고 있음에 틀림없다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"must know", ko:"알고 있음에 틀림없다", t:"verb"},
        {en:"the answer", ko:"그 답을", t:"obj"}]},
      {n:75, ctx:{en:"The doctor warned us.", ko:"그 의사가 우리에게 경고했다."}, full:"우리는 그 운동을 그만두지 않는 편이 낫다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"had better not quit", ko:"그만두지 않는 편이 낫다", t:"verb"},
        {en:"the exercise", ko:"그 운동을", t:"obj"}]},
      {n:76, ctx:{en:"The letter came from a strange city.", ko:"그 편지는 낯선 도시에서 왔다."}, full:"그 편지는 번역되어야 한다", chunks:[
        {en:"The letter", ko:"그 편지는", t:"subj"},
        {en:"has to be translated", ko:"번역되어야 한다", t:"verb"}]},
      {n:77, ctx:{en:"The train left the station on time.", ko:"그 기차는 정시에 그 역을 떠났다."}, full:"그 기차는 도착할 것이다 (정시에)", chunks:[
        {en:"The train", ko:"그 기차는", t:"subj"},
        {en:"should arrive", ko:"도착할 것이다", t:"verb"},
        {en:"on time", ko:"정시에", t:"mod"}]},
      {n:78, ctx:{en:"The exercise finished.", ko:"그 운동이 끝났다."}, full:"너는 스트레칭하는 게 좋다 (그 운동 후에)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"should stretch", ko:"스트레칭하는 게 좋다", t:"verb"},
        {en:"after the exercise", ko:"그 운동 후에", t:"mod"}]},
      {n:79, ctx:{en:"The doctor wrote a schedule for the medicine.", ko:"그 의사가 그 약의 복용 일정을 적어주었다."}, full:"그 약은 복용되어야 한다 (식후에)", chunks:[
        {en:"The medicine", ko:"그 약은", t:"subj"},
        {en:"should be taken", ko:"복용되어야 한다", t:"verb"},
        {en:"after a meal", ko:"식후에", t:"mod"}]},
      {n:80, ctx:{en:"The event is on the weekend.", ko:"그 행사는 주말에 있다."}, full:"그 팀은 등록해야 한다 (그 주말 전에)", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"has to register", ko:"등록해야 한다", t:"verb"},
        {en:"before the weekend", ko:"그 주말 전에", t:"mod"}]},
      {n:81, ctx:{en:"The noise causes an ache.", ko:"그 소음이 통증을 일으킨다."}, full:"너는 그 소음을 피하는 편이 낫다", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"had better avoid", ko:"피하는 편이 낫다", t:"verb"},
        {en:"the noise", ko:"그 소음을", t:"obj"}]},
      {n:82, ctx:{en:"The patient asks about the medicine.", ko:"그 환자가 그 약에 대해 묻는다."}, full:"간호사들은 그 환자에게 조언을 해주는 게 좋다", chunks:[
        {en:"Nurses", ko:"간호사들은", t:"subj"},
        {en:"should give", ko:"해주는 게 좋다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"advice", ko:"조언을", t:"obj"}]},
      {n:83, ctx:{en:"The room is cold.", ko:"그 방은 춥다."}, full:"그 환자는 따뜻하게 유지되어야 한다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"ought to be kept", ko:"유지되어야 한다", t:"verb"},
        {en:"warm", ko:"따뜻하게", t:"comp"}]},
      {n:84, ctx:{en:"The teacher moved the schedule.", ko:"그 선생님이 그 일정을 옮겼다."}, full:"나는 그 서류를 제출해야 한다 (내일)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"have to submit", ko:"제출해야 한다", t:"verb"},
        {en:"the paper", ko:"그 서류를", t:"obj"},
        {en:"tomorrow", ko:"내일", t:"mod"}]},
      {n:85, ctx:{en:"The team is not on the schedule.", ko:"그 팀은 그 일정표에 없다."}, full:"그 팀은 등록해야 한다 (그 주말 전에)", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"needs to register", ko:"등록해야 한다", t:"verb"},
        {en:"before the weekend", ko:"그 주말 전에", t:"mod"}]},
      {n:86, ctx:{en:"The patient ran for an hour.", ko:"그 환자는 한 시간 동안 뛰었다."}, full:"너는 쉬는 게 좋다 (그 운동 후에)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"should rest", ko:"쉬는 게 좋다", t:"verb"},
        {en:"after the exercise", ko:"그 운동 후에", t:"mod"}]},
      {n:87, ctx:{en:"The legs ache after sleep.", ko:"자고 나면 다리가 아프다."}, full:"너는 네 다리를 스트레칭해야 한다 (매일 아침)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"ought to stretch", ko:"스트레칭해야 한다", t:"verb"},
        {en:"your legs", ko:"네 다리를", t:"obj"},
        {en:"every morning", ko:"매일 아침", t:"mod"}]},
      {n:88, ctx:{en:"The company paid the tax for us.", ko:"그 회사가 우리 대신 그 세금을 냈다."}, full:"우리는 그 세금을 낼 필요 없었다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"did not have to pay", ko:"낼 필요 없었다", t:"verb"},
        {en:"the tax", ko:"그 세금을", t:"obj"}]},
      {n:89, ctx:{en:"The exercise was hard.", ko:"그 운동은 힘들었다."}, full:"그 환자는 쉬어야 한다 (그 운동 후에)", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"needs to rest", ko:"쉬어야 한다", t:"verb"},
        {en:"after the exercise", ko:"그 운동 후에", t:"mod"}]},
      {n:90, ctx:{en:"The train is late.", ko:"그 기차가 늦는다."}, full:"그 손님들은 도착할지도 모른다 (늦게)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"might arrive", ko:"도착할지도 모른다", t:"verb"},
        {en:"late", ko:"늦게", t:"mod"}]},
      {n:91, ctx:{en:"The class has no rule about the uniform.", ko:"그 반에는 유니폼에 관한 규칙이 없다."}, full:"그 아이는 유니폼을 입을 필요 없다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"does not have to wear", ko:"입을 필요 없다", t:"verb"},
        {en:"a uniform", ko:"유니폼을", t:"obj"}]},
      {n:92, ctx:{en:"The school has no uniform.", ko:"그 학교에는 유니폼이 없다."}, full:"그 아이는 유니폼을 입을 필요 없다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"does not need to wear", ko:"입을 필요 없다", t:"verb"},
        {en:"a uniform", ko:"유니폼을", t:"obj"}]},
      {n:93, ctx:{en:"The clue appeared after the symptom.", ko:"그 단서는 그 증상 뒤에 나타났다."}, full:"그 단서는 징후임에 틀림없다", chunks:[
        {en:"The clue", ko:"그 단서는", t:"subj"},
        {en:"must be", ko:"~임에 틀림없다", t:"verb"},
        {en:"a sign", ko:"징후", t:"comp"}]},
      {n:94, ctx:{en:"The fever began after the ache.", ko:"그 열은 그 통증 뒤에 시작되었다."}, full:"그 원인은 그 열일 리 없다", chunks:[
        {en:"The cause", ko:"그 원인은", t:"subj"},
        {en:"cannot be", ko:"~일 리 없다", t:"verb"},
        {en:"the fever", ko:"그 열", t:"comp"}]},
      {n:95, ctx:{en:"The office opens the gate early.", ko:"그 사무실은 그 문을 일찍 연다."}, full:"너는 기다릴 필요 없다 (그 문에서)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"do not have to wait", ko:"기다릴 필요 없다", t:"verb"},
        {en:"at the gate", ko:"그 문에서", t:"mod"}]},
      {n:96, ctx:{en:"The team needs every member.", ko:"그 팀은 모든 팀원이 필요하다."}, full:"너는 그 팀을 그만두지 않는 편이 낫다", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"had better not quit", ko:"그만두지 않는 편이 낫다", t:"verb"},
        {en:"the team", ko:"그 팀을", t:"obj"}]},
      {n:97, ctx:{en:"Patients arrive at the hospital.", ko:"환자들이 그 병원에 도착한다."}, full:"모든 손님은 마스크를 받아야 한다", chunks:[
        {en:"Every guest", ko:"모든 손님은", t:"subj"},
        {en:"must be given", ko:"받아야 한다", t:"verb"},
        {en:"a mask", ko:"마스크를", t:"obj"}]},
    ]},
    { id:"완료시제(1)", items:[
      {n:1, full:"그 바다는 계속 잔잔한 상태였다 (그 폭풍 이후로)", chunks:[
        {en:"The ocean", ko:"그 바다는", t:"subj"},
        {en:"has remained", ko:"계속 ~인 상태였다", t:"verb"},
        {en:"calm", ko:"잔잔한", t:"comp"},
        {en:"since the storm", ko:"그 폭풍 이후로", t:"mod"}]},
      {n:2, full:"그 비평가는 그의 기억을 회복했다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"has recovered", ko:"회복했다", t:"verb"},
        {en:"his memory", ko:"그의 기억을", t:"obj"}]},
      {n:3, full:"우리는 그 전체 계획을 이미 완료했다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"have already completed", ko:"이미 완료했다", t:"verb"},
        {en:"the whole plan", ko:"그 전체 계획을", t:"obj"}]},
      {n:4, ctx:{en:"The child never smiles now.", ko:"그 아이는 이제 전혀 웃지 않는다."}, full:"그 경험은 그 아이를 조용하게 만들었다", chunks:[
        {en:"The experience", ko:"그 경험은", t:"subj"},
        {en:"has made", ko:"만들었다", t:"verb"},
        {en:"the child", ko:"그 아이를", t:"obj"},
        {en:"quiet", ko:"조용하게", t:"comp"}]},
      {n:5, full:"그 아이들은 긴 휴일을 계속 보내 왔다 (그 행사 이후로)", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"have had", ko:"계속 보내 왔다", t:"verb"},
        {en:"a long holiday", ko:"긴 휴일을", t:"obj"},
        {en:"since the event", ko:"그 행사 이후로", t:"mod"}]},
      {n:6, ctx:{en:"The other islands lost their old songs.", ko:"다른 섬들은 그들의 옛 노래를 잃었다."}, full:"그 박물관은 그 섬의 문화를 지켜 왔다", chunks:[
        {en:"The museum", ko:"그 박물관은", t:"subj"},
        {en:"has kept", ko:"지켜 왔다", t:"verb"},
        {en:"the culture of the island", ko:"그 섬의 문화를", t:"obj"}]},
      {n:7, full:"그 열은 사라져 버렸다", chunks:[
        {en:"The fever", ko:"그 열은", t:"subj"},
        {en:"has gone", ko:"사라져 버렸다", t:"verb"}]},
      {n:8, full:"그 간호사는 그 환자에게 약을 계속 주어 왔다 (어제부터)", chunks:[
        {en:"The nurse", ko:"그 간호사는", t:"subj"},
        {en:"has given", ko:"계속 주어 왔다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"medicine", ko:"약을", t:"obj"},
        {en:"since yesterday", ko:"어제부터", t:"mod"}]},
      {n:9, full:"나의 아버지는 외국어를 배운 적 없다", chunks:[
        {en:"My father", ko:"나의 아버지는", t:"subj"},
        {en:"has never learned", ko:"배운 적 없다", t:"verb"},
        {en:"a foreign language", ko:"외국어를", t:"obj"}]},
      {n:10, full:"그 지붕은 수리되지 않았다", chunks:[
        {en:"The roof", ko:"그 지붕은", t:"subj"},
        {en:"hasn't been repaired", ko:"수리되지 않았다", t:"verb"}]},
      {n:11, full:"그 간호사는 그 약을 막 가져왔다", chunks:[
        {en:"The nurse", ko:"그 간호사는", t:"subj"},
        {en:"has just brought", ko:"막 가져왔다", t:"verb"},
        {en:"the medicine", ko:"그 약을", t:"obj"}]},
      {n:12, full:"그 아이들은 계속 자지 못하고 있다 (잘) (그 폭풍 이후로)", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"haven't been sleeping", ko:"계속 자지 못하고 있다", t:"verb"},
        {en:"well", ko:"잘", t:"mod"},
        {en:"since the storm", ko:"그 폭풍 이후로", t:"mod"}]},
      {n:13, full:"우리는 그 섬까지의 거리를 안 적이 없다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"have never known", ko:"안 적이 없다", t:"verb"},
        {en:"the distance to the island", ko:"그 섬까지의 거리를", t:"obj"}]},
      {n:14, full:"그 팀은 그 계획을 개선하지 않았다 (아직)", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"has not improved", ko:"개선하지 않았다", t:"verb"},
        {en:"the plan", ko:"그 계획을", t:"obj"},
        {en:"yet", ko:"아직", t:"mod"}]},
      {n:15, full:"나는 헤엄쳐 본 적 없다 (그 바다에서)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"have never swum", ko:"헤엄쳐 본 적 없다", t:"verb"},
        {en:"in the ocean", ko:"그 바다에서", t:"mod"}]},
      {n:16, full:"그 손님들은 무료 티켓을 받았다", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"have been given", ko:"받았다", t:"verb"},
        {en:"a free ticket", ko:"무료 티켓을", t:"obj"}]},
      {n:17, full:"그 운동선수들은 성공을 이루지 못했다", chunks:[
        {en:"The athletes", ko:"그 운동선수들은", t:"subj"},
        {en:"haven't achieved", ko:"이루지 못했다", t:"verb"},
        {en:"success", ko:"성공을", t:"obj"}]},
      {n:18, full:"나는 가 본 적 있다 (그 사원에) (전에)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"have been to", ko:"가 본 적 있다", t:"verb"},
        {en:"the temple", ko:"그 사원에", t:"mod"},
        {en:"before", ko:"전에", t:"mod"}]},
      {n:19, full:"그 서류는 막 제출되었다", chunks:[
        {en:"The paper", ko:"그 서류는", t:"subj"},
        {en:"has just been submitted", ko:"막 제출되었다", t:"verb"}]},
      {n:20, full:"나는 그 서류를 막 끝냈다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"have just finished", ko:"막 끝냈다", t:"verb"},
        {en:"the paper", ko:"그 서류를", t:"obj"}]},
      {n:21, full:"그 모험은 안전하지 않았다", chunks:[
        {en:"The adventure", ko:"그 모험은", t:"subj"},
        {en:"hasn't been", ko:"~이지 않았다", t:"verb"},
        {en:"safe", ko:"안전한", t:"comp"}]},
      {n:22, full:"나의 아버지는 나에게 티켓을 막 주었다", chunks:[
        {en:"My father", ko:"나의 아버지는", t:"subj"},
        {en:"has just given", ko:"막 주었다", t:"verb"},
        {en:"me", ko:"나에게", t:"obj"},
        {en:"a ticket", ko:"티켓을", t:"obj"}]},
      {n:23, full:"그 지붕은 막 덮였다 (눈으로)", chunks:[
        {en:"The roof", ko:"그 지붕은", t:"subj"},
        {en:"has just been covered", ko:"막 덮였다", t:"verb"},
        {en:"with snow", ko:"눈으로", t:"mod"}]},
      {n:24, full:"그 비평가는 쓴 적 없다 (그 섬의 문화에 대해)", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"hasn't written", ko:"쓴 적 없다", t:"verb"},
        {en:"about the culture of the island", ko:"그 섬의 문화에 대해", t:"mod"}]},
      {n:25, full:"그 폭풍들은 계속되고 있다 (그 주말 이후로)", chunks:[
        {en:"The storms", ko:"그 폭풍들은", t:"subj"},
        {en:"have been continuing", ko:"계속되고 있다", t:"verb"},
        {en:"since the weekend", ko:"그 주말 이후로", t:"mod"}]},
      {n:26, full:"나는 그 편지 전체를 이미 읽었다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"have already read", ko:"이미 읽었다", t:"verb"},
        {en:"the whole letter", ko:"그 편지 전체를", t:"obj"}]},
      {n:27, full:"나는 열이 계속 있어 왔다 (어제부터)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"have had", ko:"계속 있어 왔다", t:"verb"},
        {en:"a fever", ko:"열이", t:"obj"},
        {en:"since yesterday", ko:"어제부터", t:"mod"}]},
      {n:28, full:"그 회사는 그 계획을 개선해 왔다 (그 최근 사건 이후로)", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"has improved", ko:"개선해 왔다", t:"verb"},
        {en:"the plan", ko:"그 계획을", t:"obj"},
        {en:"since the recent event", ko:"그 최근 사건 이후로", t:"mod"}]},
      {n:29, full:"그 폭풍은 그 지붕 전체를 망가뜨려 버렸다", chunks:[
        {en:"The storm", ko:"그 폭풍은", t:"subj"},
        {en:"has ruined", ko:"망가뜨려 버렸다", t:"verb"},
        {en:"the whole roof", ko:"그 지붕 전체를", t:"obj"}]},
      {n:30, full:"그 폭풍들은 계속되어 왔다 (그 주말 이후로)", chunks:[
        {en:"The storms", ko:"그 폭풍들은", t:"subj"},
        {en:"have continued", ko:"계속되어 왔다", t:"verb"},
        {en:"since the weekend", ko:"그 주말 이후로", t:"mod"}]},
      {n:31, full:"그 날씨는 막 따뜻해졌다", chunks:[
        {en:"The weather", ko:"그 날씨는", t:"subj"},
        {en:"has just turned", ko:"막 ~해졌다", t:"verb"},
        {en:"warm", ko:"따뜻하게", t:"comp"}]},
      {n:32, full:"그 팀은 겨뤄 본 적 없다 (해외에서)", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"hasn't competed", ko:"겨뤄 본 적 없다", t:"verb"},
        {en:"abroad", ko:"해외에서", t:"mod"}]},
      {n:33, full:"그 시인은 천재라고 불려 왔다 (그 최근 모험 이후로)", chunks:[
        {en:"The poet", ko:"그 시인은", t:"subj"},
        {en:"has been called", ko:"불려 왔다", t:"verb"},
        {en:"a genius", ko:"천재라고", t:"comp"},
        {en:"since the recent adventure", ko:"그 최근 모험 이후로", t:"mod"}]},
      {n:34, full:"그 섬은 따뜻한 계절을 이어 왔다 (그 최근 폭풍 이후로)", chunks:[
        {en:"The island", ko:"그 섬은", t:"subj"},
        {en:"has had", ko:"이어 왔다", t:"verb"},
        {en:"a warm season", ko:"따뜻한 계절을", t:"obj"},
        {en:"since the recent storm", ko:"그 최근 폭풍 이후로", t:"mod"}]},
      {n:35, full:"나의 가족은 그 호텔을 운영해 오고 있다 (10년 동안)", chunks:[
        {en:"My family", ko:"나의 가족은", t:"subj"},
        {en:"has been running", ko:"운영해 오고 있다", t:"verb"},
        {en:"the hotel", ko:"그 호텔을", t:"obj"},
        {en:"for ten years", ko:"10년 동안", t:"mod"}]},
      {n:36, full:"그 편지는 번역되지 않았다 (아직)", chunks:[
        {en:"The letter", ko:"그 편지는", t:"subj"},
        {en:"has not been translated", ko:"번역되지 않았다", t:"verb"},
        {en:"yet", ko:"아직", t:"mod"}]},
      {n:37, full:"그 환자는 회복했다 (그 열에서)", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"has recovered", ko:"회복했다", t:"verb"},
        {en:"from the fever", ko:"그 열에서", t:"mod"}]},
      {n:38, full:"그 기차는 이미 떠났다", chunks:[
        {en:"The train", ko:"그 기차는", t:"subj"},
        {en:"has already left", ko:"이미 떠났다", t:"verb"}]},
      {n:39, full:"우리는 그 지붕을 수리하지 않았다 (아직)", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"haven't repaired", ko:"수리하지 않았다", t:"verb"},
        {en:"the roof", ko:"그 지붕을", t:"obj"},
        {en:"yet", ko:"아직", t:"mod"}]},
      {n:40, full:"우리는 외국인 선생님을 두어 왔다 (한 달 동안)", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"'ve had", ko:"두어 왔다", t:"verb"},
        {en:"a foreign teacher", ko:"외국인 선생님을", t:"obj"},
        {en:"for a month", ko:"한 달 동안", t:"mod"}]},
      {n:41, full:"그 사원은 깨끗하게 유지되어 왔다 (그 휴일 이후로)", chunks:[
        {en:"The temple", ko:"그 사원은", t:"subj"},
        {en:"has been kept", ko:"유지되어 왔다", t:"verb"},
        {en:"clean", ko:"깨끗하게", t:"comp"},
        {en:"since the holiday", ko:"그 휴일 이후로", t:"mod"}]},
      {n:42, full:"그 팀들은 그 프로젝트를 이미 완료했다", chunks:[
        {en:"The teams", ko:"그 팀들은", t:"subj"},
        {en:"have already completed", ko:"이미 완료했다", t:"verb"},
        {en:"the project", ko:"그 프로젝트를", t:"obj"}]},
      {n:43, full:"그 고객은 무료 티켓을 막 받았다", chunks:[
        {en:"The customer", ko:"그 고객은", t:"subj"},
        {en:"has just been sent", ko:"막 받았다", t:"verb"},
        {en:"a free ticket", ko:"무료 티켓을", t:"obj"}]},
      {n:44, full:"그 손님들은 막 도착했다 (그 호텔에)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"have just arrived", ko:"막 도착했다", t:"verb"},
        {en:"at the hotel", ko:"그 호텔에", t:"mod"}]},
      {n:45, full:"그 폭풍은 이미 지나갔다", chunks:[
        {en:"The storm", ko:"그 폭풍은", t:"subj"},
        {en:"has already passed", ko:"이미 지나갔다", t:"verb"}]},
      {n:46, full:"그 손님들은 가 버렸다 (해외로)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"have gone", ko:"가 버렸다", t:"verb"},
        {en:"abroad", ko:"해외로", t:"mod"}]},
      {n:47, full:"그 의사는 그 환자를 차분하게 유지해 왔다 (그 아침부터)", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"has kept", ko:"유지해 왔다", t:"verb"},
        {en:"the patient", ko:"그 환자를", t:"obj"},
        {en:"calm", ko:"차분하게", t:"comp"},
        {en:"since the morning", ko:"그 아침부터", t:"mod"}]},
      {n:48, full:"그 의사는 그 환자를 진찰하지 않았다 (아직)", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"has not examined", ko:"진찰하지 않았다", t:"verb"},
        {en:"the patient", ko:"그 환자를", t:"obj"},
        {en:"yet", ko:"아직", t:"mod"}]},
      {n:49, full:"우리는 경기를 져 본 적 없다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"'ve never lost", ko:"져 본 적 없다", t:"verb"},
        {en:"a game", ko:"경기를", t:"obj"}]},
      {n:50, full:"그 아이들은 안전하게 지켜져 왔다 (그 폭풍 이후로)", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"have been kept", ko:"지켜져 왔다", t:"verb"},
        {en:"safe", ko:"안전하게", t:"comp"},
        {en:"since the storm", ko:"그 폭풍 이후로", t:"mod"}]},
      {n:51, full:"그 사원은 서 있어 왔다 (그 산 위에) (내가 태어난 이후로)", chunks:[
        {en:"The temple", ko:"그 사원은", t:"subj"},
        {en:"has stood", ko:"서 있어 왔다", t:"verb"},
        {en:"on the mountain", ko:"그 산 위에", t:"mod"},
        {en:"since my birth", ko:"내가 태어난 이후로", t:"mod"}]},
      {n:52, full:"그 의사는 그 환자를 진찰해 오고 있다 (그 아침부터)", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"has been examining", ko:"진찰해 오고 있다", t:"verb"},
        {en:"the patient", ko:"그 환자를", t:"obj"},
        {en:"since the morning", ko:"그 아침부터", t:"mod"}]},
      {n:53, ctx:{en:"Foreign guests arrive every morning.", ko:"외국인 손님들이 매일 아침 도착한다."}, full:"그 섬은 외국 시장이 되었다", chunks:[
        {en:"The island", ko:"그 섬은", t:"subj"},
        {en:"has become", ko:"~이 되었다", t:"verb"},
        {en:"a foreign market", ko:"외국 시장", t:"comp"}]},
      {n:54, full:"그 박물관은 문 닫은 적 없다 (휴일에)", chunks:[
        {en:"The museum", ko:"그 박물관은", t:"subj"},
        {en:"has never closed", ko:"문 닫은 적 없다", t:"verb"},
        {en:"on a holiday", ko:"휴일에", t:"mod"}]},
      {n:55, full:"그 아이들은 외국어 책을 받았다", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"have been given", ko:"받았다", t:"verb"},
        {en:"a foreign language book", ko:"외국어 책을", t:"obj"}]},
      {n:56, full:"그 언어는 가르쳐진 적 없다 (이 학교에서)", chunks:[
        {en:"The language", ko:"그 언어는", t:"subj"},
        {en:"has never been taught", ko:"가르쳐진 적 없다", t:"verb"},
        {en:"in this school", ko:"이 학교에서", t:"mod"}]},
      {n:57, full:"나는 그 바다를 본 적 없다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"have never seen", ko:"본 적 없다", t:"verb"},
        {en:"the ocean", ko:"그 바다를", t:"obj"}]},
      {n:58, full:"그 사원은 서 있어 왔다 (그 도시에서 먼 거리에)", chunks:[
        {en:"The temple", ko:"그 사원은", t:"subj"},
        {en:"has stood", ko:"서 있어 왔다", t:"verb"},
        {en:"at a long distance from the city", ko:"그 도시에서 먼 거리에", t:"mod"}]},
      {n:59, ctx:{en:"Patients come from every city now.", ko:"이제 모든 도시에서 환자들이 온다."}, full:"의사들은 성공을 이루었다 (그 병원 전체에서)", chunks:[
        {en:"Doctors", ko:"의사들은", t:"subj"},
        {en:"have achieved", ko:"이루었다", t:"verb"},
        {en:"success", ko:"성공을", t:"obj"},
        {en:"in the whole hospital", ko:"그 병원 전체에서", t:"mod"}]},
      {n:60, full:"그 팀들은 그 프로젝트를 이어 오지 않았다 (그 행사 이후로)", chunks:[
        {en:"The teams", ko:"그 팀들은", t:"subj"},
        {en:"haven't continued", ko:"이어 오지 않았다", t:"verb"},
        {en:"the project", ko:"그 프로젝트를", t:"obj"},
        {en:"since the event", ko:"그 행사 이후로", t:"mod"}]},
      {n:61, full:"그 회사는 그 고객에게 무료 티켓을 준 적 없다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"hasn't given", ko:"준 적 없다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"a free ticket", ko:"무료 티켓을", t:"obj"}]},
      {n:62, full:"그 날씨는 이미 따뜻해졌다", chunks:[
        {en:"The weather", ko:"그 날씨는", t:"subj"},
        {en:"has already become", ko:"이미 ~해졌다", t:"verb"},
        {en:"warm", ko:"따뜻하게", t:"comp"}]},
      {n:63, full:"나는 그 산을 올라 본 적 있다 (전에)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"'ve climbed", ko:"올라 본 적 있다", t:"verb"},
        {en:"the mountain", ko:"그 산을", t:"obj"},
        {en:"before", ko:"전에", t:"mod"}]},
      {n:64, full:"나의 가족은 그 호텔을 소유해 왔다 (지난 계절부터)", chunks:[
        {en:"My family", ko:"나의 가족은", t:"subj"},
        {en:"has owned", ko:"소유해 왔다", t:"verb"},
        {en:"the hotel", ko:"그 호텔을", t:"obj"},
        {en:"since the past season", ko:"지난 계절부터", t:"mod"}]},
      {n:65, full:"나는 내 여권을 잃어버렸다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"'ve lost", ko:"잃어버렸다", t:"verb"},
        {en:"my passport", ko:"내 여권을", t:"obj"}]},
      {n:66, full:"그 시장은 열지 않았다 (아직)", chunks:[
        {en:"The market", ko:"그 시장은", t:"subj"},
        {en:"has not opened", ko:"열지 않았다", t:"verb"},
        {en:"yet", ko:"아직", t:"mod"}]},
      {n:67, full:"나는 그런 사원을 본 적 없다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"'ve never seen", ko:"본 적 없다", t:"verb"},
        {en:"such a temple", ko:"그런 사원을", t:"obj"}]},
      {n:68, full:"그 날씨는 따뜻하지 않았다 (그 주말 이후로)", chunks:[
        {en:"The weather", ko:"그 날씨는", t:"subj"},
        {en:"hasn't been", ko:"~이지 않았다", t:"verb"},
        {en:"warm", ko:"따뜻한", t:"comp"},
        {en:"since the weekend", ko:"그 주말 이후로", t:"mod"}]},
      {n:69, full:"그 박물관은 닫혀 있어 왔다 (그 폭풍 이후로)", chunks:[
        {en:"The museum", ko:"그 박물관은", t:"subj"},
        {en:"has been closed", ko:"닫혀 있어 왔다", t:"verb"},
        {en:"since the storm", ko:"그 폭풍 이후로", t:"mod"}]},
      {n:70, full:"그 손님들은 그런 바다를 본 적 없다", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"have never seen", ko:"본 적 없다", t:"verb"},
        {en:"such an ocean", ko:"그런 바다를", t:"obj"}]},
      {n:71, full:"나의 누나는 가 본 적 없다 (외국 섬에)", chunks:[
        {en:"My sister", ko:"나의 누나는", t:"subj"},
        {en:"hasn't been to", ko:"가 본 적 없다", t:"verb"},
        {en:"a foreign island", ko:"외국 섬에", t:"mod"}]},
      {n:72, full:"그 비평가는 외국 문화를 연구한 적 없다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"hasn't studied", ko:"연구한 적 없다", t:"verb"},
        {en:"a foreign culture", ko:"외국 문화를", t:"obj"}]},
      {n:73, full:"나는 머물러 왔다 (이 도시에) (내가 태어난 이후로)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"have stayed", ko:"머물러 왔다", t:"verb"},
        {en:"in this city", ko:"이 도시에", t:"mod"},
        {en:"since my birth", ko:"내가 태어난 이후로", t:"mod"}]},
      {n:74, full:"그 모험은 그 소년에게 새로운 경험을 주었다", chunks:[
        {en:"The adventure", ko:"그 모험은", t:"subj"},
        {en:"has given", ko:"주었다", t:"verb"},
        {en:"the boy", ko:"그 소년에게", t:"obj"},
        {en:"a new experience", ko:"새로운 경험을", t:"obj"}]},
      {n:75, full:"그 도시 전체는 망가져 버렸다 (그 폭풍에 의해)", chunks:[
        {en:"The whole city", ko:"그 도시 전체는", t:"subj"},
        {en:"has been ruined", ko:"망가져 버렸다", t:"verb"},
        {en:"by the storm", ko:"그 폭풍에 의해", t:"mod"}]},
      {n:76, full:"그 소년은 그런 모험을 해 본 적 없다", chunks:[
        {en:"The boy", ko:"그 소년은", t:"subj"},
        {en:"has never had", ko:"해 본 적 없다", t:"verb"},
        {en:"such an adventure", ko:"그런 모험을", t:"obj"}]},
      {n:77, full:"나는 기다려 오고 있다 (그 문에서) (두 시간 동안)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"have been waiting", ko:"기다려 오고 있다", t:"verb"},
        {en:"at the gate", ko:"그 문에서", t:"mod"},
        {en:"for two hours", ko:"두 시간 동안", t:"mod"}]},
      {n:78, full:"그 비는 그 도로를 이미 젖게 만들었다", chunks:[
        {en:"The rain", ko:"그 비는", t:"subj"},
        {en:"has already made", ko:"이미 만들었다", t:"verb"},
        {en:"the road", ko:"그 도로를", t:"obj"},
        {en:"wet", ko:"젖게", t:"comp"}]},
    ]},
    { id:"완료시제(2)", items:[
      {n:1, full:"나는 외국 잡지를 모은 적 없다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"haven't collected", ko:"모은 적 없다", t:"verb"},
        {en:"a foreign magazine", ko:"외국 잡지를", t:"obj"}]},
      {n:2, full:"그 작가는 가 버렸다 (해외로)", chunks:[
        {en:"The author", ko:"그 작가는", t:"subj"},
        {en:"has gone", ko:"가 버렸다", t:"verb"},
        {en:"abroad", ko:"해외로", t:"mod"}]},
      {n:3, full:"그 작가는 그 소설을 써 왔다 (지난 계절부터)", chunks:[
        {en:"The author", ko:"그 작가는", t:"subj"},
        {en:"has written", ko:"써 왔다", t:"verb"},
        {en:"the novel", ko:"그 소설을", t:"obj"},
        {en:"since the past season", ko:"지난 계절부터", t:"mod"}]},
      {n:4, full:"그 일기는 안전하게 보관되어 왔다 (그 폭풍 이후로)", chunks:[
        {en:"The diary", ko:"그 일기는", t:"subj"},
        {en:"has been kept", ko:"보관되어 왔다", t:"verb"},
        {en:"safe", ko:"안전하게", t:"comp"},
        {en:"since the storm", ko:"그 폭풍 이후로", t:"mod"}]},
      {n:5, full:"그 작가는 막 떠났다 (그 박물관을)", chunks:[
        {en:"The author", ko:"그 작가는", t:"subj"},
        {en:"has just left", ko:"막 떠났다", t:"verb"},
        {en:"the museum", ko:"그 박물관을", t:"mod"}]},
      {n:6, full:"그 회사는 그 고객에게 잡지를 보내 왔다 (지난 계절부터)", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"has sent", ko:"보내 왔다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"a magazine", ko:"잡지를", t:"obj"},
        {en:"since the past season", ko:"지난 계절부터", t:"mod"}]},
      {n:7, full:"그 잡지들은 도착하지 않았다 (아직)", chunks:[
        {en:"The magazines", ko:"그 잡지들은", t:"subj"},
        {en:"haven't arrived", ko:"도착하지 않았다", t:"verb"},
        {en:"yet", ko:"아직", t:"mod"}]},
      {n:8, full:"그 작가는 그 소설을 완성했다", chunks:[
        {en:"The author", ko:"그 작가는", t:"subj"},
        {en:"has completed", ko:"완성했다", t:"verb"},
        {en:"the novel", ko:"그 소설을", t:"obj"}]},
      {n:9, ctx:{en:"The critic asks the same question again.", ko:"그 비평가는 같은 질문을 또 한다."}, full:"그 비평가는 그 이야기 전체를 잊어버렸다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"has forgotten", ko:"잊어버렸다", t:"verb"},
        {en:"the whole story", ko:"그 이야기 전체를", t:"obj"}]},
      {n:10, full:"그 작가는 새 소설을 막 출간했다", chunks:[
        {en:"The author", ko:"그 작가는", t:"subj"},
        {en:"has just published", ko:"막 출간했다", t:"verb"},
        {en:"a new novel", ko:"새 소설을", t:"obj"}]},
      {n:11, full:"그 잡지는 발행되어 왔다 (내가 태어난 이후로)", chunks:[
        {en:"The magazine", ko:"그 잡지는", t:"subj"},
        {en:"has been published", ko:"발행되어 왔다", t:"verb"},
        {en:"since my birth", ko:"내가 태어난 이후로", t:"mod"}]},
      {n:12, full:"나는 일기를 써 본 적 없다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"'ve never kept", ko:"써 본 적 없다", t:"verb"},
        {en:"a diary", ko:"일기를", t:"obj"}]},
      {n:13, full:"나는 내 카메라를 잃어버렸다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"'ve lost", ko:"잃어버렸다", t:"verb"},
        {en:"my camera", ko:"내 카메라를", t:"obj"}]},
      {n:14, full:"나는 그 시 전체를 이미 읽었다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"have already read", ko:"이미 읽었다", t:"verb"},
        {en:"the whole poem", ko:"그 시 전체를", t:"obj"}]},
      {n:15, full:"그 비평가는 그 기사를 쓰지 않았다 (아직)", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"hasn't written", ko:"쓰지 않았다", t:"verb"},
        {en:"the article", ko:"그 기사를", t:"obj"},
        {en:"yet", ko:"아직", t:"mod"}]},
      {n:16, ctx:{en:"The children sleep well now.", ko:"그 아이들은 이제 잘 잔다."}, full:"그 시들은 그 아이들을 차분하게 만들어 왔다", chunks:[
        {en:"The poems", ko:"그 시들은", t:"subj"},
        {en:"have kept", ko:"유지해 왔다", t:"verb"},
        {en:"the children", ko:"그 아이들을", t:"obj"},
        {en:"calm", ko:"차분하게", t:"comp"}]},
      {n:17, full:"나의 아버지는 여행해 본 적 없다 (해외로)", chunks:[
        {en:"My father", ko:"나의 아버지는", t:"subj"},
        {en:"hasn't traveled", ko:"여행해 본 적 없다", t:"verb"},
        {en:"abroad", ko:"해외로", t:"mod"}]},
      {n:18, ctx:{en:"Every critic knows the story now.", ko:"이제 모든 비평가가 그 이야기를 안다."}, full:"그 소설은 전설이라고 불려 왔다", chunks:[
        {en:"The novel", ko:"그 소설은", t:"subj"},
        {en:"has been called", ko:"불려 왔다", t:"verb"},
        {en:"a legend", ko:"전설이라고", t:"comp"}]},
      {n:19, full:"그 기사들은 놓여 있어 왔다 (그 책상 위에) (어제부터)", chunks:[
        {en:"The articles", ko:"그 기사들은", t:"subj"},
        {en:"have stayed", ko:"놓여 있어 왔다", t:"verb"},
        {en:"on the desk", ko:"그 책상 위에", t:"mod"},
        {en:"since yesterday", ko:"어제부터", t:"mod"}]},
      {n:20, full:"그 카메라들은 분실된 상태였다 (그 휴일 이후로)", chunks:[
        {en:"The cameras", ko:"그 카메라들은", t:"subj"},
        {en:"have been lost", ko:"분실된 상태였다", t:"verb"},
        {en:"since the holiday", ko:"그 휴일 이후로", t:"mod"}]},
      {n:21, full:"나의 누나는 일기를 써 왔다 (그 휴일 이후로)", chunks:[
        {en:"My sister", ko:"나의 누나는", t:"subj"},
        {en:"has kept", ko:"써 왔다", t:"verb"},
        {en:"a diary", ko:"일기를", t:"obj"},
        {en:"since the holiday", ko:"그 휴일 이후로", t:"mod"}]},
      {n:22, full:"그 소설은 그 작가를 전설로 만들었다", chunks:[
        {en:"The novel", ko:"그 소설은", t:"subj"},
        {en:"has made", ko:"만들었다", t:"verb"},
        {en:"the author", ko:"그 작가를", t:"obj"},
        {en:"a legend", ko:"전설로", t:"comp"}]},
      {n:23, full:"그 폭풍은 그 잡지 전체를 망가뜨려 버렸다", chunks:[
        {en:"The storm", ko:"그 폭풍은", t:"subj"},
        {en:"has ruined", ko:"망가뜨려 버렸다", t:"verb"},
        {en:"the whole magazine", ko:"그 잡지 전체를", t:"obj"}]},
      {n:24, full:"우리는 그런 광경을 본 적 없다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"have never seen", ko:"본 적 없다", t:"verb"},
        {en:"such a view", ko:"그런 광경을", t:"obj"}]},
      {n:25, full:"우리는 그 기사들을 모으지 않았다 (아직)", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"haven't collected", ko:"모으지 않았다", t:"verb"},
        {en:"the articles", ko:"그 기사들을", t:"obj"},
        {en:"yet", ko:"아직", t:"mod"}]},
      {n:26, full:"나의 누나는 나에게 그녀의 일기를 막 주었다", chunks:[
        {en:"My sister", ko:"나의 누나는", t:"subj"},
        {en:"has just given", ko:"막 주었다", t:"verb"},
        {en:"me", ko:"나에게", t:"obj"},
        {en:"her diary", ko:"그녀의 일기를", t:"obj"}]},
      {n:27, full:"그 소설은 막 출간되었다", chunks:[
        {en:"The novel", ko:"그 소설은", t:"subj"},
        {en:"has just been published", ko:"막 출간되었다", t:"verb"}]},
      {n:28, full:"그 광경은 계속 맑았다 (그 폭풍 이후로)", chunks:[
        {en:"The view", ko:"그 광경은", t:"subj"},
        {en:"has been", ko:"계속 ~였다", t:"verb"},
        {en:"clear", ko:"맑은", t:"comp"},
        {en:"since the storm", ko:"그 폭풍 이후로", t:"mod"}]},
      {n:29, full:"그 작가는 시를 출간한 적 없다", chunks:[
        {en:"The author", ko:"그 작가는", t:"subj"},
        {en:"hasn't published", ko:"출간한 적 없다", t:"verb"},
        {en:"a poem", ko:"시를", t:"obj"}]},
      {n:30, full:"그 비평가는 그 기사를 끝냈다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"has finished", ko:"끝냈다", t:"verb"},
        {en:"the article", ko:"그 기사를", t:"obj"}]},
      {n:31, full:"나는 오래된 카메라를 모아 왔다 (오랫동안)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"have collected", ko:"모아 왔다", t:"verb"},
        {en:"old cameras", ko:"오래된 카메라를", t:"obj"},
        {en:"for a long time", ko:"오랫동안", t:"mod"}]},
      {n:32, full:"그 시는 번역되지 않았다 (아직)", chunks:[
        {en:"The poem", ko:"그 시는", t:"subj"},
        {en:"has not been translated", ko:"번역되지 않았다", t:"verb"},
        {en:"yet", ko:"아직", t:"mod"}]},
      {n:33, full:"그 비평가들은 그 소설을 읽어 본 적 있다 (전에)", chunks:[
        {en:"The critics", ko:"그 비평가들은", t:"subj"},
        {en:"have read", ko:"읽어 본 적 있다", t:"verb"},
        {en:"the novel", ko:"그 소설을", t:"obj"},
        {en:"before", ko:"전에", t:"mod"}]},
      {n:34, full:"그 기사들은 모아진 적 없다", chunks:[
        {en:"The articles", ko:"그 기사들은", t:"subj"},
        {en:"have never been collected", ko:"모아진 적 없다", t:"verb"}]},
      {n:35, full:"그 작가는 답을 받지 못했다", chunks:[
        {en:"The author", ko:"그 작가는", t:"subj"},
        {en:"hasn't been given", ko:"받지 못했다", t:"verb"},
        {en:"an answer", ko:"답을", t:"obj"}]},
      {n:36, full:"그 잡지는 나타난 적 없다 (이 섬에)", chunks:[
        {en:"The magazine", ko:"그 잡지는", t:"subj"},
        {en:"has never appeared", ko:"나타난 적 없다", t:"verb"},
        {en:"on this island", ko:"이 섬에", t:"mod"}]},
      {n:37, full:"그 잡지는 판매되어 왔다 (그 역에서) (지난달부터)", chunks:[
        {en:"The magazine", ko:"그 잡지는", t:"subj"},
        {en:"has been sold", ko:"판매되어 왔다", t:"verb"},
        {en:"at the station", ko:"그 역에서", t:"mod"},
        {en:"since the past month", ko:"지난달부터", t:"mod"}]},
      {n:38, full:"그 광경은 이미 맑아졌다", chunks:[
        {en:"The view", ko:"그 광경은", t:"subj"},
        {en:"has already become", ko:"이미 ~해졌다", t:"verb"},
        {en:"clear", ko:"맑게", t:"comp"}]},
    ]},
    { id:"완료시제(3)", items:[
      {n:1, full:"나는 그 소설을 끝내 놓을 것이다 (다음 달까지는)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"'ll have finished", ko:"끝내 놓을 것이다", t:"verb"},
        {en:"the novel", ko:"그 소설을", t:"obj"},
        {en:"by next month", ko:"다음 달까지는", t:"mod"}]},
      {n:2, ctx:{en:"The hotel was busy that evening.", ko:"그 호텔은 그날 저녁 붐볐다."}, full:"그 손님들은 모이지 않았었다 (아직)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"hadn't gathered", ko:"모이지 않았었다", t:"verb"},
        {en:"yet", ko:"아직", t:"mod"}]},
      {n:3, ctx:{en:"The child slept well that night.", ko:"그 아이는 그날 밤 잘 잤다."}, full:"나의 아버지는 그 아이에게 옛이야기를 해 주었었다", chunks:[
        {en:"My father", ko:"나의 아버지는", t:"subj"},
        {en:"had told", ko:"해 주었었다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"an old story", ko:"옛이야기를", t:"obj"}]},
      {n:4, full:"그 손님들은 조용하게 유지되어 있었다 (한 시간 동안)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"had been kept", ko:"유지되어 있었다", t:"verb"},
        {en:"quiet", ko:"조용하게", t:"comp"},
        {en:"for an hour", ko:"한 시간 동안", t:"mod"}]},
      {n:5, full:"그 회사는 그 전체 일정을 지켜 오고 있었다 (지난 계절부터)", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"had kept", ko:"지켜 오고 있었다", t:"verb"},
        {en:"the entire schedule", ko:"그 전체 일정을", t:"obj"},
        {en:"since the previous season", ko:"지난 계절부터", t:"mod"}]},
      {n:6, full:"그 전체 일정은 확정되어 있을 것이다 (다음 달까지는)", chunks:[
        {en:"The entire schedule", ko:"그 전체 일정은", t:"subj"},
        {en:"will have been confirmed", ko:"확정되어 있을 것이다", t:"verb"},
        {en:"by next month", ko:"다음 달까지는", t:"mod"}]},
      {n:7, full:"그 파티는 계속되었었다 (세 시간 동안)", chunks:[
        {en:"The party", ko:"그 파티는", t:"subj"},
        {en:"had continued", ko:"계속되었었다", t:"verb"},
        {en:"for three hours", ko:"세 시간 동안", t:"mod"}]},
      {n:8, full:"나의 형은 그의 아기를 보지 못했을 것이다 (단 한 번도) (다음 달까지는)", chunks:[
        {en:"My brother", ko:"나의 형은", t:"subj"},
        {en:"won't have seen", ko:"보지 못했을 것이다", t:"verb"},
        {en:"his baby", ko:"그의 아기를", t:"obj"},
        {en:"even once", ko:"단 한 번도", t:"mod"},
        {en:"by next month", ko:"다음 달까지는", t:"mod"}]},
      {n:9, full:"그 축제는 계속되었었다 (새벽까지)", chunks:[
        {en:"The festival", ko:"그 축제는", t:"subj"},
        {en:"had continued", ko:"계속되었었다", t:"verb"},
        {en:"until dawn", ko:"새벽까지", t:"mod"}]},
      {n:10, full:"그 회사는 그 결혼식 전체를 준비해 놓을 것이다 (다음 계절까지는)", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"will have arranged", ko:"준비해 놓을 것이다", t:"verb"},
        {en:"the entire wedding", ko:"그 결혼식 전체를", t:"obj"},
        {en:"by next season", ko:"다음 계절까지는", t:"mod"}]},
      {n:11, ctx:{en:"The new leader found the schedule on the desk.", ko:"그 새 대표는 그 책상 위에서 그 일정표를 발견했다."}, full:"그 전 대표는 그 전체 일정을 이미 준비해 놓았었다", chunks:[
        {en:"The former leader", ko:"그 전 대표는", t:"subj"},
        {en:"had already arranged", ko:"이미 준비해 놓았었다", t:"verb"},
        {en:"the entire schedule", ko:"그 전체 일정을", t:"obj"}]},
      {n:12, full:"그 회사는 결혼식을 미룬 적이 없었다 (전에는)", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"hadn't delayed", ko:"미룬 적이 없었다", t:"verb"},
        {en:"a wedding", ko:"결혼식을", t:"obj"},
        {en:"before", ko:"전에는", t:"mod"}]},
      {n:13, ctx:{en:"The company gives every member an award after ten years.", ko:"그 회사는 10년 후 모든 사원에게 상을 준다."}, full:"나의 형은 일해 온 게 되지 않을 것이다 (그 회사에서) (10년 동안) (다음 계절까지는)", chunks:[
        {en:"My brother", ko:"나의 형은", t:"subj"},
        {en:"won't have worked", ko:"일해 온 게 되지 않을 것이다", t:"verb"},
        {en:"at the company", ko:"그 회사에서", t:"mod"},
        {en:"for ten years", ko:"10년 동안", t:"mod"},
        {en:"by next season", ko:"다음 계절까지는", t:"mod"}]},
      {n:14, full:"그 회사는 그 일정을 확정해 놓지 않았을 것이다 (내일까지는)", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"won't have confirmed", ko:"확정해 놓지 않았을 것이다", t:"verb"},
        {en:"the schedule", ko:"그 일정을", t:"obj"},
        {en:"by tomorrow", ko:"내일까지는", t:"mod"}]},
      {n:15, full:"그 문은 닫힌 채로 유지되어 있을 것이다 (새벽까지)", chunks:[
        {en:"The gate", ko:"그 문은", t:"subj"},
        {en:"will have been kept", ko:"유지되어 있을 것이다", t:"verb"},
        {en:"closed", ko:"닫힌 채로", t:"comp"},
        {en:"until dawn", ko:"새벽까지", t:"mod"}]},
      {n:16, full:"그 회사는 외국인 대표를 임명한 적이 없었다 (전에는)", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"had never appointed", ko:"임명한 적이 없었다", t:"verb"},
        {en:"a foreign leader", ko:"외국인 대표를", t:"obj"},
        {en:"before", ko:"전에는", t:"mod"}]},
      {n:17, ctx:{en:"No one came to the hotel that night.", ko:"그날 밤 아무도 그 호텔에 오지 않았다."}, full:"그 회사는 그 파티를 취소했었다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"had cancelled", ko:"취소했었다", t:"verb"},
        {en:"the party", ko:"그 파티를", t:"obj"}]},
      {n:18, full:"그 방은 따뜻하게 유지되어 있을 것이다 (저녁까지)", chunks:[
        {en:"The room", ko:"그 방은", t:"subj"},
        {en:"will have been kept", ko:"유지되어 있을 것이다", t:"verb"},
        {en:"warm", ko:"따뜻하게", t:"comp"},
        {en:"until the evening", ko:"저녁까지", t:"mod"}]},
      {n:19, ctx:{en:"Every guest knew the evening plan.", ko:"모든 손님이 저녁 계획을 알고 있었다."}, full:"그 회사는 그 손님들에게 최종 일정을 보냈었다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"had sent", ko:"보냈었다", t:"verb"},
        {en:"the guests", ko:"그 손님들에게", t:"obj"},
        {en:"a final schedule", ko:"최종 일정을", t:"obj"}]},
      {n:20, ctx:{en:"The guests still waited at the hotel.", ko:"그 손님들은 여전히 그 호텔에서 기다렸다."}, full:"그 축제들은 취소되지 않았었다 (아직)", chunks:[
        {en:"The festivals", ko:"그 축제들은", t:"subj"},
        {en:"hadn't been cancelled", ko:"취소되지 않았었다", t:"verb"},
        {en:"yet", ko:"아직", t:"mod"}]},
      {n:21, full:"모든 손님은 티켓을 받아 놓았을 것이다 (저녁까지는)", chunks:[
        {en:"Every guest", ko:"모든 손님은", t:"subj"},
        {en:"will have been given", ko:"받아 놓았을 것이다", t:"verb"},
        {en:"a ticket", ko:"티켓을", t:"obj"},
        {en:"by the evening", ko:"저녁까지는", t:"mod"}]},
      {n:22, full:"그 축제는 끝나 있을 것이다 (새벽 전에)", chunks:[
        {en:"The festival", ko:"그 축제는", t:"subj"},
        {en:"will have ended", ko:"끝나 있을 것이다", t:"verb"},
        {en:"before dawn", ko:"새벽 전에", t:"mod"}]},
      {n:23, ctx:{en:"The room became noisy that evening.", ko:"그 방은 그날 저녁 시끄러워졌다."}, full:"그 대표들은 최종 상을 막 발표했었다", chunks:[
        {en:"The leaders", ko:"그 대표들은", t:"subj"},
        {en:"had just announced", ko:"막 발표했었다", t:"verb"},
        {en:"the final award", ko:"최종 상을", t:"obj"}]},
      {n:24, full:"그 날씨는 따뜻해져 있을 것이다 (다음 계절까지는)", chunks:[
        {en:"The weather", ko:"그 날씨는", t:"subj"},
        {en:"will have become", ko:"~해져 있을 것이다", t:"verb"},
        {en:"warm", ko:"따뜻하게", t:"comp"},
        {en:"by next season", ko:"다음 계절까지는", t:"mod"}]},
      {n:25, full:"그 상들은 발표되어 있을 것이다 (저녁까지는)", chunks:[
        {en:"The awards", ko:"그 상들은", t:"subj"},
        {en:"will have been announced", ko:"발표되어 있을 것이다", t:"verb"},
        {en:"by the evening", ko:"저녁까지는", t:"mod"}]},
      {n:26, full:"나는 결혼식에 참석한 적이 없었다 (전에는)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"had never attended", ko:"참석한 적이 없었다", t:"verb"},
        {en:"a wedding", ko:"결혼식에", t:"obj"},
        {en:"before", ko:"전에는", t:"mod"}]},
      {n:27, full:"나의 누나는 졸업해 있을 것이다 (내년까지는)", chunks:[
        {en:"My sister", ko:"나의 누나는", t:"subj"},
        {en:"will have graduated", ko:"졸업해 있을 것이다", t:"verb"},
        {en:"by next year", ko:"내년까지는", t:"mod"}]},
      {n:28, full:"그 대표는 그의 경력을 이어 온 게 될 것이다 (10년 동안) (그 기념일까지는)", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"will have continued", ko:"이어 온 게 될 것이다", t:"verb"},
        {en:"his career", ko:"그의 경력을", t:"obj"},
        {en:"for ten years", ko:"10년 동안", t:"mod"},
        {en:"by the anniversary", ko:"그 기념일까지는", t:"mod"}]},
      {n:29, full:"갑작스러운 폭풍이 그 축제를 망쳐 버렸었다", chunks:[
        {en:"A sudden storm", ko:"갑작스러운 폭풍이", t:"subj"},
        {en:"had ruined", ko:"망쳐 버렸었다", t:"verb"},
        {en:"the festival", ko:"그 축제를", t:"obj"}]},
      {n:30, ctx:{en:"The office was quiet that morning.", ko:"그 사무실은 그날 아침 조용했다."}, full:"그 전 대표는 가 버렸었다 (해외로)", chunks:[
        {en:"The former leader", ko:"그 전 대표는", t:"subj"},
        {en:"had gone", ko:"가 버렸었다", t:"verb"},
        {en:"abroad", ko:"해외로", t:"mod"}]},
      {n:31, full:"나의 형은 일해 온 게 될 것이다 (그 박물관에서) (1년 동안) (다음 계절까지는)", chunks:[
        {en:"My brother", ko:"나의 형은", t:"subj"},
        {en:"will have worked", ko:"일해 온 게 될 것이다", t:"verb"},
        {en:"at the museum", ko:"그 박물관에서", t:"mod"},
        {en:"for a year", ko:"1년 동안", t:"mod"},
        {en:"by next season", ko:"다음 계절까지는", t:"mod"}]},
      {n:32, full:"그 약은 그 환자를 차분하게 만들어 놓았을 것이다 (저녁까지는)", chunks:[
        {en:"The medicine", ko:"그 약은", t:"subj"},
        {en:"will have made", ko:"만들어 놓았을 것이다", t:"verb"},
        {en:"the patient", ko:"그 환자를", t:"obj"},
        {en:"calm", ko:"차분하게", t:"comp"},
        {en:"by the evening", ko:"저녁까지는", t:"mod"}]},
      {n:33, full:"그 파티들은 취소되어 있을 것이다 (내일까지는)", chunks:[
        {en:"The parties", ko:"그 파티들은", t:"subj"},
        {en:"will have been cancelled", ko:"취소되어 있을 것이다", t:"verb"},
        {en:"by tomorrow", ko:"내일까지는", t:"mod"}]},
      {n:34, full:"나의 형은 공부한 적이 없었다 (해외에서) (그의 졸업 전에는)", chunks:[
        {en:"My brother", ko:"나의 형은", t:"subj"},
        {en:"had never studied", ko:"공부한 적이 없었다", t:"verb"},
        {en:"abroad", ko:"해외에서", t:"mod"},
        {en:"before his graduation", ko:"그의 졸업 전에는", t:"mod"}]},
      {n:35, ctx:{en:"I met the new leader at the office.", ko:"나는 그 사무실에서 새 대표를 만났다."}, full:"그 회사는 새 대표를 이미 임명했었다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"had already appointed", ko:"이미 임명했었다", t:"verb"},
        {en:"a new leader", ko:"새 대표를", t:"obj"}]},
      {n:36, full:"그 팀은 겨뤄 본 게 될 것이다 (해외에서) (두 번) (그 시즌이 끝날 때까지는)", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"will have competed", ko:"겨뤄 본 게 될 것이다", t:"verb"},
        {en:"abroad", ko:"해외에서", t:"mod"},
        {en:"twice", ko:"두 번", t:"mod"},
        {en:"by the end of the season", ko:"그 시즌이 끝날 때까지는", t:"mod"}]},
      {n:37, ctx:{en:"The team played well last month.", ko:"그 팀은 지난달 잘 뛰었다."}, full:"그 팀은 이전의 갈등을 해결했었다", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"had settled", ko:"해결했었다", t:"verb"},
        {en:"the previous conflict", ko:"이전의 갈등을", t:"obj"}]},
      {n:38, full:"그 의사는 모든 환자의 운동을 제한했었다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"had limited", ko:"제한했었다", t:"verb"},
        {en:"the exercise of every patient", ko:"모든 환자의 운동을", t:"obj"}]},
      {n:39, full:"우리는 그 호텔 전체를 예약해 놓을 것이다 (다음 달까지는)", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"'ll have reserved", ko:"예약해 놓을 것이다", t:"verb"},
        {en:"the entire hotel", ko:"그 호텔 전체를", t:"obj"},
        {en:"by next month", ko:"다음 달까지는", t:"mod"}]},
      {n:40, ctx:{en:"Our rooms were ready on the weekend.", ko:"우리 방들은 주말에 준비되어 있었다."}, full:"우리는 그 호텔을 예약했었다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"'d reserved", ko:"예약했었다", t:"verb"},
        {en:"the hotel", ko:"그 호텔을", t:"obj"}]},
      {n:41, ctx:{en:"A new cup stood on her desk.", ko:"새 우승컵이 그녀의 책상 위에 놓여 있었다."}, full:"그 운동선수는 상을 막 받았었다", chunks:[
        {en:"The athlete", ko:"그 운동선수는", t:"subj"},
        {en:"had just been given", ko:"막 받았었다", t:"verb"},
        {en:"an award", ko:"상을", t:"obj"}]},
      {n:42, ctx:{en:"The station was quiet at dawn.", ko:"그 역은 새벽에 조용했다."}, full:"그 시계들은 멈춰 있었다", chunks:[
        {en:"The clocks", ko:"그 시계들은", t:"subj"},
        {en:"had stopped", ko:"멈춰 있었다", t:"verb"}]},
      {n:43, ctx:{en:"The critic read the whole novel that evening.", ko:"그 비평가는 그날 저녁 그 소설 전체를 읽었다."}, full:"그 작가는 그 소설 전체를 출간했었다", chunks:[
        {en:"The author", ko:"그 작가는", t:"subj"},
        {en:"had published", ko:"출간했었다", t:"verb"},
        {en:"the entire novel", ko:"그 소설 전체를", t:"obj"}]},
      {n:44, full:"나의 누나는 모든 축제에 참석한 게 될 것이다 (저녁까지는)", chunks:[
        {en:"My sister", ko:"나의 누나는", t:"subj"},
        {en:"will have attended", ko:"참석한 게 될 것이다", t:"verb"},
        {en:"every festival", ko:"모든 축제에", t:"obj"},
        {en:"by the evening", ko:"저녁까지는", t:"mod"}]},
      {n:45, full:"그 여배우는 상을 받은 적이 없었다 (전에는)", chunks:[
        {en:"The actress", ko:"그 여배우는", t:"subj"},
        {en:"had never been given", ko:"받은 적이 없었다", t:"verb"},
        {en:"an award", ko:"상을", t:"obj"},
        {en:"before", ko:"전에는", t:"mod"}]},
      {n:46, full:"그 시계는 멈춰 있지 않을 것이다 (새벽까지는)", chunks:[
        {en:"The clock", ko:"그 시계는", t:"subj"},
        {en:"won't have stopped", ko:"멈춰 있지 않을 것이다", t:"verb"},
        {en:"by dawn", ko:"새벽까지는", t:"mod"}]},
      {n:47, full:"그 간호사는 그 환자에게 마지막 약을 주어 놓았을 것이다 (새벽까지는)", chunks:[
        {en:"The nurse", ko:"그 간호사는", t:"subj"},
        {en:"will have given", ko:"주어 놓았을 것이다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"the final medicine", ko:"마지막 약을", t:"obj"},
        {en:"by dawn", ko:"새벽까지는", t:"mod"}]},
      {n:48, full:"그 손님들은 초대받은 게 될 것이다 (두 번) (그 결혼식까지는)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"will have been invited", ko:"초대받은 게 될 것이다", t:"verb"},
        {en:"twice", ko:"두 번", t:"mod"},
        {en:"by the wedding", ko:"그 결혼식까지는", t:"mod"}]},
      {n:49, full:"그 시인은 그의 경력을 이어 오고 있었다 (그 전쟁 이후로)", chunks:[
        {en:"The poet", ko:"그 시인은", t:"subj"},
        {en:"had continued", ko:"이어 오고 있었다", t:"verb"},
        {en:"his career", ko:"그의 경력을", t:"obj"},
        {en:"since the war", ko:"그 전쟁 이후로", t:"mod"}]},
      {n:50, full:"그 파티는 계속되어 오고 있을 것이다 (여섯 시간 동안) (새벽까지는)", chunks:[
        {en:"The party", ko:"그 파티는", t:"subj"},
        {en:"will have been continuing", ko:"계속되어 오고 있을 것이다", t:"verb"},
        {en:"for six hours", ko:"여섯 시간 동안", t:"mod"},
        {en:"by dawn", ko:"새벽까지는", t:"mod"}]},
      {n:51, full:"그 상은 그 운동선수를 자랑스럽게 만들었었다", chunks:[
        {en:"The award", ko:"그 상은", t:"subj"},
        {en:"had made", ko:"만들었었다", t:"verb"},
        {en:"the athlete", ko:"그 운동선수를", t:"obj"},
        {en:"proud", ko:"자랑스럽게", t:"comp"}]},
      {n:52, full:"그 학교는 그 연설의 시간을 제한한 적이 없었다 (전에는)", chunks:[
        {en:"The school", ko:"그 학교는", t:"subj"},
        {en:"had never limited", ko:"제한한 적이 없었다", t:"verb"},
        {en:"the time of the speech", ko:"그 연설의 시간을", t:"obj"},
        {en:"before", ko:"전에는", t:"mod"}]},
      {n:53, full:"그 작가는 소설 세 편을 출간한 게 될 것이다 (그 기념일까지는)", chunks:[
        {en:"The author", ko:"그 작가는", t:"subj"},
        {en:"will have published", ko:"출간한 게 될 것이다", t:"verb"},
        {en:"three novels", ko:"소설 세 편을", t:"obj"},
        {en:"by the anniversary", ko:"그 기념일까지는", t:"mod"}]},
      {n:54, full:"나는 가 본 게 될 것이다 (그 사원에) (세 번) (그 기념일까지는)", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"'ll have been to", ko:"가 본 게 될 것이다", t:"verb"},
        {en:"the temple", ko:"그 사원에", t:"mod"},
        {en:"three times", ko:"세 번", t:"mod"},
        {en:"by the anniversary", ko:"그 기념일까지는", t:"mod"}]},
      {n:55, full:"그 엔진은 망가져 있었다 (그 아이에 의해)", chunks:[
        {en:"The engine", ko:"그 엔진은", t:"subj"},
        {en:"had been broken", ko:"망가져 있었다", t:"verb"},
        {en:"by the child", ko:"그 아이에 의해", t:"mod"}]},
      {n:56, full:"그 축제는 끝나지 않았었다 (새벽까지)", chunks:[
        {en:"The festival", ko:"그 축제는", t:"subj"},
        {en:"had not ended", ko:"끝나지 않았었다", t:"verb"},
        {en:"until dawn", ko:"새벽까지", t:"mod"}]},
      {n:57, ctx:{en:"The members smiled at each other.", ko:"그 구성원들은 서로에게 미소 지었다."}, full:"이전의 갈등은 해결되었었다 (그 팀에 의해)", chunks:[
        {en:"The former conflict", ko:"이전의 갈등은", t:"subj"},
        {en:"had been settled", ko:"해결되었었다", t:"verb"},
        {en:"by the team", ko:"그 팀에 의해", t:"mod"}]},
      {n:58, full:"그 문은 닫힌 채로 유지되어 있었다 (그 폭풍 이후로)", chunks:[
        {en:"The gate", ko:"그 문은", t:"subj"},
        {en:"had been kept", ko:"유지되어 있었다", t:"verb"},
        {en:"closed", ko:"닫힌 채로", t:"comp"},
        {en:"since the storm", ko:"그 폭풍 이후로", t:"mod"}]},
      {n:59, full:"우리는 그런 갑작스러운 폭풍을 본 적이 없었다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"'d never seen", ko:"본 적이 없었다", t:"verb"},
        {en:"such a sudden storm", ko:"그런 갑작스러운 폭풍을", t:"obj"}]},
      {n:60, full:"나의 누나는 공부해 왔었다 (그 학교에서) (6년 동안)", chunks:[
        {en:"My sister", ko:"나의 누나는", t:"subj"},
        {en:"had studied", ko:"공부해 왔었다", t:"verb"},
        {en:"at the school", ko:"그 학교에서", t:"mod"},
        {en:"for six years", ko:"6년 동안", t:"mod"}]},
      {n:61, full:"그 대표는 그 팀에게 최종 답변을 주어 놓았을 것이다 (그 주말까지는)", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"will have given", ko:"주어 놓았을 것이다", t:"verb"},
        {en:"the team", ko:"그 팀에게", t:"obj"},
        {en:"a final answer", ko:"최종 답변을", t:"obj"},
        {en:"by the weekend", ko:"그 주말까지는", t:"mod"}]},
      {n:62, ctx:{en:"Every event started on time.", ko:"모든 행사가 정시에 시작되었다."}, full:"그 전체 일정은 준비되어 있었다 (그 전 대표에 의해)", chunks:[
        {en:"The entire schedule", ko:"그 전체 일정은", t:"subj"},
        {en:"had been arranged", ko:"준비되어 있었다", t:"verb"},
        {en:"by the former leader", ko:"그 전 대표에 의해", t:"mod"}]},
      {n:63, ctx:{en:"The guests carried the schedule that morning.", ko:"그 손님들은 그날 아침 그 일정표를 들고 다녔다."}, full:"그 연설은 이미 발표되었었다", chunks:[
        {en:"The speech", ko:"그 연설은", t:"subj"},
        {en:"had already been announced", ko:"이미 발표되었었다", t:"verb"}]},
      {n:64, full:"그 최종 상은 취소되었었다", chunks:[
        {en:"The final award", ko:"그 최종 상은", t:"subj"},
        {en:"had been cancelled", ko:"취소되었었다", t:"verb"}]},
      {n:65, full:"그 작가는 그 소설 전체를 출간해 놓을 것이다 (그 기념일까지는)", chunks:[
        {en:"The author", ko:"그 작가는", t:"subj"},
        {en:"will have published", ko:"출간해 놓을 것이다", t:"verb"},
        {en:"the entire novel", ko:"그 소설 전체를", t:"obj"},
        {en:"by the anniversary", ko:"그 기념일까지는", t:"mod"}]},
      {n:66, full:"그 시인은 살아 오고 있었다 (그 도시에서) (그 전쟁 이후로)", chunks:[
        {en:"The poet", ko:"그 시인은", t:"subj"},
        {en:"had been living", ko:"살아 오고 있었다", t:"verb"},
        {en:"in the city", ko:"그 도시에서", t:"mod"},
        {en:"since the war", ko:"그 전쟁 이후로", t:"mod"}]},
      {n:67, full:"그 비평가는 그 기념일 파티에 참석한 적이 없었다 (전에는)", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"hadn't attended", ko:"참석한 적이 없었다", t:"verb"},
        {en:"the anniversary party", ko:"그 기념일 파티에", t:"obj"},
        {en:"before", ko:"전에는", t:"mod"}]},
      {n:68, full:"그 손님들은 기다려 오고 있었다 (그 역에서) (한 시간 동안)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"had been waiting", ko:"기다려 오고 있었다", t:"verb"},
        {en:"at the station", ko:"그 역에서", t:"mod"},
        {en:"for an hour", ko:"한 시간 동안", t:"mod"}]},
      {n:69, ctx:{en:"The camera does not work now.", ko:"그 카메라는 지금 작동하지 않는다."}, full:"그 아이가 그 오래된 카메라를 망가뜨렸었다", chunks:[
        {en:"The child", ko:"그 아이가", t:"subj"},
        {en:"had broken", ko:"망가뜨렸었다", t:"verb"},
        {en:"the old camera", ko:"그 오래된 카메라를", t:"obj"}]},
      {n:70, full:"그 파티는 계속된 게 될 것이다 (여섯 시간 동안) (새벽까지는)", chunks:[
        {en:"The party", ko:"그 파티는", t:"subj"},
        {en:"will have continued", ko:"계속된 게 될 것이다", t:"verb"},
        {en:"for six hours", ko:"여섯 시간 동안", t:"mod"},
        {en:"by dawn", ko:"새벽까지는", t:"mod"}]},
      {n:71, full:"그 회사는 그 결혼식을 준비해 오고 있었다 (한 달 동안)", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"had been arranging", ko:"준비해 오고 있었다", t:"verb"},
        {en:"the wedding", ko:"그 결혼식을", t:"obj"},
        {en:"for a month", ko:"한 달 동안", t:"mod"}]},
      {n:72, full:"그 결혼식 전체는 준비되어 있을 것이다 (다음 계절 전에)", chunks:[
        {en:"The entire wedding", ko:"그 결혼식 전체는", t:"subj"},
        {en:"will have been arranged", ko:"준비되어 있을 것이다", t:"verb"},
        {en:"before next season", ko:"다음 계절 전에", t:"mod"}]},
      {n:73, ctx:{en:"The critic arrived at the office late.", ko:"그 비평가는 그 사무실에 늦게 도착했다."}, full:"그 연설은 이미 끝나 있었다", chunks:[
        {en:"The speech", ko:"그 연설은", t:"subj"},
        {en:"had already ended", ko:"이미 끝나 있었다", t:"verb"}]},
    ]},
    { id:"조동사(3)", items:[
      {n:1, ctx:{en:"No one can remove the trouble.", ko:"아무도 그 문제를 없앨 수 없다."}, full:"나는 그 문제를 견디는 편이 낫다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"may as well endure", ko:"견디는 편이 낫다", t:"verb"},
        {en:"the trouble", ko:"그 문제를", t:"obj"}]},
      {n:2, ctx:{en:"Broken glass is on the road at the bridge.", ko:"그 다리에서 도로 위에 깨진 유리가 있다."}, full:"그 자동차 사고는 일어났을지도 모른다 (그 다리에서)", chunks:[
        {en:"The car accident", ko:"그 자동차 사고는", t:"subj"},
        {en:"might have happened", ko:"일어났을지도 모른다", t:"verb"},
        {en:"at the bridge", ko:"그 다리에서", t:"mod"}]},
      {n:3, ctx:{en:"The fire reached the hotel.", ko:"그 불이 그 호텔에 닿았다."}, full:"그 손님들은 탈출했어야 했다 (그 불이 나기 전에)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"should have escaped", ko:"탈출했어야 했다", t:"verb"},
        {en:"before the fire", ko:"그 불이 나기 전에", t:"mod"}]},
      {n:4, ctx:{en:"The author only followed the rule.", ko:"그 작가는 그저 규칙을 따랐을 뿐이다."}, full:"그 비평가는 그 작가를 비난하지 말았어야 했다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"ought not to have blamed", ko:"비난하지 말았어야 했다", t:"verb"},
        {en:"the author", ko:"그 작가를", t:"obj"}]},
      {n:5, ctx:{en:"Someone stole the key at night.", ko:"누군가 밤에 그 열쇠를 훔쳤다."}, full:"우리는 그 열쇠를 안전하게 보관했어야 했다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"should have kept", ko:"보관했어야 했다", t:"verb"},
        {en:"the key", ko:"그 열쇠를", t:"obj"},
        {en:"safe", ko:"안전하게", t:"comp"}]},
      {n:6, full:"나는 나의 형을 부러워하지 않을 수 없다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"cannot help envying", ko:"부러워하지 않을 수 없다", t:"verb"},
        {en:"my brother", ko:"나의 형을", t:"obj"}]},
      {n:7, full:"나는 그 대안 계획을 받아들일 수밖에 없다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"have no choice but to accept", ko:"받아들일 수밖에 없다", t:"verb"},
        {en:"the alternate plan", ko:"그 대안 계획을", t:"obj"}]},
      {n:8, full:"그 아이는 울지 않을 수 없다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"cannot but cry", ko:"울지 않을 수 없다", t:"verb"}]},
      {n:9, ctx:{en:"The umbrella is not in the school bag.", ko:"그 우산이 그 책가방 안에 없다."}, full:"그 아이는 그 우산을 잃어버렸을지도 모른다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"may have lost", ko:"잃어버렸을지도 모른다", t:"verb"},
        {en:"the umbrella", ko:"그 우산을", t:"obj"}]},
      {n:10, full:"그 졸업생은 선택할 수밖에 없다 (그 대안 진로를)", chunks:[
        {en:"The graduate", ko:"그 졸업생은", t:"subj"},
        {en:"has no choice but to opt", ko:"선택할 수밖에 없다", t:"verb"},
        {en:"for the alternate career", ko:"그 대안 진로를", t:"mod"}]},
      {n:11, ctx:{en:"The other plans failed.", ko:"다른 계획들은 실패했다."}, full:"우리는 그 대안 조정안을 받아들이는 편이 낫다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"may as well accept", ko:"받아들이는 편이 낫다", t:"verb"},
        {en:"the alternate arrangement", ko:"그 대안 조정안을", t:"obj"}]},
      {n:12, full:"나는 그 작가를 존경하지 않을 수 없다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"cannot but admire", ko:"존경하지 않을 수 없다", t:"verb"},
        {en:"the author", ko:"그 작가를", t:"obj"}]},
      {n:13, ctx:{en:"The leader left the company suddenly.", ko:"그 대표는 갑자기 그 회사를 떠났다."}, full:"그 대표는 처벌받았을지도 모른다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"might have been punished", ko:"처벌받았을지도 모른다", t:"verb"}]},
      {n:14, ctx:{en:"The alarm rang at the first touch.", ko:"그 경보기는 첫 접촉에 울렸다."}, full:"그 범죄는 예방되었을지도 모른다", chunks:[
        {en:"The crime", ko:"그 범죄는", t:"subj"},
        {en:"may have been prevented", ko:"예방되었을지도 모른다", t:"verb"}]},
      {n:15, full:"우리는 그 계획을 불가피한 선택이라고 부르지 않을 수 없다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"cannot but call", ko:"부르지 않을 수 없다", t:"verb"},
        {en:"the plan", ko:"그 계획을", t:"obj"},
        {en:"an inevitable choice", ko:"불가피한 선택이라고", t:"comp"}]},
      {n:16, ctx:{en:"The result will not change.", ko:"그 결과는 바뀌지 않을 것이다."}, full:"그 팀은 그 운명을 받아들이는 편이 낫다", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"may as well accept", ko:"받아들이는 편이 낫다", t:"verb"},
        {en:"the fate", ko:"그 운명을", t:"obj"}]},
      {n:17, ctx:{en:"Only the leader finished the project.", ko:"그 대표만 그 프로젝트를 끝냈다."}, full:"그 회사는 모든 구성원에게 보상할 필요 없었다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"need not have rewarded", ko:"보상할 필요 없었다", t:"verb"},
        {en:"every member", ko:"모든 구성원에게", t:"obj"}]},
      {n:18, full:"그 의사는 그 통증을 무시할 수밖에 없었다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"had no choice but to ignore", ko:"무시할 수밖에 없었다", t:"verb"},
        {en:"the pain", ko:"그 통증을", t:"obj"}]},
      {n:19, full:"그 팀은 견딜 수밖에 없다", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"has no choice but to endure", ko:"견딜 수밖에 없다", t:"verb"}]},
      {n:20, ctx:{en:"No one heard the alarm in the morning.", ko:"아침에 아무도 그 경보기를 듣지 못했다."}, full:"그 경보기는 멈췄음에 틀림없다 (새벽에)", chunks:[
        {en:"The alarm", ko:"그 경보기는", t:"subj"},
        {en:"must have stopped", ko:"멈췄음에 틀림없다", t:"verb"},
        {en:"at dawn", ko:"새벽에", t:"mod"}]},
      {n:21, ctx:{en:"The doctor added three bitter leaves.", ko:"그 의사는 쓴 잎 세 장을 넣었다."}, full:"그 약이 쓴 맛이 나는 것도 당연하다", chunks:[
        {en:"The medicine", ko:"그 약이", t:"subj"},
        {en:"may well taste", ko:"맛이 나는 것도 당연하다", t:"verb"},
        {en:"bitter", ko:"쓴", t:"comp"}]},
      {n:22, ctx:{en:"The nurse called the doctor at once.", ko:"그 간호사는 즉시 그 의사를 불렀다."}, full:"그 간호사는 그 증상을 무시했을 리 없다", chunks:[
        {en:"The nurse", ko:"그 간호사는", t:"subj"},
        {en:"cannot have ignored", ko:"무시했을 리 없다", t:"verb"},
        {en:"the symptom", ko:"그 증상을", t:"obj"}]},
      {n:23, ctx:{en:"The gate does not open now.", ko:"그 문은 지금 열리지 않는다."}, full:"그 손님들이 그 문을 잠갔을지도 모른다", chunks:[
        {en:"The guests", ko:"그 손님들이", t:"subj"},
        {en:"might have locked", ko:"잠갔을지도 모른다", t:"verb"},
        {en:"the gate", ko:"그 문을", t:"obj"}]},
      {n:24, ctx:{en:"The crowd did not accept the apology.", ko:"그 군중은 그 사과를 받아들이지 않았다."}, full:"그 사과는 진솔했어야 했다", chunks:[
        {en:"The apology", ko:"그 사과는", t:"subj"},
        {en:"should have been", ko:"~였어야 했다", t:"verb"},
        {en:"honest", ko:"진솔한", t:"comp"}]},
      {n:25, full:"그 위험은 받아들여지는 것도 당연하다 (그 회사에 의해)", chunks:[
        {en:"The risk", ko:"그 위험은", t:"subj"},
        {en:"may well be accepted", ko:"받아들여지는 것도 당연하다", t:"verb"},
        {en:"by the company", ko:"그 회사에 의해", t:"mod"}]},
      {n:26, ctx:{en:"The window is broken.", ko:"그 창문이 깨져 있다."}, full:"그 군중이 밀어붙였음에 틀림없다 (그 창문에)", chunks:[
        {en:"The crowd", ko:"그 군중이", t:"subj"},
        {en:"must have pressed", ko:"밀어붙였음에 틀림없다", t:"verb"},
        {en:"against the window", ko:"그 창문에", t:"mod"}]},
      {n:27, ctx:{en:"The two patients have the same name.", ko:"그 두 환자는 같은 이름을 가지고 있다."}, full:"그 의사들은 잘못된 환자를 진찰했을지도 모른다", chunks:[
        {en:"The doctors", ko:"그 의사들은", t:"subj"},
        {en:"might have examined", ko:"진찰했을지도 모른다", t:"verb"},
        {en:"the wrong patient", ko:"잘못된 환자를", t:"obj"}]},
      {n:28, ctx:{en:"The parents left the room.", ko:"그 부모는 그 방을 떠났다."}, full:"그 아이들이 우는 것도 당연하다", chunks:[
        {en:"The children", ko:"그 아이들이", t:"subj"},
        {en:"may well cry", ko:"우는 것도 당연하다", t:"verb"}]},
      {n:29, ctx:{en:"The teacher already knew the truth.", ko:"그 선생님은 이미 진실을 알고 있었다."}, full:"너는 그런 어리석은 변명을 하지 말았어야 했다", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"should not have made", ko:"하지 말았어야 했다", t:"verb"},
        {en:"such a foolish excuse", ko:"그런 어리석은 변명을", t:"obj"}]},
      {n:30, ctx:{en:"The witness changed the story.", ko:"그 목격자는 진술을 바꿨다."}, full:"그 목격자는 유죄였을지도 모른다", chunks:[
        {en:"The witness", ko:"그 목격자는", t:"subj"},
        {en:"might have been", ko:"~였을지도 모른다", t:"verb"},
        {en:"guilty", ko:"유죄인", t:"comp"}]},
      {n:31, ctx:{en:"The same child broke the rule again.", ko:"같은 아이가 또 그 규칙을 어겼다."}, full:"그 변명은 용서되지 말았어야 했다", chunks:[
        {en:"The excuse", ko:"그 변명은", t:"subj"},
        {en:"should not have been forgiven", ko:"용서되지 말았어야 했다", t:"verb"}]},
      {n:32, full:"그 대표는 그 분노를 차라리 무시하겠다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"would rather ignore", ko:"차라리 무시하겠다", t:"verb"},
        {en:"the anger", ko:"그 분노를", t:"obj"}]},
      {n:33, full:"나는 그 문제를 감지하지 않을 수 없다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"cannot help sensing", ko:"감지하지 않을 수 없다", t:"verb"},
        {en:"the trouble", ko:"그 문제를", t:"obj"}]},
      {n:34, ctx:{en:"The clock in the car stopped at dawn.", ko:"그 차 안의 시계는 새벽에 멈췄다."}, full:"그 사고는 일어났음에 틀림없다 (새벽에)", chunks:[
        {en:"The accident", ko:"그 사고는", t:"subj"},
        {en:"must have happened", ko:"일어났음에 틀림없다", t:"verb"},
        {en:"at dawn", ko:"새벽에", t:"mod"}]},
      {n:35, ctx:{en:"The critics are wet.", ko:"그 비평가들은 젖어 있다."}, full:"그 비평가들은 그 우산을 잊었을지도 모른다", chunks:[
        {en:"The critics", ko:"그 비평가들은", t:"subj"},
        {en:"may have forgotten", ko:"잊었을지도 모른다", t:"verb"},
        {en:"the umbrella", ko:"그 우산을", t:"obj"}]},
      {n:36, ctx:{en:"The author ignored every warning.", ko:"그 작가는 모든 경고를 무시했다."}, full:"그 비평가가 그 작가를 비난하는 것도 당연하다", chunks:[
        {en:"The critic", ko:"그 비평가가", t:"subj"},
        {en:"may well blame", ko:"비난하는 것도 당연하다", t:"verb"},
        {en:"the author", ko:"그 작가를", t:"obj"}]},
      {n:37, ctx:{en:"The author gives no answer.", ko:"그 작가는 아무 답도 주지 않는다."}, full:"그 비평가가 그 작가의 분노를 감지하는 것도 당연하다", chunks:[
        {en:"The critic", ko:"그 비평가가", t:"subj"},
        {en:"may well sense", ko:"감지하는 것도 당연하다", t:"verb"},
        {en:"the anger of the author", ko:"그 작가의 분노를", t:"obj"}]},
      {n:38, ctx:{en:"The previous plan was safer.", ko:"이전 계획이 더 안전했다."}, full:"네가 그 선택을 후회하는 것도 당연하다", chunks:[
        {en:"You", ko:"네가", t:"subj"},
        {en:"may well regret", ko:"후회하는 것도 당연하다", t:"verb"},
        {en:"the choice", ko:"그 선택을", t:"obj"}]},
      {n:39, ctx:{en:"The gate is still closed.", ko:"그 문은 아직 닫혀 있다."}, full:"그 손님들은 기다리는 편이 낫다 (그 데스크에서)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"may as well wait", ko:"기다리는 편이 낫다", t:"verb"},
        {en:"at the desk", ko:"그 데스크에서", t:"mod"}]},
      {n:40, ctx:{en:"The engine stopped again.", ko:"그 엔진이 또 멈췄다."}, full:"그 엔진은 점검되었어야 했다", chunks:[
        {en:"The engine", ko:"그 엔진은", t:"subj"},
        {en:"should have been inspected", ko:"점검되었어야 했다", t:"verb"}]},
      {n:41, full:"우리는 그 안전한 계획을 선호하지 않을 수 없다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"cannot help but prefer", ko:"선호하지 않을 수 없다", t:"verb"},
        {en:"the safe plan", ko:"그 안전한 계획을", t:"obj"}]},
      {n:42, ctx:{en:"The keys were in the car.", ko:"그 열쇠들은 그 차 안에 있었다."}, full:"우리는 그 호텔 전체를 뒤질 필요 없었다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"need not have searched", ko:"뒤질 필요 없었다", t:"verb"},
        {en:"the whole hotel", ko:"그 호텔 전체를", t:"obj"}]},
      {n:43, ctx:{en:"The author won the award again.", ko:"그 작가가 또 그 상을 받았다."}, full:"다른 구성원들이 그 작가를 부러워하는 것도 당연하다", chunks:[
        {en:"The other members", ko:"다른 구성원들이", t:"subj"},
        {en:"may well envy", ko:"부러워하는 것도 당연하다", t:"verb"},
        {en:"the author", ko:"그 작가를", t:"obj"}]},
      {n:44, ctx:{en:"The parents searched all night.", ko:"그 부모는 밤새 찾아다녔다."}, full:"그 아이들은 달아나지 말았어야 했다", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"should not have escaped", ko:"달아나지 말았어야 했다", t:"verb"}]},
      {n:45, full:"우리는 그 지연을 견딜 수밖에 없다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"have no choice but to endure", ko:"견딜 수밖에 없다", t:"verb"},
        {en:"the delay", ko:"그 지연을", t:"obj"}]},
      {n:46, full:"그들은 그 위험을 받아들이지 않을 수 없다", chunks:[
        {en:"They", ko:"그들은", t:"subj"},
        {en:"cannot but accept", ko:"받아들이지 않을 수 없다", t:"verb"},
        {en:"the risk", ko:"그 위험을", t:"obj"}]},
      {n:47, full:"우리는 그 운명을 받아들일 수밖에 없다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"have no choice but to accept", ko:"받아들일 수밖에 없다", t:"verb"},
        {en:"the fate", ko:"그 운명을", t:"obj"}]},
      {n:48, ctx:{en:"Many guests went to the hospital.", ko:"많은 손님이 그 병원에 갔다."}, full:"그 손님들은 고통받았을지도 모른다 (그 자동차 사고로)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"may have suffered", ko:"고통받았을지도 모른다", t:"verb"},
        {en:"from the car accident", ko:"그 자동차 사고로", t:"mod"}]},
      {n:49, ctx:{en:"The leader returned the stolen money.", ko:"그 대표는 훔친 돈을 돌려주었다."}, full:"그 대표는 미안했을지도 모른다 (그 범죄에 대해)", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"may have been", ko:"~였을지도 모른다", t:"verb"},
        {en:"sorry", ko:"미안한", t:"comp"},
        {en:"for the crime", ko:"그 범죄에 대해", t:"mod"}]},
      {n:50, ctx:{en:"The nurse gave the wrong medicine.", ko:"그 간호사가 잘못된 약을 주었다."}, full:"그 의사는 그 간호사에게 경고를 주었어야 했다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"should have given", ko:"주었어야 했다", t:"verb"},
        {en:"the nurse", ko:"그 간호사에게", t:"obj"},
        {en:"a warning", ko:"경고를", t:"obj"}]},
      {n:51, ctx:{en:"The police found the sign of guilt.", ko:"경찰이 유죄의 흔적을 찾았다."}, full:"그 대표는 그 죄를 자백했어야 했다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"should have confessed", ko:"자백했어야 했다", t:"verb"},
        {en:"the guilt", ko:"그 죄를", t:"obj"}]},
      {n:52, ctx:{en:"The leader still blames the team.", ko:"그 대표는 여전히 그 팀을 탓한다."}, full:"그 잘못은 용서되었을 리 없다", chunks:[
        {en:"The fault", ko:"그 잘못은", t:"subj"},
        {en:"cannot have been forgiven", ko:"용서되었을 리 없다", t:"verb"}]},
      {n:53, ctx:{en:"The company has no money now.", ko:"그 회사는 지금 돈이 없다."}, full:"그 회사는 그 돈을 낭비했을지도 모른다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"may have wasted", ko:"낭비했을지도 모른다", t:"verb"},
        {en:"the money", ko:"그 돈을", t:"obj"}]},
      {n:54, full:"그 아이들은 차라리 머물겠다 (집에)", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"would rather stay", ko:"차라리 머물겠다", t:"verb"},
        {en:"at home", ko:"집에", t:"mod"}]},
      {n:55, full:"그 작가는 그 상을 차라리 거절하겠다", chunks:[
        {en:"The author", ko:"그 작가는", t:"subj"},
        {en:"would rather refuse", ko:"차라리 거절하겠다", t:"verb"},
        {en:"the award", ko:"그 상을", t:"obj"}]},
      {n:56, full:"우리는 그 고통을 차라리 견디겠다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"would rather endure", ko:"차라리 견디겠다", t:"verb"},
        {en:"the pain", ko:"그 고통을", t:"obj"}]},
      {n:57, ctx:{en:"The team went to the wrong station.", ko:"그 팀은 잘못된 역으로 갔다."}, full:"그 대표는 그 팀에게 잘못된 주소를 주었음에 틀림없다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"must have given", ko:"주었음에 틀림없다", t:"verb"},
        {en:"the team", ko:"그 팀에게", t:"obj"},
        {en:"a wrong address", ko:"잘못된 주소를", t:"obj"}]},
      {n:58, ctx:{en:"Someone entered the office at night.", ko:"누군가 밤에 그 사무실에 들어왔다."}, full:"너는 그 문을 잠갔어야 했다", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"should have locked", ko:"잠갔어야 했다", t:"verb"},
        {en:"the gate", ko:"그 문을", t:"obj"}]},
      {n:59, full:"그 팀은 그 결과를 받아들이지 않을 수 없다", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"cannot help but accept", ko:"받아들이지 않을 수 없다", t:"verb"},
        {en:"the result", ko:"그 결과를", t:"obj"}]},
      {n:60, ctx:{en:"The rain stopped before the event.", ko:"그 비는 그 행사 전에 그쳤다."}, full:"그 손님들은 우산을 가져올 필요 없었다", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"need not have brought", ko:"가져올 필요 없었다", t:"verb"},
        {en:"umbrellas", ko:"우산을", t:"obj"}]},
      {n:61, ctx:{en:"The train departs tomorrow.", ko:"그 기차는 내일 출발한다."}, full:"너는 쉬는 편이 낫다 (그 호텔에서)", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"may as well rest", ko:"쉬는 편이 낫다", t:"verb"},
        {en:"at the hotel", ko:"그 호텔에서", t:"mod"}]},
      {n:62, full:"우리는 그 결과를 받아들이지 않을 수 없다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"cannot but accept", ko:"받아들이지 않을 수 없다", t:"verb"},
        {en:"the result", ko:"그 결과를", t:"obj"}]},
      {n:63, ctx:{en:"The police found the key.", ko:"경찰이 그 열쇠를 찾았다."}, full:"그 목격자들은 결백했을 리 없다", chunks:[
        {en:"The witnesses", ko:"그 목격자들은", t:"subj"},
        {en:"cannot have been", ko:"~였을 리 없다", t:"verb"},
        {en:"innocent", ko:"결백한", t:"comp"}]},
      {n:64, ctx:{en:"The office door is open.", ko:"그 사무실 문이 열려 있다."}, full:"그 열쇠들은 도난당했음에 틀림없다", chunks:[
        {en:"The keys", ko:"그 열쇠들은", t:"subj"},
        {en:"must have been stolen", ko:"도난당했음에 틀림없다", t:"verb"}]},
      {n:65, ctx:{en:"The nurse forgot the medicine.", ko:"그 간호사는 그 약을 잊었다."}, full:"그 환자는 그 고통을 겪지 말았어야 했다", chunks:[
        {en:"The patient", ko:"그 환자는", t:"subj"},
        {en:"should not have suffered", ko:"겪지 말았어야 했다", t:"verb"},
        {en:"the pain", ko:"그 고통을", t:"obj"}]},
      {n:66, full:"그 계획은 시의적절한 선택이라고 불리는 것도 당연하다", chunks:[
        {en:"The plan", ko:"그 계획은", t:"subj"},
        {en:"may well be called", ko:"불리는 것도 당연하다", t:"verb"},
        {en:"an opportune choice", ko:"시의적절한 선택이라고", t:"comp"}]},
      {n:67, ctx:{en:"The police already knew the truth.", ko:"경찰은 이미 진실을 알고 있었다."}, full:"그 대표는 그 범죄를 자백했어야 했다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"ought to have confessed", ko:"자백했어야 했다", t:"verb"},
        {en:"the crime", ko:"그 범죄를", t:"obj"}]},
      {n:68, full:"그 선생님은 그 아이에게 경고를 주지 않을 수 없다", chunks:[
        {en:"The teacher", ko:"그 선생님은", t:"subj"},
        {en:"cannot but give", ko:"주지 않을 수 없다", t:"verb"},
        {en:"the child", ko:"그 아이에게", t:"obj"},
        {en:"a warning", ko:"경고를", t:"obj"}]},
      {n:69, full:"그 팀의 운명은 결정되는 것도 당연하다 (오늘 밤)", chunks:[
        {en:"The fate of the team", ko:"그 팀의 운명은", t:"subj"},
        {en:"may well be settled", ko:"결정되는 것도 당연하다", t:"verb"},
        {en:"tonight", ko:"오늘 밤", t:"mod"}]},
      {n:70, ctx:{en:"The police searched for another witness.", ko:"경찰은 또 다른 목격자를 찾았다."}, full:"유죄의 흔적은 명확했을 리 없다", chunks:[
        {en:"The sign of guilt", ko:"유죄의 흔적은", t:"subj"},
        {en:"cannot have been", ko:"~였을 리 없다", t:"verb"},
        {en:"clear", ko:"명확한", t:"comp"}]},
      {n:71, ctx:{en:"The apology did not calm the crowd.", ko:"그 사과는 그 군중을 진정시키지 못했다."}, full:"그 사과는 어리석었을지도 모른다", chunks:[
        {en:"The apology", ko:"그 사과는", t:"subj"},
        {en:"may have been", ko:"~였을지도 모른다", t:"verb"},
        {en:"foolish", ko:"어리석은", t:"comp"}]},
      {n:72, ctx:{en:"The fire reached the kitchen.", ko:"그 불이 그 주방에 닿았다."}, full:"그 팀은 그 경보기를 무시하지 말았어야 했다", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"should not have ignored", ko:"무시하지 말았어야 했다", t:"verb"},
        {en:"the alarm", ko:"그 경보기를", t:"obj"}]},
      {n:73, ctx:{en:"The member was innocent.", ko:"그 구성원은 결백했다."}, full:"그 회사는 그 구성원을 처벌하지 말았어야 했다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"should not have punished", ko:"처벌하지 말았어야 했다", t:"verb"},
        {en:"the member", ko:"그 구성원을", t:"obj"}]},
      {n:74, ctx:{en:"No child moved for an hour.", ko:"한 시간 동안 어떤 아이도 움직이지 않았다."}, full:"그 아이들은 차분하게 유지되었음에 틀림없다", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"must have been kept", ko:"유지되었음에 틀림없다", t:"verb"},
        {en:"calm", ko:"차분하게", t:"comp"}]},
      {n:75, ctx:{en:"The team finished the whole project.", ko:"그 팀은 그 프로젝트 전체를 끝냈다."}, full:"그 팀은 보상을 받았어야 했다", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"should have been given", ko:"받았어야 했다", t:"verb"},
        {en:"a reward", ko:"보상을", t:"obj"}]},
      {n:76, full:"그 회사는 그 불가피한 지연을 받아들일 수밖에 없다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"has no choice but to accept", ko:"받아들일 수밖에 없다", t:"verb"},
        {en:"the inevitable delay", ko:"그 불가피한 지연을", t:"obj"}]},
      {n:77, ctx:{en:"The child walked out without a key.", ko:"그 아이는 열쇠 없이 걸어 나갔다."}, full:"그 문은 잠겨 있었을 리 없다", chunks:[
        {en:"The gate", ko:"그 문은", t:"subj"},
        {en:"cannot have been locked", ko:"잠겨 있었을 리 없다", t:"verb"}]},
      {n:78, full:"그 대표는 그 지연을 탓하지 않을 수 없다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"cannot help blaming", ko:"탓하지 않을 수 없다", t:"verb"},
        {en:"the delay", ko:"그 지연을", t:"obj"}]},
      {n:79, ctx:{en:"The engine stopped on the highway.", ko:"그 엔진이 그 고속도로에서 멈췄다."}, full:"그 회사들은 그 엔진을 점검했어야 했다", chunks:[
        {en:"The companies", ko:"그 회사들은", t:"subj"},
        {en:"should have inspected", ko:"점검했어야 했다", t:"verb"},
        {en:"the engine", ko:"그 엔진을", t:"obj"}]},
      {n:80, ctx:{en:"The event began an hour late.", ko:"그 행사는 한 시간 늦게 시작했다."}, full:"그 손님들은 서두를 필요 없었다", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"need not have hurried", ko:"서두를 필요 없었다", t:"verb"}]},
      {n:81, full:"그 비평가는 그 회사를 비난하지 않을 수 없다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"cannot but blame", ko:"비난하지 않을 수 없다", t:"verb"},
        {en:"the company", ko:"그 회사를", t:"obj"}]},
      {n:82, ctx:{en:"The company asked for the receipt.", ko:"그 회사가 그 영수증을 요구했다."}, full:"그 영수증은 버려지지 말았어야 했다", chunks:[
        {en:"The receipt", ko:"그 영수증은", t:"subj"},
        {en:"should not have been thrown away", ko:"버려지지 말았어야 했다", t:"verb"}]},
      {n:83, full:"나는 그 진솔한 의도를 존경하지 않을 수 없다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"cannot help admiring", ko:"존경하지 않을 수 없다", t:"verb"},
        {en:"the honest intention", ko:"그 진솔한 의도를", t:"obj"}]},
      {n:84, full:"우리는 그 이전 선택을 후회하지 않을 수 없다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"cannot help regretting", ko:"후회하지 않을 수 없다", t:"verb"},
        {en:"the previous choice", ko:"그 이전 선택을", t:"obj"}]},
      {n:85, ctx:{en:"The gate locks itself at night.", ko:"그 문은 밤에 저절로 잠긴다."}, full:"너는 그 문을 잠글 필요 없었다", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"need not have locked", ko:"잠글 필요 없었다", t:"verb"},
        {en:"the gate", ko:"그 문을", t:"obj"}]},
      {n:86, full:"그 운동선수는 그 기회를 받는 것도 당연하다", chunks:[
        {en:"The athlete", ko:"그 운동선수는", t:"subj"},
        {en:"may well be given", ko:"받는 것도 당연하다", t:"verb"},
        {en:"the chance", ko:"그 기회를", t:"obj"}]},
      {n:87, ctx:{en:"The child caused no trouble.", ko:"그 아이는 아무 문제도 일으키지 않았다."}, full:"우리는 그 결백한 아이를 용서했어야 했다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"ought to have forgiven", ko:"용서했어야 했다", t:"verb"},
        {en:"the innocent child", ko:"그 결백한 아이를", t:"obj"}]},
      {n:88, ctx:{en:"The critics finished two articles.", ko:"그 비평가들은 기사 두 편을 끝냈다."}, full:"그 비평가들은 그 한 달 전체를 낭비했을 리 없다", chunks:[
        {en:"The critics", ko:"그 비평가들은", t:"subj"},
        {en:"cannot have wasted", ko:"낭비했을 리 없다", t:"verb"},
        {en:"the whole month", ko:"그 한 달 전체를", t:"obj"}]},
      {n:89, ctx:{en:"The police closed the festival early.", ko:"경찰이 그 축제를 일찍 닫았다."}, full:"그 범죄는 일어났을지도 모른다 (그 축제 동안)", chunks:[
        {en:"The crime", ko:"그 범죄는", t:"subj"},
        {en:"may have happened", ko:"일어났을지도 모른다", t:"verb"},
        {en:"during the festival", ko:"그 축제 동안", t:"mod"}]},
      {n:90, ctx:{en:"Every room was open.", ko:"모든 방이 열려 있었다."}, full:"경찰은 그 호텔을 수색했음에 틀림없다", chunks:[
        {en:"The police", ko:"경찰은", t:"subj"},
        {en:"must have searched", ko:"수색했음에 틀림없다", t:"verb"},
        {en:"the hotel", ko:"그 호텔을", t:"obj"}]},
      {n:91, full:"그 회사는 그 요청을 거절할 수밖에 없었다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"had no choice but to refuse", ko:"거절할 수밖에 없었다", t:"verb"},
        {en:"the request", ko:"그 요청을", t:"obj"}]},
      {n:92, ctx:{en:"The child was at school.", ko:"그 아이는 학교에 있었다."}, full:"그 아이는 그 사고를 일으켰을 리 없다", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"cannot have caused", ko:"일으켰을 리 없다", t:"verb"},
        {en:"the accident", ko:"그 사고를", t:"obj"}]},
      {n:93, ctx:{en:"The moment has not come.", ko:"그 순간은 오지 않았다."}, full:"그 회사는 기다리는 편이 낫다 (시의적절한 순간을)", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"may as well wait", ko:"기다리는 편이 낫다", t:"verb"},
        {en:"for the opportune moment", ko:"시의적절한 순간을", t:"mod"}]},
      {n:94, ctx:{en:"The gate was locked all night.", ko:"그 문은 밤새 잠겨 있었다."}, full:"그 손님들은 달아났을 리 없다 (그 문을 통해)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"cannot have escaped", ko:"달아났을 리 없다", t:"verb"},
        {en:"through the gate", ko:"그 문을 통해", t:"mod"}]},
      {n:95, ctx:{en:"The crowd left the hotel in a minute.", ko:"그 군중은 순식간에 그 호텔을 떠났다."}, full:"그 소음이 그 군중을 화나게 만들었음에 틀림없다", chunks:[
        {en:"The noise", ko:"그 소음이", t:"subj"},
        {en:"must have made", ko:"만들었음에 틀림없다", t:"verb"},
        {en:"the crowd", ko:"그 군중을", t:"obj"},
        {en:"angry", ko:"화나게", t:"comp"}]},
      {n:96, full:"우리는 그 작가를 존경하지 않을 수 없다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"cannot help but admire", ko:"존경하지 않을 수 없다", t:"verb"},
        {en:"the author", ko:"그 작가를", t:"obj"}]},
      {n:97, ctx:{en:"The key is not on the desk.", ko:"그 열쇠가 그 책상 위에 없다."}, full:"누군가 그 열쇠를 훔쳤음에 틀림없다", chunks:[
        {en:"Someone", ko:"누군가", t:"subj"},
        {en:"must have stolen", ko:"훔쳤음에 틀림없다", t:"verb"},
        {en:"the key", ko:"그 열쇠를", t:"obj"}]},
      {n:98, full:"나는 그 부담을 차라리 받아들이겠다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"would rather accept", ko:"차라리 받아들이겠다", t:"verb"},
        {en:"the burden", ko:"그 부담을", t:"obj"}]},
      {n:99, ctx:{en:"The child is not in the room.", ko:"그 아이는 그 방에 없다."}, full:"그 아이는 달아났음에 틀림없다 (그 문을 통해)", chunks:[
        {en:"The child", ko:"그 아이는", t:"subj"},
        {en:"must have escaped", ko:"달아났음에 틀림없다", t:"verb"},
        {en:"through the gate", ko:"그 문을 통해", t:"mod"}]},
      {n:100, ctx:{en:"The accident was not the fault of the nurse.", ko:"그 사고는 그 간호사의 잘못이 아니었다."}, full:"그 의사는 미안해하지 말았어야 했다 (그 사고에 대해)", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"should not have been", ko:"~이지 말았어야 했다", t:"verb"},
        {en:"sorry", ko:"미안한", t:"comp"},
        {en:"for the accident", ko:"그 사고에 대해", t:"mod"}]},
      {n:101, full:"나는 그 이야기를 믿지 않을 수 없다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"cannot help believing", ko:"믿지 않을 수 없다", t:"verb"},
        {en:"the story", ko:"그 이야기를", t:"obj"}]},
      {n:102, full:"우리는 그 일정을 엄격하게 유지할 수밖에 없다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"have no choice but to keep", ko:"유지할 수밖에 없다", t:"verb"},
        {en:"the schedule", ko:"그 일정을", t:"obj"},
        {en:"strict", ko:"엄격하게", t:"comp"}]},
      {n:103, ctx:{en:"The team cannot carry more.", ko:"그 팀은 더 이상 짊어질 수 없다."}, full:"그 대표는 그 부담을 가볍게 유지하는 편이 낫다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"may as well keep", ko:"유지하는 편이 낫다", t:"verb"},
        {en:"the burden", ko:"그 부담을", t:"obj"},
        {en:"light", ko:"가볍게", t:"comp"}]},
      {n:104, ctx:{en:"The company asked for the receipt.", ko:"그 회사가 그 영수증을 요구했다."}, full:"너는 그 영수증을 잃어버리지 말았어야 했다", chunks:[
        {en:"You", ko:"너는", t:"subj"},
        {en:"should not have lost", ko:"잃어버리지 말았어야 했다", t:"verb"},
        {en:"the receipt", ko:"그 영수증을", t:"obj"}]},
      {n:105, full:"그 시의적절한 순간은 놓쳐지는 것도 당연하다", chunks:[
        {en:"The opportune moment", ko:"그 시의적절한 순간은", t:"subj"},
        {en:"may well be lost", ko:"놓쳐지는 것도 당연하다", t:"verb"}]},
      {n:106, ctx:{en:"The team worked through every night for a month.", ko:"그 팀은 한 달 동안 매일 밤새워 일했다."}, full:"그 상이 그 고통에 값하는 것도 당연하다", chunks:[
        {en:"The award", ko:"그 상이", t:"subj"},
        {en:"may well be", ko:"~인 것도 당연하다", t:"verb"},
        {en:"worth the pain", ko:"그 고통에 값하는", t:"comp"}]},
      {n:107, ctx:{en:"The guests waited a whole hour.", ko:"그 손님들은 꼬박 한 시간을 기다렸다."}, full:"그 회사는 사과했어야 했다 (그 손님들에게) (그 지연에 대해)", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"should have apologized", ko:"사과했어야 했다", t:"verb"},
        {en:"to the guests", ko:"그 손님들에게", t:"mod"},
        {en:"for the delay", ko:"그 지연에 대해", t:"mod"}]},
      {n:108, full:"그 회사는 그 고객에게 답변을 줄 수밖에 없다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"has no choice but to give", ko:"줄 수밖에 없다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"an answer", ko:"답변을", t:"obj"}]},
      {n:109, ctx:{en:"The child confessed the fault at once.", ko:"그 아이는 즉시 그 잘못을 자백했다."}, full:"우리는 그 잘못을 용서했어야 했다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"ought to have forgiven", ko:"용서했어야 했다", t:"verb"},
        {en:"the fault", ko:"그 잘못을", t:"obj"}]},
      {n:110, ctx:{en:"The athlete lost every game this season.", ko:"그 운동선수는 이번 시즌 모든 경기를 졌다."}, full:"그 운동선수의 경력이 끝나는 것도 당연하다 (곧)", chunks:[
        {en:"The career of the athlete", ko:"그 운동선수의 경력이", t:"subj"},
        {en:"may well end", ko:"끝나는 것도 당연하다", t:"verb"},
        {en:"soon", ko:"곧", t:"mod"}]},
      {n:111, ctx:{en:"The alternate plan has a deep risk.", ko:"그 대안 계획은 깊은 위험을 가지고 있다."}, full:"그 회사는 선택하는 편이 낫다 (그 안전한 계획을)", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"may as well opt", ko:"선택하는 편이 낫다", t:"verb"},
        {en:"for the safe plan", ko:"그 안전한 계획을", t:"mod"}]},
      {n:112, ctx:{en:"The alarm started without a cause.", ko:"그 경보기가 이유 없이 울리기 시작했다."}, full:"그 아이가 잘못된 키를 눌렀을지도 모른다", chunks:[
        {en:"The child", ko:"그 아이가", t:"subj"},
        {en:"may have pressed", ko:"눌렀을지도 모른다", t:"verb"},
        {en:"the wrong key", ko:"잘못된 키를", t:"obj"}]},
      {n:113, ctx:{en:"The gate stood open all night.", ko:"그 문은 밤새 열린 채로 있었다."}, full:"그 문은 열린 채로 두어졌음에 틀림없다", chunks:[
        {en:"The gate", ko:"그 문은", t:"subj"},
        {en:"must have been left", ko:"두어졌음에 틀림없다", t:"verb"},
        {en:"open", ko:"열린 채로", t:"comp"}]},
      {n:114, ctx:{en:"The previous advice never failed.", ko:"이전 조언은 한 번도 틀리지 않았다."}, full:"네가 그 이전 조언을 선호하는 것도 당연하다", chunks:[
        {en:"You", ko:"네가", t:"subj"},
        {en:"may well prefer", ko:"선호하는 것도 당연하다", t:"verb"},
        {en:"the previous advice", ko:"그 이전 조언을", t:"obj"}]},
      {n:115, ctx:{en:"The guests searched every bag.", ko:"그 손님들은 모든 가방을 뒤졌다."}, full:"그 손님들은 그 영수증을 잃어버렸음에 틀림없다", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"must have lost", ko:"잃어버렸음에 틀림없다", t:"verb"},
        {en:"the receipt", ko:"그 영수증을", t:"obj"}]},
      {n:116, ctx:{en:"The rain stopped in the morning.", ko:"그 비는 아침에 그쳤다."}, full:"그 우산은 분실되었을지도 모른다", chunks:[
        {en:"The umbrella", ko:"그 우산은", t:"subj"},
        {en:"may have been lost", ko:"분실되었을지도 모른다", t:"verb"}]},
      {n:117, full:"그 손님들은 울지 않을 수 없다 (그 결혼식에서)", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"cannot help crying", ko:"울지 않을 수 없다", t:"verb"},
        {en:"at the wedding", ko:"그 결혼식에서", t:"mod"}]},
      {n:118, ctx:{en:"Every member kept a paper.", ko:"모든 구성원이 종이 한 장을 가지고 있었다."}, full:"모든 구성원은 영수증을 받았음에 틀림없다", chunks:[
        {en:"Every member", ko:"모든 구성원은", t:"subj"},
        {en:"must have been given", ko:"받았음에 틀림없다", t:"verb"},
        {en:"a receipt", ko:"영수증을", t:"obj"}]},
    ]},
    { id:"명령문·청유문·감탄문·의문문", items:[
      {n:1, full:"무엇이 그 손님들을 조용하게 만들었니?", chunks:[
        {en:"What", ko:"무엇이", t:"subj"},
        {en:"made", ko:"만들었니", t:"verb"},
        {en:"the guests", ko:"그 손님들을", t:"obj"},
        {en:"silent", ko:"조용하게", t:"comp"}]},
      {n:2, full:"조심스럽게 행동하자", chunks:[
        {en:"Let us behave", ko:"행동하자", t:"verb"},
        {en:"with caution", ko:"조심스럽게", t:"mod"}]},
      {n:3, full:"그 아이들이 조용하게 유지되도록 두지 마라", chunks:[
        {en:"Do not let", ko:"두지 마라", t:"verb"},
        {en:"the children", ko:"그 아이들이", t:"subj"},
        {en:"be kept", ko:"유지되도록", t:"verb"},
        {en:"silent", ko:"조용하게", t:"comp"}]},
      {n:4, full:"그 수프는 어떤 맛이 나니?", chunks:[
        {en:"How", ko:"어떻게", t:"comp"},
        {en:"does", ko:"~하니?", t:"skip", c:"verb"},
        {en:"the soup", ko:"그 수프는", t:"subj"},
        {en:"taste", ko:"맛이 나다", t:"verb"}]},
      {n:5, full:"그 섬이 얼마나 멋진 광경을 가지고 있는가!", chunks:[
        {en:"What an awesome view", ko:"얼마나 멋진 광경을", t:"obj"},
        {en:"the island", ko:"그 섬이", t:"subj"},
        {en:"has", ko:"가지고 있는가", t:"verb"}]},
      {n:6, full:"그 두 상자의 무게를 비교해라", chunks:[
        {en:"Compare", ko:"비교해라", t:"verb"},
        {en:"the weight of the two boxes", ko:"그 두 상자의 무게를", t:"obj"}]},
      {n:7, full:"그 모험이 얼마나 놀라웠는가!", chunks:[
        {en:"How amazing", ko:"얼마나 놀라운", t:"comp"},
        {en:"the adventure", ko:"그 모험이", t:"subj"},
        {en:"was", ko:"~였는가", t:"verb"}]},
      {n:8, full:"그 팀은 그 방법을 따를 거니?", chunks:[
        {en:"Will", ko:"~할 거니?", t:"skip", c:"verb"},
        {en:"the team", ko:"그 팀은", t:"subj"},
        {en:"follow", ko:"따르다", t:"verb"},
        {en:"the method", ko:"그 방법을", t:"obj"}]},
      {n:9, full:"어느 축제가 새벽에 끝나니?", chunks:[
        {en:"Which festival", ko:"어느 축제가", t:"subj"},
        {en:"ends", ko:"끝나니", t:"verb"},
        {en:"at dawn", ko:"새벽에", t:"mod"}]},
      {n:10, full:"그 방법의 목적은 무엇이니?", chunks:[
        {en:"What", ko:"무엇이", t:"comp"},
        {en:"is", ko:"~이니", t:"verb"},
        {en:"the purpose of the method", ko:"그 방법의 목적은", t:"subj"}]},
      {n:11, full:"그 손님들은 어디에서 기다려야 하니?", chunks:[
        {en:"Where", ko:"어디에서", t:"mod"},
        {en:"should", ko:"~해야 하니?", t:"skip", c:"verb"},
        {en:"the guests", ko:"그 손님들은", t:"subj"},
        {en:"wait", ko:"기다리다", t:"verb"}]},
      {n:12, full:"어느 기사가 수집되었니?", chunks:[
        {en:"Which article", ko:"어느 기사가", t:"subj"},
        {en:"has been collected", ko:"수집되었니", t:"verb"}]},
      {n:13, full:"그 티켓은 얼마의 돈이 드니?", chunks:[
        {en:"How much money", ko:"얼마의 돈이", t:"obj"},
        {en:"does", ko:"~하니?", t:"skip", c:"verb"},
        {en:"the ticket", ko:"그 티켓은", t:"subj"},
        {en:"cost", ko:"들다", t:"verb"}]},
      {n:14, full:"그 산은 얼마나 높니?", chunks:[
        {en:"How high", ko:"얼마나 높이", t:"comp"},
        {en:"is", ko:"~이니", t:"verb"},
        {en:"the mountain", ko:"그 산은", t:"subj"}]},
      {n:15, full:"그 이유가 잊히지 않게 하라", chunks:[
        {en:"Let", ko:"하라", t:"verb"},
        {en:"the reason", ko:"그 이유가", t:"subj"},
        {en:"not be forgotten", ko:"잊히지 않도록", t:"verb"}]},
      {n:16, full:"그 비평가는 무엇을 비교했니?", chunks:[
        {en:"What", ko:"무엇을", t:"obj"},
        {en:"did", ko:"~했니?", t:"skip", c:"verb"},
        {en:"the critic", ko:"그 비평가는", t:"subj"},
        {en:"compare", ko:"비교하다", t:"verb"}]},
      {n:17, full:"그 아이들을 조용하게 두지 마라", chunks:[
        {en:"Do not keep", ko:"두지 마라", t:"verb"},
        {en:"the children", ko:"그 아이들을", t:"obj"},
        {en:"silent", ko:"조용하게", t:"comp"}]},
      {n:18, full:"그 방은 조용하게 유지되고 있니?", chunks:[
        {en:"Is", ko:"~이니?", t:"skip", c:"verb"},
        {en:"the room", ko:"그 방은", t:"subj"},
        {en:"being kept", ko:"유지되고 있는", t:"verb"},
        {en:"silent", ko:"조용하게", t:"comp"}]},
      {n:19, full:"그 손님들은 왜 조용하니?", chunks:[
        {en:"Why", ko:"왜", t:"mod"},
        {en:"are", ko:"~이니", t:"verb"},
        {en:"the guests", ko:"그 손님들은", t:"subj"},
        {en:"silent", ko:"조용한", t:"comp"}]},
      {n:20, full:"그 축제들은 취소되었니?", chunks:[
        {en:"Were", ko:"~였니?", t:"skip", c:"verb"},
        {en:"the festivals", ko:"그 축제들은", t:"subj"},
        {en:"cancelled", ko:"취소된", t:"verb"}]},
      {n:21, full:"그 기사들은 그 작가에 의해 출간되었니?", chunks:[
        {en:"Were", ko:"~였니?", t:"skip", c:"verb"},
        {en:"the articles", ko:"그 기사들은", t:"subj"},
        {en:"published", ko:"출간된", t:"verb"},
        {en:"by the author", ko:"그 작가에 의해", t:"mod"}]},
      {n:22, full:"무엇이 그 소음을 일으켰니?", chunks:[
        {en:"What", ko:"무엇이", t:"subj"},
        {en:"caused", ko:"일으켰니", t:"verb"},
        {en:"the noise", ko:"그 소음을", t:"obj"}]},
      {n:23, full:"무엇이 그 비평가들에 의해 비교되었니?", chunks:[
        {en:"What", ko:"무엇이", t:"subj"},
        {en:"was compared", ko:"비교되었니", t:"verb"},
        {en:"by the critics", ko:"그 비평가들에 의해", t:"mod"}]},
      {n:24, full:"누구의 이유가 믿을 만하니?", chunks:[
        {en:"Whose reason", ko:"누구의 이유가", t:"subj"},
        {en:"is", ko:"~이니", t:"verb"},
        {en:"credible", ko:"믿을 만한", t:"comp"}]},
      {n:25, full:"예의 바르게 굴어라 (그 손님들에게)", chunks:[
        {en:"Be", ko:"~해라", t:"verb"},
        {en:"polite", ko:"예의 바르게", t:"comp"},
        {en:"to the guests", ko:"그 손님들에게", t:"mod"}]},
      {n:26, full:"얼마나 많은 손님이 그 사무실에 들어갔니?", chunks:[
        {en:"How many guests", ko:"얼마나 많은 손님이", t:"subj"},
        {en:"entered", ko:"들어갔니", t:"verb"},
        {en:"the office", ko:"그 사무실에", t:"obj"}]},
      {n:27, full:"그 회사는 왜 그 파티를 취소했니?", chunks:[
        {en:"Why", ko:"왜", t:"mod"},
        {en:"did", ko:"~했니?", t:"skip", c:"verb"},
        {en:"the company", ko:"그 회사는", t:"subj"},
        {en:"cancel", ko:"취소하다", t:"verb"},
        {en:"the party", ko:"그 파티를", t:"obj"}]},
      {n:28, ctx:{en:"The parents blamed the boy for the game.", ko:"그 부모는 그 게임 때문에 그 소년을 나무랐다."}, full:"그 소년은 정말 공부한다 (매일 밤)", chunks:[
        {en:"The boy", ko:"그 소년은", t:"subj"},
        {en:"does study", ko:"정말 공부한다", t:"verb"},
        {en:"every night", ko:"매일 밤", t:"mod"}]},
      {n:29, full:"그 대표는 그 비용을 신경 쓰니?", chunks:[
        {en:"Does", ko:"~하니?", t:"skip", c:"verb"},
        {en:"the leader", ko:"그 대표는", t:"subj"},
        {en:"mind", ko:"신경 쓰다", t:"verb"},
        {en:"the cost", ko:"그 비용을", t:"obj"}]},
      {n:30, full:"그 손님들은 얼마나 일찍 도착했니?", chunks:[
        {en:"How early", ko:"얼마나 일찍", t:"mod"},
        {en:"did", ko:"~했니?", t:"skip", c:"verb"},
        {en:"the guests", ko:"그 손님들은", t:"subj"},
        {en:"arrive", ko:"도착하다", t:"verb"}]},
      {n:31, full:"우리는 무엇을 비교해야 하니?", chunks:[
        {en:"What", ko:"무엇을", t:"obj"},
        {en:"should", ko:"~해야 하니?", t:"skip", c:"verb"},
        {en:"we", ko:"우리는", t:"subj"},
        {en:"compare", ko:"비교하다", t:"verb"}]},
      {n:32, full:"누가 그 문을 밀었다고 너는 믿니?", chunks:[
        {en:"Who", ko:"누가", t:"subj"},
        {en:"do you believe", ko:"", t:"skip"},
        {en:"pushed", ko:"밀었다고 믿니", t:"verb"},
        {en:"the gate", ko:"그 문을", t:"obj"}]},
      {n:33, full:"조심스럽게 행동하자 (그 문에서)", chunks:[
        {en:"Let's behave", ko:"행동하자", t:"verb"},
        {en:"with caution", ko:"조심스럽게", t:"mod"},
        {en:"at the gate", ko:"그 문에서", t:"mod"}]},
      {n:34, full:"그것이 얼마나 끔찍한 폭풍이었는가!", chunks:[
        {en:"What a terrible storm", ko:"얼마나 끔찍한 폭풍", t:"comp"},
        {en:"it", ko:"그것이", t:"subj"},
        {en:"was", ko:"~였는가", t:"verb"}]},
      {n:35, full:"우리가 그 문에서 기다려도 되니?", chunks:[
        {en:"May", ko:"~해도 되니?", t:"skip", c:"verb"},
        {en:"we", ko:"우리가", t:"subj"},
        {en:"wait", ko:"기다리다", t:"verb"},
        {en:"at the gate", ko:"그 문에서", t:"mod"}]},
      {n:36, full:"그 대표가 왜 그 요청을 거절했다고 너는 생각하니?", chunks:[
        {en:"Why", ko:"왜", t:"mod"},
        {en:"do you suppose", ko:"", t:"skip"},
        {en:"the leader", ko:"그 대표가", t:"subj"},
        {en:"refused", ko:"거절했다고 생각하니", t:"verb"},
        {en:"the request", ko:"그 요청을", t:"obj"}]},
      {n:37, full:"그 회사는 그 세금을 낸다, 그리고 그 구성원들도 그렇다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"pays", ko:"낸다", t:"verb"},
        {en:"the tax,", ko:"그 세금을", t:"obj"},
        {en:"and", ko:"", t:"skip"},
        {en:"the members", ko:"그 구성원들도", t:"subj"},
        {en:"do too", ko:"그렇다", t:"verb"}]},
      {n:38, full:"그 팀은 얼마나 자주 겨루니?", chunks:[
        {en:"How often", ko:"얼마나 자주", t:"mod"},
        {en:"does", ko:"~하니?", t:"skip", c:"verb"},
        {en:"the team", ko:"그 팀은", t:"subj"},
        {en:"compete", ko:"겨루다", t:"verb"}]},
      {n:39, full:"무엇이 그 비평가들에 의해 비교되었다고 너는 생각하니?", chunks:[
        {en:"What", ko:"무엇이", t:"subj"},
        {en:"do you think", ko:"", t:"skip"},
        {en:"was compared", ko:"비교되었다고 생각하니", t:"verb"},
        {en:"by the critics", ko:"그 비평가들에 의해", t:"mod"}]},
      {n:40, full:"그 문은 밀리고 있니?", chunks:[
        {en:"Is", ko:"~이니?", t:"skip", c:"verb"},
        {en:"the gate", ko:"그 문은", t:"subj"},
        {en:"being pushed", ko:"밀리고 있는", t:"verb"}]},
      {n:41, full:"그것들이 얼마나 훌륭한 아이디어인가!", chunks:[
        {en:"What brilliant ideas", ko:"얼마나 훌륭한 아이디어", t:"comp"},
        {en:"they", ko:"그것들이", t:"subj"},
        {en:"are", ko:"~인가", t:"verb"}]},
      {n:42, full:"누가 그 상을 받을 거라고 너는 상상하니?", chunks:[
        {en:"Who", ko:"누가", t:"subj"},
        {en:"do you imagine", ko:"", t:"skip"},
        {en:"will win", ko:"받을 거라고 상상하니", t:"verb"},
        {en:"the award", ko:"그 상을", t:"obj"}]},
      {n:43, full:"그 문이 열리게 하라", chunks:[
        {en:"Let", ko:"하라", t:"verb"},
        {en:"the gate", ko:"그 문이", t:"subj"},
        {en:"be opened", ko:"열리도록", t:"verb"}]},
      {n:44, full:"깊게 숨 쉬어라", chunks:[
        {en:"Breathe", ko:"숨 쉬어라", t:"verb"},
        {en:"deeply", ko:"깊게", t:"mod"}]},
      {n:45, full:"절대 속삭이지 마라 (그 수업 중에)", chunks:[
        {en:"Never whisper", ko:"절대 속삭이지 마라", t:"verb"},
        {en:"during the class", ko:"그 수업 중에", t:"mod"}]},
      {n:46, full:"그 폭풍들이 얼마나 끔찍했는가!", chunks:[
        {en:"How terrible", ko:"얼마나 끔찍한", t:"comp"},
        {en:"the storms", ko:"그 폭풍들이", t:"subj"},
        {en:"were", ko:"~였는가", t:"verb"}]},
      {n:47, full:"그 손님들이 어디에 모였다고 너는 생각하니?", chunks:[
        {en:"Where", ko:"어디에", t:"mod"},
        {en:"do you think", ko:"", t:"skip"},
        {en:"the guests", ko:"그 손님들이", t:"subj"},
        {en:"gathered", ko:"모였다고 생각하니", t:"verb"}]},
      {n:48, full:"그 도로는 눈으로 덮였니?", chunks:[
        {en:"Was", ko:"~였니?", t:"skip", c:"verb"},
        {en:"the road", ko:"그 도로는", t:"subj"},
        {en:"covered", ko:"덮인", t:"verb"},
        {en:"by the snow", ko:"눈으로", t:"mod"}]},
      {n:49, full:"소리 지르지 마라 (그 모퉁이에서)", chunks:[
        {en:"Do not shout", ko:"소리 지르지 마라", t:"verb"},
        {en:"at the corner", ko:"그 모퉁이에서", t:"mod"}]},
      {n:50, full:"경계해라 (그 모퉁이에서)", chunks:[
        {en:"Be", ko:"~해라", t:"verb"},
        {en:"alert", ko:"경계하게", t:"comp"},
        {en:"at the corner", ko:"그 모퉁이에서", t:"mod"}]},
      {n:51, ctx:{en:"No one expected the train on time.", ko:"아무도 그 기차가 정시에 올 거라 예상하지 않았다."}, full:"그 기차는 정말 도착했다 (정시에)", chunks:[
        {en:"The train", ko:"그 기차는", t:"subj"},
        {en:"did arrive", ko:"정말 도착했다", t:"verb"},
        {en:"on time", ko:"정시에", t:"mod"}]},
      {n:52, full:"나의 누나는 매일 아침 노래한다, 그리고 나도 그렇다", chunks:[
        {en:"My sister", ko:"나의 누나는", t:"subj"},
        {en:"sings", ko:"노래한다", t:"verb"},
        {en:"every morning,", ko:"매일 아침", t:"mod"},
        {en:"and", ko:"", t:"skip"},
        {en:"I", ko:"나도", t:"subj"},
        {en:"do too", ko:"그렇다", t:"verb"}]},
      {n:53, full:"그 방법이 얼마나 훌륭한가!", chunks:[
        {en:"How brilliant", ko:"얼마나 훌륭한", t:"comp"},
        {en:"the method", ko:"그 방법이", t:"subj"},
        {en:"is", ko:"~인가", t:"verb"}]},
      {n:54, full:"그 작가들은 무엇을 출간했니?", chunks:[
        {en:"What", ko:"무엇을", t:"obj"},
        {en:"did", ko:"~했니?", t:"skip", c:"verb"},
        {en:"the authors", ko:"그 작가들은", t:"subj"},
        {en:"publish", ko:"출간하다", t:"verb"}]},
      {n:55, full:"너는 그 박물관에 가 본 적 있니?", chunks:[
        {en:"Have", ko:"~했니?", t:"skip", c:"verb"},
        {en:"you", ko:"너는", t:"subj"},
        {en:"ever been to", ko:"가 본 적 있다", t:"verb"},
        {en:"the museum", ko:"그 박물관에", t:"mod"}]},
      {n:56, full:"그 거리가 얼마나 먼가!", chunks:[
        {en:"How great", ko:"얼마나 먼", t:"comp"},
        {en:"the distance", ko:"그 거리가", t:"subj"},
        {en:"is", ko:"~인가", t:"verb"}]},
      {n:57, full:"그 문은 누구에 의해 밀렸니?", chunks:[
        {en:"By whom", ko:"누구에 의해", t:"mod"},
        {en:"was", ko:"~였니?", t:"skip", c:"verb"},
        {en:"the gate", ko:"그 문은", t:"subj"},
        {en:"pushed", ko:"밀린", t:"verb"}]},
      {n:58, full:"너는 그 소음을 신경 쓰니?", chunks:[
        {en:"Do", ko:"~하니?", t:"skip", c:"verb"},
        {en:"you", ko:"너는", t:"subj"},
        {en:"mind", ko:"신경 쓰다", t:"verb"},
        {en:"the noise", ko:"그 소음을", t:"obj"}]},
      {n:59, full:"너는 그 목적을 아니?", chunks:[
        {en:"Do", ko:"~하니?", t:"skip", c:"verb"},
        {en:"you", ko:"너는", t:"subj"},
        {en:"know", ko:"알다", t:"verb"},
        {en:"the purpose", ko:"그 목적을", t:"obj"}]},
      {n:60, full:"내가 여기에서 내 이름을 등록해도 되니?", chunks:[
        {en:"Can", ko:"~해도 되니?", t:"skip", c:"verb"},
        {en:"I", ko:"내가", t:"subj"},
        {en:"register", ko:"등록하다", t:"verb"},
        {en:"my name", ko:"내 이름을", t:"obj"},
        {en:"here", ko:"여기에서", t:"mod"}]},
      {n:61, full:"그 티켓이 분실되지 않게 하라", chunks:[
        {en:"Let", ko:"하라", t:"verb"},
        {en:"the ticket", ko:"그 티켓이", t:"subj"},
        {en:"not be lost", ko:"분실되지 않도록", t:"verb"}]},
      {n:62, full:"그 계획은 어떻게 들리니?", chunks:[
        {en:"How", ko:"어떻게", t:"comp"},
        {en:"does", ko:"~하니?", t:"skip", c:"verb"},
        {en:"the plan", ko:"그 계획은", t:"subj"},
        {en:"sound", ko:"들리다", t:"verb"}]},
      {n:63, ctx:{en:"The critics warned the team about the rule.", ko:"그 비평가들은 그 규칙에 대해 그 팀에 경고했다."}, full:"그 팀은 그 규칙을 정말 지킨다", chunks:[
        {en:"The team", ko:"그 팀은", t:"subj"},
        {en:"does obey", ko:"정말 지킨다", t:"verb"},
        {en:"the rule", ko:"그 규칙을", t:"obj"}]},
      {n:64, full:"그 작가는 얼마나 많은 기사를 출간했니?", chunks:[
        {en:"How many articles", ko:"얼마나 많은 기사를", t:"obj"},
        {en:"has", ko:"~했니?", t:"skip", c:"verb"},
        {en:"the author", ko:"그 작가는", t:"subj"},
        {en:"published", ko:"출간하다", t:"verb"}]},
      {n:65, full:"그 바다가 얼마나 멋진가!", chunks:[
        {en:"How awesome", ko:"얼마나 멋진", t:"comp"},
        {en:"the ocean", ko:"그 바다가", t:"subj"},
        {en:"is", ko:"~인가", t:"verb"}]},
      {n:66, full:"그 비용이 비교되게 하라", chunks:[
        {en:"Let", ko:"하라", t:"verb"},
        {en:"the cost", ko:"그 비용이", t:"subj"},
        {en:"be compared", ko:"비교되도록", t:"verb"}]},
      {n:67, full:"어느 방법이 직접적이니?", chunks:[
        {en:"Which method", ko:"어느 방법이", t:"subj"},
        {en:"is", ko:"~이니", t:"verb"},
        {en:"direct", ko:"직접적인", t:"comp"}]},
      {n:68, full:"그 회사가 왜 그 파티를 취소했다고 너는 생각하니?", chunks:[
        {en:"Why", ko:"왜", t:"mod"},
        {en:"do you think", ko:"", t:"skip"},
        {en:"the company", ko:"그 회사가", t:"subj"},
        {en:"cancelled", ko:"취소했다고 생각하니", t:"verb"},
        {en:"the party", ko:"그 파티를", t:"obj"}]},
      {n:69, full:"그 아이들은 그 수영장에서 헤엄친다, 그리고 그 어른들도 그렇다", chunks:[
        {en:"The children", ko:"그 아이들은", t:"subj"},
        {en:"swim", ko:"헤엄친다", t:"verb"},
        {en:"in the pool,", ko:"그 수영장에서", t:"mod"},
        {en:"and", ko:"", t:"skip"},
        {en:"the adults", ko:"그 어른들도", t:"subj"},
        {en:"do too", ko:"그렇다", t:"verb"}]},
      {n:70, full:"너는 그 두 산의 높이를 비교할 수 있니?", chunks:[
        {en:"Can", ko:"~할 수 있니?", t:"skip", c:"verb"},
        {en:"you", ko:"너는", t:"subj"},
        {en:"compare", ko:"비교하다", t:"verb"},
        {en:"the height of the two mountains", ko:"그 두 산의 높이를", t:"obj"}]},
      {n:71, full:"그 방법의 목적을 절대 잊지 마라", chunks:[
        {en:"Never forget", ko:"절대 잊지 마라", t:"verb"},
        {en:"the purpose of the method", ko:"그 방법의 목적을", t:"obj"}]},
      {n:72, full:"그 사원은 얼마나 높니?", chunks:[
        {en:"How tall", ko:"얼마나 높이", t:"comp"},
        {en:"is", ko:"~이니", t:"verb"},
        {en:"the temple", ko:"그 사원은", t:"subj"}]},
      {n:73, full:"무엇이 그 군중에 의해 밀렸니?", chunks:[
        {en:"What", ko:"무엇이", t:"subj"},
        {en:"was pushed", ko:"밀렸니", t:"verb"},
        {en:"by the crowd", ko:"그 군중에 의해", t:"mod"}]},
      {n:74, full:"그 손님들은 예의 바르니?", chunks:[
        {en:"Are", ko:"~이니", t:"verb"},
        {en:"the guests", ko:"그 손님들은", t:"subj"},
        {en:"polite", ko:"예의 바른", t:"comp"}]},
      {n:75, full:"그 문을 부드럽게 밀어라", chunks:[
        {en:"Push", ko:"밀어라", t:"verb"},
        {en:"the gate", ko:"그 문을", t:"obj"},
        {en:"gently", ko:"부드럽게", t:"mod"}]},
      {n:76, full:"그 손님들에게 그 이유를 말해라", chunks:[
        {en:"Tell", ko:"말해라", t:"verb"},
        {en:"the guests", ko:"그 손님들에게", t:"obj"},
        {en:"the reason", ko:"그 이유를", t:"obj"}]},
      {n:77, full:"우리는 조용해야 하니?", chunks:[
        {en:"Should", ko:"~해야 하니?", t:"skip", c:"verb"},
        {en:"we", ko:"우리는", t:"subj"},
        {en:"be", ko:"~이다", t:"verb"},
        {en:"silent", ko:"조용한", t:"comp"}]},
      {n:78, full:"그 기사들이 출간되게 하라", chunks:[
        {en:"Let", ko:"하라", t:"verb"},
        {en:"the articles", ko:"그 기사들이", t:"subj"},
        {en:"be published", ko:"출간되도록", t:"verb"}]},
      {n:79, full:"그 아이들은 이유를 들었니?", chunks:[
        {en:"Were", ko:"~였니?", t:"skip", c:"verb"},
        {en:"the children", ko:"그 아이들은", t:"subj"},
        {en:"given", ko:"받은", t:"verb"},
        {en:"a reason", ko:"이유를", t:"obj"}]},
      {n:80, full:"그 축제는 무엇에 의해 망가졌니?", chunks:[
        {en:"By what", ko:"무엇에 의해", t:"mod"},
        {en:"was", ko:"~였니?", t:"skip", c:"verb"},
        {en:"the festival", ko:"그 축제는", t:"subj"},
        {en:"ruined", ko:"망가진", t:"verb"}]},
      {n:81, full:"그 티켓의 비용을 신경 써라", chunks:[
        {en:"Mind", ko:"신경 써라", t:"verb"},
        {en:"the cost of the ticket", ko:"그 티켓의 비용을", t:"obj"}]},
      {n:82, full:"어느 방법이 직접적이라고 너는 생각하니?", chunks:[
        {en:"Which method", ko:"어느 방법이", t:"subj"},
        {en:"do you think", ko:"", t:"skip"},
        {en:"is", ko:"~라고 생각하니", t:"verb"},
        {en:"direct", ko:"직접적인", t:"comp"}]},
      {n:83, full:"내가 그 사무실에 들어가도 되니?", chunks:[
        {en:"May", ko:"~해도 되니?", t:"skip", c:"verb"},
        {en:"I", ko:"내가", t:"subj"},
        {en:"enter", ko:"들어가다", t:"verb"},
        {en:"the office", ko:"그 사무실에", t:"obj"}]},
      {n:84, full:"그 축제는 언제 끝날 거니?", chunks:[
        {en:"When", ko:"언제", t:"mod"},
        {en:"will", ko:"~할 거니?", t:"skip", c:"verb"},
        {en:"the festival", ko:"그 축제는", t:"subj"},
        {en:"end", ko:"끝나다", t:"verb"}]},
      {n:85, full:"그 손님들은 어디로 안내되었니?", chunks:[
        {en:"Where", ko:"어디로", t:"mod"},
        {en:"were", ko:"~였니?", t:"skip", c:"verb"},
        {en:"the guests", ko:"그 손님들은", t:"subj"},
        {en:"directed", ko:"안내된", t:"verb"}]},
      {n:86, full:"누가 그 문에서 경계하고 있니?", chunks:[
        {en:"Who", ko:"누가", t:"subj"},
        {en:"is", ko:"~이니", t:"verb"},
        {en:"alert", ko:"경계하는", t:"comp"},
        {en:"at the gate", ko:"그 문에서", t:"mod"}]},
      {n:87, full:"너는 그 두 섬을 무엇이라고 부르니?", chunks:[
        {en:"What", ko:"무엇이라고", t:"comp"},
        {en:"do", ko:"~하니?", t:"skip", c:"verb"},
        {en:"you", ko:"너는", t:"subj"},
        {en:"call", ko:"부르다", t:"verb"},
        {en:"the two islands", ko:"그 두 섬을", t:"obj"}]},
      {n:88, full:"누구의 카메라가 그 바닥에 떨어졌다고 너는 상상하니?", chunks:[
        {en:"Whose camera", ko:"누구의 카메라가", t:"subj"},
        {en:"do you imagine", ko:"", t:"skip"},
        {en:"fell", ko:"떨어졌다고 상상하니", t:"verb"},
        {en:"to the floor", ko:"그 바닥에", t:"mod"}]},
      {n:89, full:"그 주장은 일찍 도착했다, 그리고 그 팀도 그랬다", chunks:[
        {en:"The captain", ko:"그 주장은", t:"subj"},
        {en:"arrived", ko:"도착했다", t:"verb"},
        {en:"early,", ko:"일찍", t:"mod"},
        {en:"and", ko:"", t:"skip"},
        {en:"the team", ko:"그 팀도", t:"subj"},
        {en:"did too", ko:"그랬다", t:"verb"}]},
      {n:90, full:"그 아이들은 학교에서 예의 바르게 행동하니?", chunks:[
        {en:"Do", ko:"~하니?", t:"skip", c:"verb"},
        {en:"the children", ko:"그 아이들은", t:"subj"},
        {en:"behave", ko:"예의 바르게 행동하다", t:"verb"},
        {en:"at school", ko:"학교에서", t:"mod"}]},
      {n:91, full:"그 눈이 얼마나 부드럽게 내렸는가!", chunks:[
        {en:"How gently", ko:"얼마나 부드럽게", t:"mod"},
        {en:"the snow", ko:"그 눈이", t:"subj"},
        {en:"fell", ko:"내렸는가", t:"verb"}]},
      {n:92, full:"그 대표가 얼마나 어리석은 이유를 댔는가!", chunks:[
        {en:"What a silly reason", ko:"얼마나 어리석은 이유를", t:"obj"},
        {en:"the leader", ko:"그 대표가", t:"subj"},
        {en:"gave", ko:"댔는가", t:"verb"}]},
      {n:93, full:"속삭이지 마라 (그 연설 중에)", chunks:[
        {en:"Do not whisper", ko:"속삭이지 마라", t:"verb"},
        {en:"during the speech", ko:"그 연설 중에", t:"mod"}]},
      {n:94, full:"그 축제가 언제 끝날 거라고 너는 짐작하니?", chunks:[
        {en:"When", ko:"언제", t:"mod"},
        {en:"do you guess", ko:"", t:"skip"},
        {en:"the festival", ko:"그 축제가", t:"subj"},
        {en:"will end", ko:"끝날 거라고 짐작하니", t:"verb"}]},
      {n:95, full:"그 팀은 그 문제를 어떻게 풀었니?", chunks:[
        {en:"How", ko:"어떻게", t:"mod"},
        {en:"did", ko:"~했니?", t:"skip", c:"verb"},
        {en:"the team", ko:"그 팀은", t:"subj"},
        {en:"solve", ko:"풀다", t:"verb"},
        {en:"the problem", ko:"그 문제를", t:"obj"}]},
      {n:96, full:"그 팀이 그 문제를 어떻게 풀었다고 너는 짐작하니?", chunks:[
        {en:"How", ko:"어떻게", t:"mod"},
        {en:"do you guess", ko:"", t:"skip"},
        {en:"the team", ko:"그 팀이", t:"subj"},
        {en:"solved", ko:"풀었다고 짐작하니", t:"verb"},
        {en:"the problem", ko:"그 문제를", t:"obj"}]},
      {n:97, full:"그 문을 조심스럽게 당겨라", chunks:[
        {en:"Pull", ko:"당겨라", t:"verb"},
        {en:"the door", ko:"그 문을", t:"obj"},
        {en:"with caution", ko:"조심스럽게", t:"mod"}]},
      {n:98, full:"그 이유는 믿을 만하니?", chunks:[
        {en:"Is", ko:"~이니", t:"verb"},
        {en:"the reason", ko:"그 이유는", t:"subj"},
        {en:"credible", ko:"믿을 만한", t:"comp"}]},
      {n:99, full:"나에게 그 방법을 보여줘라", chunks:[
        {en:"Show", ko:"보여줘라", t:"verb"},
        {en:"me", ko:"나에게", t:"obj"},
        {en:"the method", ko:"그 방법을", t:"obj"}]},
      {n:100, full:"그 파티는 왜 취소되었니?", chunks:[
        {en:"Why", ko:"왜", t:"mod"},
        {en:"was", ko:"~였니?", t:"skip", c:"verb"},
        {en:"the party", ko:"그 파티는", t:"subj"},
        {en:"cancelled", ko:"취소된", t:"verb"}]},
      {n:101, full:"그 방을 조용하게 유지해라", chunks:[
        {en:"Keep", ko:"유지해라", t:"verb"},
        {en:"the room", ko:"그 방을", t:"obj"},
        {en:"silent", ko:"조용하게", t:"comp"}]},
      {n:102, full:"이 사진은 언제 찍혔니?", chunks:[
        {en:"When", ko:"언제", t:"mod"},
        {en:"was", ko:"~였니?", t:"skip", c:"verb"},
        {en:"this picture", ko:"이 사진은", t:"subj"},
        {en:"taken", ko:"찍힌", t:"verb"}]},
      {n:103, full:"그 문은 어떻게 열렸니?", chunks:[
        {en:"How", ko:"어떻게", t:"mod"},
        {en:"was", ko:"~였니?", t:"skip", c:"verb"},
        {en:"the gate", ko:"그 문은", t:"subj"},
        {en:"opened", ko:"열린", t:"verb"}]},
      {n:104, full:"그 문이 밀리게 두지 마라", chunks:[
        {en:"Do not let", ko:"두지 마라", t:"verb"},
        {en:"the gate", ko:"그 문이", t:"subj"},
        {en:"be pushed", ko:"밀리도록", t:"verb"}]},
      {n:105, full:"너는 그 광경에 놀랐니?", chunks:[
        {en:"Were", ko:"~였니?", t:"skip", c:"verb"},
        {en:"you", ko:"너는", t:"subj"},
        {en:"amazed", ko:"놀란", t:"verb"},
        {en:"by the view", ko:"그 광경에", t:"mod"}]},
      {n:106, full:"그 비평가들이 무엇을 비교했다고 너는 믿니?", chunks:[
        {en:"What", ko:"무엇을", t:"obj"},
        {en:"do you believe", ko:"", t:"skip"},
        {en:"the critics", ko:"그 비평가들이", t:"subj"},
        {en:"compared", ko:"비교했다고 믿니", t:"verb"}]},
      {n:107, full:"그 축제는 얼마나 빨리 끝날 거니?", chunks:[
        {en:"How soon", ko:"얼마나 빨리", t:"mod"},
        {en:"will", ko:"~할 거니?", t:"skip", c:"verb"},
        {en:"the festival", ko:"그 축제는", t:"subj"},
        {en:"end", ko:"끝나다", t:"verb"}]},
      {n:108, full:"무엇이 그 소음을 일으켰다고 너는 생각하니?", chunks:[
        {en:"What", ko:"무엇이", t:"subj"},
        {en:"do you think", ko:"", t:"skip"},
        {en:"caused", ko:"일으켰다고 생각하니", t:"verb"},
        {en:"the noise", ko:"그 소음을", t:"obj"}]},
      {n:109, full:"그 손님들은 어디에 모였니?", chunks:[
        {en:"Where", ko:"어디에", t:"mod"},
        {en:"did", ko:"~했니?", t:"skip", c:"verb"},
        {en:"the guests", ko:"그 손님들은", t:"subj"},
        {en:"gather", ko:"모이다", t:"verb"}]},
      {n:110, full:"누가 그 무게를 비교할 수 있니?", chunks:[
        {en:"Who", ko:"누가", t:"subj"},
        {en:"can compare", ko:"비교할 수 있니", t:"verb"},
        {en:"the weight", ko:"그 무게를", t:"obj"}]},
      {n:111, full:"누가 그 문을 밀었니?", chunks:[
        {en:"Who", ko:"누가", t:"subj"},
        {en:"pushed", ko:"밀었니", t:"verb"},
        {en:"the gate", ko:"그 문을", t:"obj"}]},
      {n:112, full:"예의 바르게 굴자", chunks:[
        {en:"Let's be", ko:"~하자", t:"verb"},
        {en:"polite", ko:"예의 바르게", t:"comp"}]},
      {n:113, full:"너는 누구의 카메라를 잃어버렸니?", chunks:[
        {en:"Whose camera", ko:"누구의 카메라를", t:"obj"},
        {en:"did", ko:"~했니?", t:"skip", c:"verb"},
        {en:"you", ko:"너는", t:"subj"},
        {en:"lose", ko:"잃어버리다", t:"verb"}]},
      {n:114, full:"그 비평가들은 그 두 소설을 비교했니?", chunks:[
        {en:"Did", ko:"~했니?", t:"skip", c:"verb"},
        {en:"the critics", ko:"그 비평가들은", t:"subj"},
        {en:"compare", ko:"비교하다", t:"verb"},
        {en:"the two novels", ko:"그 두 소설을", t:"obj"}]},
      {n:115, full:"그 아이들이 조용하게 유지되도록 하라", chunks:[
        {en:"Let", ko:"하라", t:"verb"},
        {en:"the children", ko:"그 아이들이", t:"subj"},
        {en:"be kept", ko:"유지되도록", t:"verb"},
        {en:"silent", ko:"조용하게", t:"comp"}]},
      {n:116, ctx:{en:"The leader blamed me for the wrong answer.", ko:"그 대표는 잘못된 답 때문에 나를 나무랐다."}, full:"나는 그 답을 정말 안다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"do know", ko:"정말 안다", t:"verb"},
        {en:"the answer", ko:"그 답을", t:"obj"}]},
      {n:117, full:"너는 누구의 기사를 읽었니?", chunks:[
        {en:"Whose article", ko:"누구의 기사를", t:"obj"},
        {en:"have", ko:"~했니?", t:"skip", c:"verb"},
        {en:"you", ko:"너는", t:"subj"},
        {en:"read", ko:"읽다", t:"verb"}]},
      {n:118, full:"누가 그 기사들을 썼니?", chunks:[
        {en:"Who", ko:"누가", t:"subj"},
        {en:"wrote", ko:"썼니", t:"verb"},
        {en:"the articles", ko:"그 기사들을", t:"obj"}]},
      {n:119, full:"그 문을 당기지 마라", chunks:[
        {en:"Do not pull", ko:"당기지 마라", t:"verb"},
        {en:"the gate", ko:"그 문을", t:"obj"}]},
      {n:120, full:"내가 사진을 찍어도 되니?", chunks:[
        {en:"Could", ko:"~해도 되니?", t:"skip", c:"verb"},
        {en:"I", ko:"내가", t:"subj"},
        {en:"take", ko:"찍다", t:"verb"},
        {en:"a picture", ko:"사진을", t:"obj"}]},
      {n:121, full:"그 아이는 가쁘게 숨 쉬고 있니?", chunks:[
        {en:"Is", ko:"~이니?", t:"skip", c:"verb"},
        {en:"the child", ko:"그 아이는", t:"subj"},
        {en:"breathing", ko:"숨 쉬고 있는", t:"verb"},
        {en:"hard", ko:"가쁘게", t:"mod"}]},
      {n:122, full:"누구의 카메라가 그 바닥에 떨어졌니?", chunks:[
        {en:"Whose camera", ko:"누구의 카메라가", t:"subj"},
        {en:"fell", ko:"떨어졌니", t:"verb"},
        {en:"to the floor", ko:"그 바닥에", t:"mod"}]},
      {n:123, full:"그 바다는 얼마나 깊니?", chunks:[
        {en:"How deep", ko:"얼마나 깊이", t:"comp"},
        {en:"is", ko:"~이니", t:"verb"},
        {en:"the ocean", ko:"그 바다는", t:"subj"}]},
      {n:124, full:"어리석게 굴지 마라", chunks:[
        {en:"Do not be", ko:"~하지 마라", t:"verb"},
        {en:"silly", ko:"어리석게", t:"comp"}]},
      {n:125, full:"그 산이 얼마나 대단한 높이를 가지고 있는가!", chunks:[
        {en:"What a great height", ko:"얼마나 대단한 높이를", t:"obj"},
        {en:"the mountain", ko:"그 산이", t:"subj"},
        {en:"has", ko:"가지고 있는가", t:"verb"}]},
      {n:126, full:"그 군중은 그 모퉁이에서 소리 질렀니?", chunks:[
        {en:"Did", ko:"~했니?", t:"skip", c:"verb"},
        {en:"the crowd", ko:"그 군중은", t:"subj"},
        {en:"shout", ko:"소리 지르다", t:"verb"},
        {en:"at the corner", ko:"그 모퉁이에서", t:"mod"}]},
      {n:127, full:"너는 그 새 방법을 어떻게 여기니?", chunks:[
        {en:"How", ko:"어떻게", t:"comp"},
        {en:"do", ko:"~하니?", t:"skip", c:"verb"},
        {en:"you", ko:"너는", t:"subj"},
        {en:"find", ko:"여기다", t:"verb"},
        {en:"the new method", ko:"그 새 방법을", t:"obj"}]},
      {n:128, full:"누가 그 기사들을 썼다고 너는 생각하니?", chunks:[
        {en:"Who", ko:"누가", t:"subj"},
        {en:"do you think", ko:"", t:"skip"},
        {en:"wrote", ko:"썼다고 생각하니", t:"verb"},
        {en:"the articles", ko:"그 기사들을", t:"obj"}]},
      {n:129, full:"그 기사들은 누구에 의해 쓰였니?", chunks:[
        {en:"By whom", ko:"누구에 의해", t:"mod"},
        {en:"were", ko:"~였니?", t:"skip", c:"verb"},
        {en:"the articles", ko:"그 기사들은", t:"subj"},
        {en:"written", ko:"쓰인", t:"verb"}]},
      {n:130, full:"그 비용은 비교되었니?", chunks:[
        {en:"Has", ko:"~했니?", t:"skip", c:"verb"},
        {en:"the cost", ko:"그 비용은", t:"subj"},
        {en:"been compared", ko:"비교된", t:"verb"}]},
      {n:131, full:"누가 그 섬에 가 본 적 있니?", chunks:[
        {en:"Who", ko:"누가", t:"subj"},
        {en:"has ever been to", ko:"가 본 적 있니", t:"verb"},
        {en:"the island", ko:"그 섬에", t:"mod"}]},
      {n:132, full:"우리는 어느 방법을 따라야 하니?", chunks:[
        {en:"Which method", ko:"어느 방법을", t:"obj"},
        {en:"should", ko:"~해야 하니?", t:"skip", c:"verb"},
        {en:"we", ko:"우리는", t:"subj"},
        {en:"follow", ko:"따르다", t:"verb"}]},
      {n:133, full:"그 소년들은 그 지붕 위로 오른다, 그리고 그 소녀들도 그렇다", chunks:[
        {en:"The boys", ko:"그 소년들은", t:"subj"},
        {en:"climb", ko:"오른다", t:"verb"},
        {en:"onto the roof,", ko:"그 지붕 위로", t:"mod"},
        {en:"and", ko:"", t:"skip"},
        {en:"the girls", ko:"그 소녀들도", t:"subj"},
        {en:"do too", ko:"그렇다", t:"verb"}]},
      {n:134, full:"그 상은 누구에 의해 발표되었니?", chunks:[
        {en:"By whom", ko:"누구에 의해", t:"mod"},
        {en:"was", ko:"~였니?", t:"skip", c:"verb"},
        {en:"the award", ko:"그 상은", t:"subj"},
        {en:"announced", ko:"발표된", t:"verb"}]},
      {n:135, full:"무엇이 그 지연을 일으켰다고 너는 생각하니?", chunks:[
        {en:"What", ko:"무엇이", t:"subj"},
        {en:"do you suppose", ko:"", t:"skip"},
        {en:"caused", ko:"일으켰다고 생각하니", t:"verb"},
        {en:"the delay", ko:"그 지연을", t:"obj"}]},
      {n:136, full:"그 두 방법을 비교하자", chunks:[
        {en:"Let's compare", ko:"비교하자", t:"verb"},
        {en:"the two methods", ko:"그 두 방법을", t:"obj"}]},
    ]},
    { id:"명사절", items:[
      {n:1, full:"그 저자는 그 박물관이 그 기록 전체를 보관한다는 것을 인정한다", chunks:[
        {en:"The author", ko:"그 저자는", t:"subj"},
        {en:"admits", ko:"인정한다", t:"verb"},
        {en:"that", ko:"~라는 것을", t:"obj", link:true, marker:true, span:4},
        {en:"the museum", ko:"그 박물관이", t:"subj"},
        {en:"keeps", ko:"보관한다", t:"verb"},
        {en:"the whole record", ko:"그 기록 전체를", t:"obj"}]},
      {n:2, full:"그 손님들은 그 길이 어디에서 시작되었는지를 보았다", chunks:[
        {en:"The guests", ko:"그 손님들은", t:"subj"},
        {en:"were shown", ko:"보게 되었다", t:"verb"},
        {en:"where", ko:"어디에서 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the path", ko:"그 길이", t:"subj"},
        {en:"started", ko:"시작되었는지", t:"verb"}]},
      {n:3, full:"그 보고서는 그 사고가 어떻게 일어났는지를 분명하게 밝혔다", chunks:[
        {en:"The report", ko:"그 보고서는", t:"subj"},
        {en:"made", ko:"만들었다", t:"verb"},
        {en:"it", ko:"그것을", t:"obj"},
        {en:"clear", ko:"분명하게", t:"comp"},
        {en:"how", ko:"어떻게 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the accident", ko:"그 사고가", t:"subj"},
        {en:"happened", ko:"일어났는지", t:"verb"}]},
      {n:4, full:"그 기사는 그 이론이 진짜인지를 밝힌다", chunks:[
        {en:"The article", ko:"그 기사는", t:"subj"},
        {en:"states", ko:"밝힌다", t:"verb"},
        {en:"whether", ko:"~인지를", t:"obj", link:true, marker:true, span:4},
        {en:"the theory", ko:"그 이론이", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"real", ko:"진짜인지", t:"comp"}]},
      {n:5, full:"그 대표는 그 팀이 그 위험을 받아들일 수밖에 없다고 주장한다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"insists", ko:"주장한다", t:"verb"},
        {en:"that", ko:"~라고", t:"obj", link:true, marker:true, span:4},
        {en:"the team", ko:"그 팀이", t:"subj"},
        {en:"has no choice but to accept", ko:"받아들일 수밖에 없다고", t:"verb"},
        {en:"the risk", ko:"그 위험을", t:"obj"}]},
      {n:6, full:"그 보고서는 그 소식이 언제 나타났는지를 밝힌다", chunks:[
        {en:"The report", ko:"그 보고서는", t:"subj"},
        {en:"states", ko:"밝힌다", t:"verb"},
        {en:"when", ko:"언제 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the news", ko:"그 소식이", t:"subj"},
        {en:"appeared", ko:"나타났는지", t:"verb"}]},
      {n:7, full:"그 대표는 그 팀이 어느 방법을 따라야 하는지를 분명하게 밝혔다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"made", ko:"만들었다", t:"verb"},
        {en:"it", ko:"그것을", t:"obj"},
        {en:"clear", ko:"분명하게", t:"comp"},
        {en:"which method", ko:"어느 방법을 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the team", ko:"그 팀이", t:"subj"},
        {en:"should follow", ko:"따라야 하는지", t:"verb"}]},
      {n:8, full:"나는 그 티켓이 얼마의 돈이 드는지 궁금하다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"wonder", ko:"궁금하다", t:"verb"},
        {en:"how much money", ko:"얼마의 돈이 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the ticket", ko:"그 티켓이", t:"subj"},
        {en:"costs", ko:"드는지", t:"verb"}]},
      {n:9, full:"그 저자가 그 아이디어를 복제했음에 틀림없다고 주장된다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is claimed", ko:"주장된다", t:"verb"},
        {en:"that", ko:"~라고", t:"subj", link:true, marker:true, span:4},
        {en:"the author", ko:"그 저자가", t:"subj"},
        {en:"must have copied", ko:"복제했음에 틀림없다고", t:"verb"},
        {en:"the idea", ko:"그 아이디어를", t:"obj"}]},
      {n:10, full:"그 이론이 낡았다고 주장되어 왔다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"has been argued", ko:"주장되어 왔다", t:"verb"},
        {en:"that", ko:"~라고", t:"subj", link:true, marker:true, span:4},
        {en:"the theory", ko:"그 이론이", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"old", ko:"낡았다고", t:"comp"}]},
      {n:11, full:"나는 그 소식이 진짜인지 궁금하다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"wonder", ko:"궁금하다", t:"verb"},
        {en:"whether", ko:"~인지를", t:"obj", link:true, marker:true, span:4},
        {en:"the news", ko:"그 소식이", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"real", ko:"진짜인지", t:"comp"}]},
      {n:12, full:"어느 방법이 직접적인지는 분명하지 않다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is not", ko:"~이지 않다", t:"verb"},
        {en:"clear", ko:"분명한", t:"comp"},
        {en:"which method", ko:"어느 방법이 ~인지가", t:"subj", link:true, marker:true, span:3},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"direct", ko:"직접적인지", t:"comp"}]},
      {n:13, full:"나의 의견은 그 방법이 안전하다는 것이다", chunks:[
        {en:"My opinion", ko:"나의 의견은", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"that", ko:"~라는 것", t:"comp", link:true, marker:true, span:4},
        {en:"the method", ko:"그 방법이", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"safe", ko:"안전하다는", t:"comp"}]},
      {n:14, full:"그 비평가는 그 이론이 사실인지 의심한다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"doubts", ko:"의심한다", t:"verb"},
        {en:"whether", ko:"~인지를", t:"obj", link:true, marker:true, span:4},
        {en:"the theory", ko:"그 이론이", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"true", ko:"사실인지", t:"comp"}]},
      {n:15, full:"그 대표는 그 팀이 어느 방법을 따랐는지를 설명했다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"explained", ko:"설명했다", t:"verb"},
        {en:"what method", ko:"어느 방법을 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the team", ko:"그 팀이", t:"subj"},
        {en:"followed", ko:"따랐는지", t:"verb"}]},
      {n:16, full:"그 저자가 그 주장을 부인한다는 것은 흥미롭다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"curious", ko:"흥미로운", t:"comp"},
        {en:"that", ko:"~라는 것이", t:"subj", link:true, marker:true, span:4},
        {en:"the author", ko:"그 저자가", t:"subj"},
        {en:"denies", ko:"부인한다는", t:"verb"},
        {en:"the claim", ko:"그 주장을", t:"obj"}]},
      {n:17, full:"문제는 그 도구가 안전한지이다", chunks:[
        {en:"The problem", ko:"문제는", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"whether", ko:"~인지", t:"comp", link:true, marker:true, span:4},
        {en:"the tool", ko:"그 도구가", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"safe", ko:"안전한지", t:"comp"}]},
      {n:18, full:"그 사실이 진짜인지는 중요하지 않다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"does not matter", ko:"중요하지 않다", t:"verb"},
        {en:"whether", ko:"~인지가", t:"subj", link:true, marker:true, span:4},
        {en:"the fact", ko:"그 사실이", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"real", ko:"진짜인지", t:"comp"}]},
      {n:19, full:"그 선생님은 그 반에게 그 방법이 중요하다는 것을 가르쳤다", chunks:[
        {en:"The teacher", ko:"그 선생님은", t:"subj"},
        {en:"taught", ko:"가르쳤다", t:"verb"},
        {en:"the class", ko:"그 반에게", t:"obj"},
        {en:"that", ko:"~라는 것을", t:"obj", link:true, marker:true, span:3},
        {en:"the method", ko:"그 방법이", t:"subj"},
        {en:"matters", ko:"중요하다는", t:"verb"}]},
      {n:20, full:"그 도구가 안전하다고 주장된다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is claimed", ko:"주장된다", t:"verb"},
        {en:"that", ko:"~라고", t:"subj", link:true, marker:true, span:4},
        {en:"the tool", ko:"그 도구가", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"safe", ko:"안전하다고", t:"comp"}]},
      {n:21, full:"그 비평가들은 그 이론이 왜 실패했는지를 설명했다", chunks:[
        {en:"The critics", ko:"그 비평가들은", t:"subj"},
        {en:"explained", ko:"설명했다", t:"verb"},
        {en:"why", ko:"왜 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the theory", ko:"그 이론이", t:"subj"},
        {en:"failed", ko:"실패했는지", t:"verb"}]},
      {n:22, full:"그 길이 바뀌었다는 것은 중요하다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"important", ko:"중요한", t:"comp"},
        {en:"that", ko:"~라는 것이", t:"subj", link:true, marker:true, span:3},
        {en:"the path", ko:"그 길이", t:"subj"},
        {en:"has changed", ko:"바뀌었다는", t:"verb"}]},
      {n:23, full:"우리는 그 소식이 그렇게 늦게 나타난 것을 이상하게 여겼다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"found", ko:"여겼다", t:"verb"},
        {en:"it", ko:"그것을", t:"obj"},
        {en:"strange", ko:"이상하게", t:"comp"},
        {en:"that", ko:"~라는 것을", t:"obj", link:true, marker:true, span:4},
        {en:"the news", ko:"그 소식이", t:"subj"},
        {en:"appeared", ko:"나타났다는", t:"verb"},
        {en:"so late", ko:"그렇게 늦게", t:"mod"}]},
      {n:24, full:"그 대표는 그 손님들에게 그 일정이 바뀌지 않을 거라고 약속했다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"promised", ko:"약속했다", t:"verb"},
        {en:"the guests", ko:"그 손님들에게", t:"obj"},
        {en:"the schedule", ko:"그 일정이", t:"subj", link:true, outer:"obj", outerKo:"~라고", span:2},
        {en:"would not change", ko:"바뀌지 않을 거라고", t:"verb"}]},
      {n:25, full:"그 저자는 그 이론이 진짜라는 것을 인정한다", chunks:[
        {en:"The author", ko:"그 저자는", t:"subj"},
        {en:"admits", ko:"인정한다", t:"verb"},
        {en:"the theory", ko:"그 이론이", t:"subj", link:true, outer:"obj", outerKo:"~라는 것을", span:3},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"real", ko:"진짜라고", t:"comp"}]},
      {n:26, full:"그 대표는 어느 도구가 필요한지를 설명했다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"explained", ko:"설명했다", t:"verb"},
        {en:"which tool", ko:"어느 도구가 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"was", ko:"~였다", t:"verb"},
        {en:"necessary", ko:"필요했는지", t:"comp"}]},
      {n:27, full:"우리는 그 길이 안전하다고 결론지었다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"concluded", ko:"결론지었다", t:"verb"},
        {en:"the path", ko:"그 길이", t:"subj", link:true, outer:"obj", outerKo:"~라고", span:3},
        {en:"was", ko:"~였다", t:"verb"},
        {en:"safe", ko:"안전했다고", t:"comp"}]},
      {n:28, full:"그 증거는 그 도구가 안전하다는 것을 분명하게 밝혔다", chunks:[
        {en:"The proof", ko:"그 증거는", t:"subj"},
        {en:"made", ko:"만들었다", t:"verb"},
        {en:"it", ko:"그것을", t:"obj"},
        {en:"clear", ko:"분명하게", t:"comp"},
        {en:"that", ko:"~라는 것을", t:"obj", link:true, marker:true, span:4},
        {en:"the tool", ko:"그 도구가", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"safe", ko:"안전하다는", t:"comp"}]},
      {n:29, full:"그 도구가 안전하다는 것은 필수적이다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"essential", ko:"필수적인", t:"comp"},
        {en:"that", ko:"~라는 것이", t:"subj", link:true, marker:true, span:4},
        {en:"the tool", ko:"그 도구가", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"safe", ko:"안전하다는", t:"comp"}]},
      {n:30, full:"그 저자는 그 길이 어떻게 만들어졌는지를 서술했다", chunks:[
        {en:"The author", ko:"그 저자는", t:"subj"},
        {en:"described", ko:"서술했다", t:"verb"},
        {en:"how", ko:"어떻게 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the path", ko:"그 길이", t:"subj"},
        {en:"was made", ko:"만들어졌는지", t:"verb"}]},
      {n:31, full:"그 간호사는 나에게 그 열이 사라졌다고 말했다", chunks:[
        {en:"The nurse", ko:"그 간호사는", t:"subj"},
        {en:"told", ko:"말했다", t:"verb"},
        {en:"me", ko:"나에게", t:"obj"},
        {en:"the fever", ko:"그 열이", t:"subj", link:true, outer:"obj", outerKo:"~라고", span:2},
        {en:"had gone", ko:"사라졌다고", t:"verb"}]},
      {n:32, full:"그 회사들은 그 도구가 안전하다고 주장한다", chunks:[
        {en:"The companies", ko:"그 회사들은", t:"subj"},
        {en:"claim", ko:"주장한다", t:"verb"},
        {en:"the tool", ko:"그 도구가", t:"subj", link:true, outer:"obj", outerKo:"~라고", span:3},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"safe", ko:"안전하다고", t:"comp"}]},
      {n:33, full:"그 비평가들은 그 도구가 안전했는지를 분명하게 밝혔다", chunks:[
        {en:"The critics", ko:"그 비평가들은", t:"subj"},
        {en:"made", ko:"만들었다", t:"verb"},
        {en:"it", ko:"그것을", t:"obj"},
        {en:"clear", ko:"분명하게", t:"comp"},
        {en:"whether", ko:"~인지를", t:"obj", link:true, marker:true, span:4},
        {en:"the tool", ko:"그 도구가", t:"subj"},
        {en:"was", ko:"~였다", t:"verb"},
        {en:"safe", ko:"안전했는지", t:"comp"}]},
      {n:34, full:"그 대표는 그 팀이 그 위험을 받아들였다고 주장한다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"insists", ko:"주장한다", t:"verb"},
        {en:"that", ko:"~라고", t:"obj", link:true, marker:true, span:4},
        {en:"the team", ko:"그 팀이", t:"subj"},
        {en:"accepted", ko:"받아들였다고", t:"verb"},
        {en:"the risk", ko:"그 위험을", t:"obj"}]},
      {n:35, full:"우리는 그 소식이 진짜라는 말을 들었다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"were told", ko:"들었다", t:"verb"},
        {en:"that", ko:"~라는 것을", t:"obj", link:true, marker:true, span:4},
        {en:"the news", ko:"그 소식이", t:"subj"},
        {en:"was", ko:"~였다", t:"verb"},
        {en:"real", ko:"진짜라고", t:"comp"}]},
      {n:36, full:"그 이론이 낡았다고 결론지어졌다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"was concluded", ko:"결론지어졌다", t:"verb"},
        {en:"that", ko:"~라고", t:"subj", link:true, marker:true, span:4},
        {en:"the theory", ko:"그 이론이", t:"subj"},
        {en:"was", ko:"~였다", t:"verb"},
        {en:"old", ko:"낡았다고", t:"comp"}]},
      {n:37, full:"그 보고서들은 그 주제가 바뀌었다는 것을 언급한다", chunks:[
        {en:"The reports", ko:"그 보고서들은", t:"subj"},
        {en:"note", ko:"언급한다", t:"verb"},
        {en:"that", ko:"~라는 것을", t:"obj", link:true, marker:true, span:3},
        {en:"the topic", ko:"그 주제가", t:"subj"},
        {en:"has changed", ko:"바뀌었다는", t:"verb"}]},
      {n:38, full:"그 목격자가 그 사고를 보았을 리 없다고 여겨진다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is believed", ko:"여겨진다", t:"verb"},
        {en:"that", ko:"~라고", t:"subj", link:true, marker:true, span:4},
        {en:"the witness", ko:"그 목격자가", t:"subj"},
        {en:"cannot have seen", ko:"보았을 리 없다고", t:"verb"},
        {en:"the accident", ko:"그 사고를", t:"obj"}]},
      {n:39, full:"그 의사는 그 환자에게 그 열이 돌아올 거라고 경고했다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"warned", ko:"경고했다", t:"verb"},
        {en:"the patient", ko:"그 환자에게", t:"obj"},
        {en:"the fever", ko:"그 열이", t:"subj", link:true, outer:"obj", outerKo:"~라고", span:2},
        {en:"would return", ko:"돌아올 거라고", t:"verb"}]},
      {n:40, full:"그 이론이 낡았는지는 중요하지 않다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"does not matter", ko:"중요하지 않다", t:"verb"},
        {en:"whether", ko:"~인지가", t:"subj", link:true, marker:true, span:4},
        {en:"the theory", ko:"그 이론이", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"old", ko:"낡았는지", t:"comp"}]},
      {n:41, full:"그 비평가들은 그 소식이 사실이었을지도 모른다는 것을 부인한다", chunks:[
        {en:"The critics", ko:"그 비평가들은", t:"subj"},
        {en:"deny", ko:"부인한다", t:"verb"},
        {en:"that", ko:"~라는 것을", t:"obj", link:true, marker:true, span:4},
        {en:"the news", ko:"그 소식이", t:"subj"},
        {en:"might have been", ko:"~였을지도 모른다는", t:"verb"},
        {en:"true", ko:"사실", t:"comp"}]},
      {n:42, full:"그 전문가들은 그 세부사항이 진짜라고 주장한다", chunks:[
        {en:"The experts", ko:"그 전문가들은", t:"subj"},
        {en:"argue", ko:"주장한다", t:"verb"},
        {en:"the detail", ko:"그 세부사항이", t:"subj", link:true, outer:"obj", outerKo:"~라고", span:3},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"real", ko:"진짜라고", t:"comp"}]},
      {n:43, full:"그 비평가는 그 출처가 어디였는지를 물었다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"asked", ko:"물었다", t:"verb"},
        {en:"where", ko:"어디에 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the source", ko:"그 출처가", t:"subj"},
        {en:"was", ko:"있었는지", t:"verb"}]},
      {n:44, full:"모든 손님이 그 문에서 등록하는 것이 필요하다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"necessary", ko:"필요한", t:"comp"},
        {en:"that", ko:"~라는 것이", t:"subj", link:true, marker:true, span:4},
        {en:"every guest", ko:"모든 손님이", t:"subj"},
        {en:"register", ko:"등록해야 한다는", t:"verb"},
        {en:"at the gate", ko:"그 문에서", t:"mod"}]},
      {n:45, full:"그 비평가는 우리에게 그 저자가 그 주장을 부인했다는 것을 상기시켰다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"reminded", ko:"상기시켰다", t:"verb"},
        {en:"us", ko:"우리에게", t:"obj"},
        {en:"that", ko:"~라는 것을", t:"obj", link:true, marker:true, span:4},
        {en:"the author", ko:"그 저자가", t:"subj"},
        {en:"had denied", ko:"부인했다는", t:"verb"},
        {en:"the claim", ko:"그 주장을", t:"obj"}]},
      {n:46, full:"그 비평가들은 그 소식이 사실이라는 것을 부인한다", chunks:[
        {en:"The critics", ko:"그 비평가들은", t:"subj"},
        {en:"deny", ko:"부인한다", t:"verb"},
        {en:"the news", ko:"그 소식이", t:"subj", link:true, outer:"obj", outerKo:"~라는 것을", span:3},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"true", ko:"사실이라고", t:"comp"}]},
      {n:47, full:"우리는 그 섬이 바뀌었다는 것을 명백하게 여긴다", chunks:[
        {en:"We", ko:"우리는", t:"subj"},
        {en:"consider", ko:"여긴다", t:"verb"},
        {en:"it", ko:"그것을", t:"obj"},
        {en:"obvious", ko:"명백하게", t:"comp"},
        {en:"that", ko:"~라는 것을", t:"obj", link:true, marker:true, span:3},
        {en:"the island", ko:"그 섬이", t:"subj"},
        {en:"has changed", ko:"바뀌었다는", t:"verb"}]},
      {n:48, full:"그 대표는 그 사실이 중요하다고 주장한다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"insists", ko:"주장한다", t:"verb"},
        {en:"that", ko:"~라고", t:"obj", link:true, marker:true, span:3},
        {en:"the fact", ko:"그 사실이", t:"subj"},
        {en:"matters", ko:"중요하다고", t:"verb"}]},
      {n:49, full:"그 비평가는 그 팀이 얼마나 자주 겨루는지를 물었다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"asked", ko:"물었다", t:"verb"},
        {en:"how often", ko:"얼마나 자주 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the team", ko:"그 팀이", t:"subj"},
        {en:"competes", ko:"겨루는지", t:"verb"}]},
      {n:50, full:"나는 그 출처가 진짜가 아니라고 의심한다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"suspect", ko:"의심한다", t:"verb"},
        {en:"the source", ko:"그 출처가", t:"subj", link:true, outer:"obj", outerKo:"~라고", span:3},
        {en:"is not", ko:"~이지 않다", t:"verb"},
        {en:"real", ko:"진짜가 아니라고", t:"comp"}]},
      {n:51, full:"그 회사는 그 계획이 바뀌었는지를 보고할 것이다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"will report", ko:"보고할 것이다", t:"verb"},
        {en:"whether", ko:"~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the plan", ko:"그 계획이", t:"subj"},
        {en:"has changed", ko:"바뀌었는지", t:"verb"}]},
      {n:52, full:"나는 누가 그 기사를 썼는지 궁금하다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"wonder", ko:"궁금하다", t:"verb"},
        {en:"who", ko:"누가 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"wrote", ko:"썼는지", t:"verb"},
        {en:"the article", ko:"그 기사를", t:"obj"}]},
      {n:53, full:"그 간호사는 그 증상이 열의 징후였다는 것을 설명했다", chunks:[
        {en:"The nurse", ko:"그 간호사는", t:"subj"},
        {en:"explained", ko:"설명했다", t:"verb"},
        {en:"that", ko:"~라는 것을", t:"obj", link:true, marker:true, span:4},
        {en:"the symptom", ko:"그 증상이", t:"subj"},
        {en:"was", ko:"~였다", t:"verb"},
        {en:"a sign of a fever", ko:"열의 징후였다는", t:"comp"}]},
      {n:54, full:"그 비평가들은 그 소식의 출처가 진짜가 아니라고 의심한다", chunks:[
        {en:"The critics", ko:"그 비평가들은", t:"subj"},
        {en:"suspect", ko:"의심한다", t:"verb"},
        {en:"that", ko:"~라고", t:"obj", link:true, marker:true, span:4},
        {en:"the source of the news", ko:"그 소식의 출처가", t:"subj"},
        {en:"is not", ko:"~이지 않다", t:"verb"},
        {en:"real", ko:"진짜가 아니라고", t:"comp"}]},
      {n:55, full:"그 의사는 그 열이 계속되었는지를 물었다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"asked", ko:"물었다", t:"verb"},
        {en:"if", ko:"~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the fever", ko:"그 열이", t:"subj"},
        {en:"had continued", ko:"계속되었는지", t:"verb"}]},
      {n:56, full:"그 간호사는 그 증상이 무엇을 뜻했는지를 물었다", chunks:[
        {en:"The nurse", ko:"그 간호사는", t:"subj"},
        {en:"asked", ko:"물었다", t:"verb"},
        {en:"what", ko:"무엇을 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the symptom", ko:"그 증상이", t:"subj"},
        {en:"meant", ko:"뜻했는지", t:"verb"}]},
      {n:57, full:"누가 그 기사를 썼는지는 분명하지 않다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is not", ko:"~이지 않다", t:"verb"},
        {en:"clear", ko:"분명한", t:"comp"},
        {en:"who", ko:"누가 ~인지가", t:"subj", link:true, marker:true, span:3},
        {en:"wrote", ko:"썼는지", t:"verb"},
        {en:"the article", ko:"그 기사를", t:"obj"}]},
      {n:58, full:"그 의사는 그 환자가 한 달 동안 머물 것을 제안한다", chunks:[
        {en:"The doctor", ko:"그 의사는", t:"subj"},
        {en:"suggests", ko:"제안한다", t:"verb"},
        {en:"that", ko:"~할 것을", t:"obj", link:true, marker:true, span:4},
        {en:"the patient", ko:"그 환자가", t:"subj"},
        {en:"stay", ko:"머물러야 한다고", t:"verb"},
        {en:"for a month", ko:"한 달 동안", t:"mod"}]},
      {n:59, full:"그 주제가 흥미로웠다고 언급되었다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"was mentioned", ko:"언급되었다", t:"verb"},
        {en:"that", ko:"~라고", t:"subj", link:true, marker:true, span:4},
        {en:"the topic", ko:"그 주제가", t:"subj"},
        {en:"was", ko:"~였다", t:"verb"},
        {en:"curious", ko:"흥미로웠다고", t:"comp"}]},
      {n:60, full:"그 소식이 진짜라는 것은 명백하다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"obvious", ko:"명백한", t:"comp"},
        {en:"that", ko:"~라는 것이", t:"subj", link:true, marker:true, span:4},
        {en:"the news", ko:"그 소식이", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"real", ko:"진짜라는", t:"comp"}]},
      {n:61, full:"그 비밀 통로가 어떻게 만들어졌는지가 서술되었다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"was described", ko:"서술되었다", t:"verb"},
        {en:"how", ko:"어떻게 ~인지가", t:"subj", link:true, marker:true, span:3},
        {en:"the secret path", ko:"그 비밀 통로가", t:"subj"},
        {en:"was made", ko:"만들어졌는지", t:"verb"}]},
      {n:62, full:"그 보고서는 그 저자가 얼마나 많은 기사를 출간했는지를 밝힌다", chunks:[
        {en:"The report", ko:"그 보고서는", t:"subj"},
        {en:"states", ko:"밝힌다", t:"verb"},
        {en:"how many articles", ko:"얼마나 많은 기사를 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the author", ko:"그 저자가", t:"subj"},
        {en:"published", ko:"출간했는지", t:"verb"}]},
      {n:63, full:"그 대표는 그 팀이 그 위험을 받아들일 것을 주장한다", chunks:[
        {en:"The leader", ko:"그 대표는", t:"subj"},
        {en:"insists", ko:"주장한다", t:"verb"},
        {en:"that", ko:"~할 것을", t:"obj", link:true, marker:true, span:4},
        {en:"the team", ko:"그 팀이", t:"subj"},
        {en:"accept", ko:"받아들여야 한다고", t:"verb"},
        {en:"the risk", ko:"그 위험을", t:"obj"}]},
      {n:64, full:"그 전체 일정이 확정되는 것이 중요하다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"important", ko:"중요한", t:"comp"},
        {en:"that", ko:"~라는 것이", t:"subj", link:true, marker:true, span:3},
        {en:"the entire schedule", ko:"그 전체 일정이", t:"subj"},
        {en:"be confirmed", ko:"확정되어야 한다는", t:"verb"}]},
      {n:65, full:"그 티켓이 얼마인지는 명백하다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"obvious", ko:"명백한", t:"comp"},
        {en:"how much", ko:"얼마나 ~인지가", t:"subj", link:true, marker:true, span:3},
        {en:"the ticket", ko:"그 티켓이", t:"subj"},
        {en:"costs", ko:"드는지", t:"verb"}]},
      {n:66, full:"그 회사는 그 고객에게 그 도구가 안전하다는 것을 말했다", chunks:[
        {en:"The company", ko:"그 회사는", t:"subj"},
        {en:"told", ko:"말했다", t:"verb"},
        {en:"the customer", ko:"그 고객에게", t:"obj"},
        {en:"that", ko:"~라는 것을", t:"obj", link:true, marker:true, span:4},
        {en:"the tool", ko:"그 도구가", t:"subj"},
        {en:"was", ko:"~였다", t:"verb"},
        {en:"safe", ko:"안전하다고", t:"comp"}]},
      {n:67, full:"나는 그 사원이 얼마나 높은지 궁금하다", chunks:[
        {en:"I", ko:"나는", t:"subj"},
        {en:"wonder", ko:"궁금하다", t:"verb"},
        {en:"how tall", ko:"얼마나 높이 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"the temple", ko:"그 사원이", t:"subj"},
        {en:"is", ko:"~인지", t:"verb"}]},
      {n:68, full:"그 간호사는 그 열이 사라졌다고 시사했다", chunks:[
        {en:"The nurse", ko:"그 간호사는", t:"subj"},
        {en:"suggested", ko:"시사했다", t:"verb"},
        {en:"that", ko:"~라고", t:"obj", link:true, marker:true, span:3},
        {en:"the fever", ko:"그 열이", t:"subj"},
        {en:"had gone", ko:"사라졌다고", t:"verb"}]},
      {n:69, full:"문제는 누가 그 기사를 썼는지이다", chunks:[
        {en:"The question", ko:"문제는", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"who", ko:"누가 ~인지", t:"comp", link:true, marker:true, span:3},
        {en:"wrote", ko:"썼는지", t:"verb"},
        {en:"the article", ko:"그 기사를", t:"obj"}]},
      {n:70, full:"그 비평가는 우리에게 그 이론이 낡았다는 것을 보여주었다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"showed", ko:"보여주었다", t:"verb"},
        {en:"us", ko:"우리에게", t:"obj"},
        {en:"the theory", ko:"그 이론이", t:"subj", link:true, outer:"obj", outerKo:"~라는 것을", span:3},
        {en:"was", ko:"~였다", t:"verb"},
        {en:"old", ko:"낡았다고", t:"comp"}]},
      {n:71, full:"그 전문가들은 그 이론이 실패했다는 것을 분명하게 여긴다", chunks:[
        {en:"The experts", ko:"그 전문가들은", t:"subj"},
        {en:"think", ko:"여긴다", t:"verb"},
        {en:"it", ko:"그것을", t:"obj"},
        {en:"clear", ko:"분명하게", t:"comp"},
        {en:"that", ko:"~라는 것을", t:"obj", link:true, marker:true, span:3},
        {en:"the theory", ko:"그 이론이", t:"subj"},
        {en:"failed", ko:"실패했다는", t:"verb"}]},
      {n:72, full:"그 비평가들은 그 기사가 곧 출간될 것을 제안한다", chunks:[
        {en:"The critics", ko:"그 비평가들은", t:"subj"},
        {en:"suggest", ko:"제안한다", t:"verb"},
        {en:"that", ko:"~할 것을", t:"obj", link:true, marker:true, span:4},
        {en:"the article", ko:"그 기사가", t:"subj"},
        {en:"be published", ko:"출간되어야 한다고", t:"verb"},
        {en:"soon", ko:"곧", t:"mod"}]},
      {n:73, full:"그 길이 어떻게 만들어졌는지는 흥미롭다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"curious", ko:"흥미로운", t:"comp"},
        {en:"how", ko:"어떻게 ~인지가", t:"subj", link:true, marker:true, span:3},
        {en:"the path", ko:"그 길이", t:"subj"},
        {en:"was made", ko:"만들어졌는지", t:"verb"}]},
      {n:74, full:"문제는 그 출처가 비밀이라는 것이다", chunks:[
        {en:"The problem", ko:"문제는", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"that", ko:"~라는 것", t:"comp", link:true, marker:true, span:4},
        {en:"the source", ko:"그 출처가", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"a secret", ko:"비밀이라는", t:"comp"}]},
      {n:75, full:"그 보고서들은 그 출처가 진짜가 아니었다는 것을 명백하게 밝혔다", chunks:[
        {en:"The reports", ko:"그 보고서들은", t:"subj"},
        {en:"made", ko:"만들었다", t:"verb"},
        {en:"it", ko:"그것을", t:"obj"},
        {en:"obvious", ko:"명백하게", t:"comp"},
        {en:"that", ko:"~라는 것을", t:"obj", link:true, marker:true, span:4},
        {en:"the source", ko:"그 출처가", t:"subj"},
        {en:"was not", ko:"~이지 않았다", t:"verb"},
        {en:"real", ko:"진짜가 아니었다는", t:"comp"}]},
      {n:76, full:"사실은 그 이론이 낡았다는 것이다", chunks:[
        {en:"The fact", ko:"사실은", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"that", ko:"~라는 것", t:"comp", link:true, marker:true, span:4},
        {en:"the theory", ko:"그 이론이", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"old", ko:"낡았다는", t:"comp"}]},
      {n:77, full:"그 저자가 그 출처를 설명하는 것이 필수적이다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"essential", ko:"필수적인", t:"comp"},
        {en:"that", ko:"~라는 것이", t:"subj", link:true, marker:true, span:4},
        {en:"the author", ko:"그 저자가", t:"subj"},
        {en:"explain", ko:"설명해야 한다는", t:"verb"},
        {en:"the source", ko:"그 출처를", t:"obj"}]},
      {n:78, full:"그 섬이 바뀌었다고 보고된다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is reported", ko:"보고된다", t:"verb"},
        {en:"that", ko:"~라고", t:"subj", link:true, marker:true, span:3},
        {en:"the island", ko:"그 섬이", t:"subj"},
        {en:"has changed", ko:"바뀌었다고", t:"verb"}]},
      {n:79, full:"그 호텔이 그 요금을 올렸다고 언급된다", chunks:[
        {en:"It", ko:"그것은", t:"subj"},
        {en:"is noted", ko:"언급된다", t:"verb"},
        {en:"that", ko:"~라고", t:"subj", link:true, marker:true, span:4},
        {en:"the hotel", ko:"그 호텔이", t:"subj"},
        {en:"raised", ko:"올렸다고", t:"verb"},
        {en:"the fee", ko:"그 요금을", t:"obj"}]},
      {n:80, full:"증거는 그 세부사항이 중요하다는 것이다", chunks:[
        {en:"The proof", ko:"증거는", t:"subj"},
        {en:"is", ko:"~이다", t:"verb"},
        {en:"that", ko:"~라는 것", t:"comp", link:true, marker:true, span:3},
        {en:"the detail", ko:"그 세부사항이", t:"subj"},
        {en:"matters", ko:"중요하다는", t:"verb"}]},
      {n:81, full:"그 비평가는 누구의 카메라가 그 바닥에 떨어졌는지를 물었다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"asked", ko:"물었다", t:"verb"},
        {en:"whose camera", ko:"누구의 카메라가 ~인지를", t:"obj", link:true, marker:true, span:3},
        {en:"fell", ko:"떨어졌는지", t:"verb"},
        {en:"to the floor", ko:"그 바닥에", t:"mod"}]},
      {n:82, full:"그 비평가는 그 주제가 흥미로웠다고 언급했다", chunks:[
        {en:"The critic", ko:"그 비평가는", t:"subj"},
        {en:"mentioned", ko:"언급했다", t:"verb"},
        {en:"the topic", ko:"그 주제가", t:"subj", link:true, outer:"obj", outerKo:"~라고", span:3},
        {en:"was", ko:"~였다", t:"verb"},
        {en:"curious", ko:"흥미로웠다고", t:"comp"}]},
    ]},
  ],
  vocab:[
    { id:"1형식(1)", items:[
      {en:"conflict", ipa:"/ˈkɑːnflɪkt/", ko:["갈등"], pos:"n"},
      {en:"danger", ipa:"/ˈdeɪndʒər/", ko:["위험"], pos:"n"},
      {en:"doctor", ipa:"/ˈdɑːktər/", ko:["의사"], pos:"n"},
      {en:"evidence", ipa:"/ˈevɪdəns/", ko:["증거"], pos:"n"},
      {en:"forest", ipa:"/ˈfɔːrɪst/", ko:["숲"], pos:"n"},
      {en:"guest", ipa:"/ɡest/", ko:["손님"], pos:"n"},
      {en:"memory", ipa:"/ˈmeməri/", ko:["기억"], pos:"n"},
      {en:"number", ipa:"/ˈnʌmbər/", ko:["숫자"], pos:"n"},
      {en:"plane", ipa:"/pleɪn/", ko:["비행기"], pos:"n"},
      {en:"price", ipa:"/praɪs/", ko:["가격"], pos:"n"},
      {en:"problem", ipa:"/ˈprɑːbləm/", ko:["문제"], pos:"n"},
      {en:"war", ipa:"/wɔːr/", ko:["전쟁"], pos:"n"},
      {en:"appear", ipa:"/əˈpɪr/", ko:["나타나다"], pos:"v"},
      {en:"arise", ipa:"/əˈraɪz/", ko:["생기다"], pos:"v"},
      {en:"begin", ipa:"/bɪˈɡɪn/", ko:["시작하다"], pos:"v"},
      {en:"decrease", ipa:"/dɪˈkriːs/", ko:["줄다"], pos:"v"},
      {en:"depart", ipa:"/dɪˈpɑːrt/", ko:["떠나다"], pos:"v"},
      {en:"emerge", ipa:"/ɪˈmɜːrdʒ/", ko:["나타나다"], pos:"v"},
      {en:"exist", ipa:"/ɪɡˈzɪst/", ko:["존재하다"], pos:"v"},
      {en:"increase", ipa:"/ɪnˈkriːs/", ko:["늘다"], pos:"v"},
      {en:"occur", ipa:"/əˈkɜːr/", ko:["일어나다"], pos:"v"},
      {en:"survive", ipa:"/sərˈvaɪv/", ko:["살아남다"], pos:"v"},
      {en:"vanish", ipa:"/ˈvænɪʃ/", ko:["사라지다"], pos:"v"},
      {en:"relax", ipa:"/rɪˈlæks/", ko:["쉬다"], pos:"v"}
    ]},
    { id:"1형식(2)", items:[
      {en:"city", ipa:"/ˈsɪti/", ko:["도시"], pos:"n"},
      {en:"early", ipa:"/ˈɜːrli/", ko:["일찍"], pos:"adv"},
      {en:"forever", ipa:"/fərˈevər/", ko:["영원히"], pos:"adv"},
      {en:"hospital", ipa:"/ˈhɑːspɪtl/", ko:["병원"], pos:"n"},
      {en:"market", ipa:"/ˈmɑːrkɪt/", ko:["시장"], pos:"n"},
      {en:"morning", ipa:"/ˈmɔːrnɪŋ/", ko:["아침"], pos:"n"},
      {en:"night", ipa:"/naɪt/", ko:["밤"], pos:"n"},
      {en:"road", ipa:"/roʊd/", ko:["길"], pos:"n"},
      {en:"school", ipa:"/skuːl/", ko:["학교"], pos:"n"},
      {en:"street", ipa:"/striːt/", ko:["거리"], pos:"n"},
      {en:"time", ipa:"/taɪm/", ko:["시간"], pos:"n"},
      {en:"window", ipa:"/ˈwɪndoʊ/", ko:["창문"], pos:"n"},
      {en:"athlete", ipa:"/ˈæθliːt/", ko:["운동선수"], pos:"n"},
      {en:"citizen", ipa:"/ˈsɪtɪzn/", ko:["시민"], pos:"n"},
      {en:"critic", ipa:"/ˈkrɪtɪk/", ko:["비평가"], pos:"n"},
      {en:"customer", ipa:"/ˈkʌstəmər/", ko:["고객"], pos:"n"},
      {en:"expert", ipa:"/ˈekspɜːrt/", ko:["전문가"], pos:"n"},
      {en:"patient", ipa:"/ˈpeɪʃnt/", ko:["환자"], pos:"n"},
      {en:"compete", ipa:"/kəmˈpiːt/", ko:["경쟁하다"], pos:"v"},
      {en:"hesitate", ipa:"/ˈhezɪteɪt/", ko:["망설이다"], pos:"v"},
      {en:"sleep", ipa:"/sliːp/", ko:["자다"], pos:"v"},
      {en:"travel", ipa:"/ˈtrævl/", ko:["여행하다"], pos:"v"},
      {en:"wander", ipa:"/ˈwɑːndər/", ko:["거닐다"], pos:"v"},
      {en:"work", ipa:"/wɜːrk/", ko:["일하다"], pos:"v"}
    ]},
    { id:"2형식(1)", items:[
      {en:"busy", ipa:"/ˈbɪzi/", ko:["바쁜"], pos:"adj"},
      {en:"calm", ipa:"/kɑːm/", ko:["고요한"], pos:"adj"},
      {en:"clear", ipa:"/klɪr/", ko:["분명한"], pos:"adj"},
      {en:"cold", ipa:"/koʊld/", ko:["추운"], pos:"adj"},
      {en:"ready", ipa:"/ˈredi/", ko:["준비된"], pos:"adj"},
      {en:"soft", ipa:"/sɔːft/", ko:["부드러운"], pos:"adj"},
      {en:"sweet", ipa:"/swiːt/", ko:["달콤한"], pos:"adj"},
      {en:"wet", ipa:"/wet/", ko:["젖은"], pos:"adj"},
      {en:"blanket", ipa:"/ˈblæŋkɪt/", ko:["담요"], pos:"n"},
      {en:"child", ipa:"/tʃaɪld/", ko:["아이"], pos:"n"},
      {en:"coat", ipa:"/koʊt/", ko:["코트"], pos:"n"},
      {en:"fruit", ipa:"/fruːt/", ko:["과일"], pos:"n"},
      {en:"genius", ipa:"/ˈdʒiːniəs/", ko:["천재"], pos:"n"},
      {en:"hero", ipa:"/ˈhɪroʊ/", ko:["영웅"], pos:"n"},
      {en:"legend", ipa:"/ˈledʒənd/", ko:["전설"], pos:"n"},
      {en:"soup", ipa:"/suːp/", ko:["수프"], pos:"n"},
      {en:"be", ipa:"/biː/", ko:["~이다/있다"], pos:"v"},
      {en:"become", ipa:"/bɪˈkʌm/", ko:["~이 되다"], pos:"v"},
      {en:"feel", ipa:"/fiːl/", ko:["느끼다"], pos:"v"},
      {en:"get", ipa:"/ɡet/", ko:["~해지다"], pos:"v"},
      {en:"look", ipa:"/lʊk/", ko:["보다","~해 보이다"], pos:"v"},
      {en:"smell", ipa:"/smel/", ko:["~한 냄새가 나다"], pos:"v"},
      {en:"sound", ipa:"/saʊnd/", ko:["~하게 들리다","소리"], pos:"v"},
      {en:"taste", ipa:"/teɪst/", ko:["~한 맛이 나다"], pos:"v"}
    ]},
    { id:"2형식(2)", items:[
      {en:"bad", ipa:"/bæd/", ko:["나쁜"], pos:"adj"},
      {en:"dark", ipa:"/dɑːrk/", ko:["어두운"], pos:"adj"},
      {en:"deep", ipa:"/diːp/", ko:["깊은"], pos:"adj"},
      {en:"dry", ipa:"/draɪ/", ko:["마른"], pos:"adj"},
      {en:"free", ipa:"/friː/", ko:["자유로운"], pos:"adj"},
      {en:"low", ipa:"/loʊ/", ko:["낮은"], pos:"adj"},
      {en:"open", ipa:"/ˈoʊpən/", ko:["열다","열린"], pos:"adj"},
      {en:"quiet", ipa:"/ˈkwaɪət/", ko:["조용한"], pos:"adj"},
      {en:"red", ipa:"/red/", ko:["빨간"], pos:"adj"},
      {en:"strange", ipa:"/streɪndʒ/", ko:["이상한"], pos:"adj"},
      {en:"tall", ipa:"/tɔːl/", ko:["키 큰"], pos:"adj"},
      {en:"true", ipa:"/truː/", ko:["사실인"], pos:"adj"},
      {en:"garden", ipa:"/ˈɡɑːrdn/", ko:["정원"], pos:"n"},
      {en:"room", ipa:"/ruːm/", ko:["방"], pos:"n"},
      {en:"box", ipa:"/bɑːks/", ko:["상자"], pos:"n"},
      {en:"idea", ipa:"/aɪˈdiːə/", ko:["생각"], pos:"n"},
      {en:"leaf", ipa:"/liːf/", ko:["잎"], pos:"n"},
      {en:"milk", ipa:"/mɪlk/", ko:["우유"], pos:"n"},
      {en:"river", ipa:"/ˈrɪvər/", ko:["강"], pos:"n"},
      {en:"sky", ipa:"/skaɪ/", ko:["하늘"], pos:"n"},
      {en:"truth", ipa:"/truːθ/", ko:["진실"], pos:"n"},
      {en:"act", ipa:"/ækt/", ko:["행동하다"], pos:"v"},
      {en:"break", ipa:"/breɪk/", ko:["~하게 되다"], pos:"v"},
      {en:"come", ipa:"/kʌm/", ko:["~하게 되다"], pos:"v"},
      {en:"fall", ipa:"/fɔːl/", ko:["~해지다"], pos:"v"},
      {en:"go", ipa:"/ɡoʊ/", ko:["~해지다"], pos:"v"},
      {en:"grow", ipa:"/ɡroʊ/", ko:["~해지다"], pos:"v"},
      {en:"hold", ipa:"/hoʊld/", ko:["~한 채로 유지되다"], pos:"v"},
      {en:"remain", ipa:"/rɪˈmeɪn/", ko:["남다"], pos:"v"},
      {en:"run", ipa:"/rʌn/", ko:["~한 상태다"], pos:"v"},
      {en:"seem", ipa:"/siːm/", ko:["~인 것 같다"], pos:"v"},
      {en:"sit", ipa:"/sɪt/", ko:["~한 채로 있다"], pos:"v"},
      {en:"stand", ipa:"/stænd/", ko:["~한 상태로 있다"], pos:"v"},
      {en:"stay", ipa:"/steɪ/", ko:["~한 상태를 유지하다"], pos:"v"},
      {en:"turn", ipa:"/tɜːrn/", ko:["~하게 되다","돌다"], pos:"v"},
      {en:"prove", ipa:"/pruːv/", ko:["~로 드러나다"], pos:"v"}
    ]},
    { id:"3형식(1)", items:[
      {en:"build", ipa:"/bɪld/", ko:["짓다"], pos:"v"},
      {en:"carry", ipa:"/ˈkæri/", ko:["나르다"], pos:"v"},
      {en:"cut", ipa:"/kʌt/", ko:["자르다"], pos:"v"},
      {en:"draw", ipa:"/drɔː/", ko:["그리다"], pos:"v"},
      {en:"eat", ipa:"/iːt/", ko:["먹다"], pos:"v"},
      {en:"finish", ipa:"/ˈfɪnɪʃ/", ko:["끝내다"], pos:"v"},
      {en:"know", ipa:"/noʊ/", ko:["알다"], pos:"v"},
      {en:"learn", ipa:"/lɜːrn/", ko:["배우다"], pos:"v"},
      {en:"meet", ipa:"/miːt/", ko:["만나다"], pos:"v"},
      {en:"need", ipa:"/niːd/", ko:["필요하다"], pos:"v"},
      {en:"paint", ipa:"/peɪnt/", ko:["칠하다"], pos:"v"},
      {en:"read", ipa:"/riːd/", ko:["읽다"], pos:"v"},
      {en:"remember", ipa:"/rɪˈmembər/", ko:["기억하다"], pos:"v"},
      {en:"study", ipa:"/ˈstʌdi/", ko:["공부하다"], pos:"v"},
      {en:"use", ipa:"/juːz/", ko:["사용하다"], pos:"v"},
      {en:"visit", ipa:"/ˈvɪzɪt/", ko:["방문하다"], pos:"v"},
      {en:"architect", ipa:"/ˈɑːrkɪtekt/", ko:["건축가"], pos:"n"},
      {en:"poet", ipa:"/ˈpoʊɪt/", ko:["시인"], pos:"n"},
      {en:"pioneer", ipa:"/ˌpaɪəˈnɪr/", ko:["개척자"], pos:"n"},
      {en:"witness", ipa:"/ˈwɪtnəs/", ko:["목격자"], pos:"n"},
      {en:"company", ipa:"/ˈkʌmpəni/", ko:["회사"], pos:"n"},
      {en:"team", ipa:"/tiːm/", ko:["팀"], pos:"n"},
      {en:"friend", ipa:"/frend/", ko:["친구"], pos:"n"},
      {en:"woman", ipa:"/ˈwʊmən/", ko:["여자"], pos:"n"},
      {en:"man", ipa:"/mæn/", ko:["남자"], pos:"n"},
      {en:"boy", ipa:"/bɔɪ/", ko:["소년"], pos:"n"},
      {en:"girl", ipa:"/ɡɜːrl/", ko:["소녀"], pos:"n"},
      {en:"book", ipa:"/bʊk/", ko:["책"], pos:"n"},
      {en:"story", ipa:"/ˈstɔːri/", ko:["이야기"], pos:"n"},
      {en:"letter", ipa:"/ˈletər/", ko:["편지"], pos:"n"},
      {en:"picture", ipa:"/ˈpɪktʃər/", ko:["그림"], pos:"n"},
      {en:"map", ipa:"/mæp/", ko:["지도"], pos:"n"},
      {en:"bridge", ipa:"/brɪdʒ/", ko:["다리"], pos:"n"},
      {en:"history", ipa:"/ˈhɪstəri/", ko:["역사"], pos:"n"},
      {en:"food", ipa:"/fuːd/", ko:["음식"], pos:"n"},
      {en:"answer", ipa:"/ˈænsər/", ko:["답"], pos:"n"},
      {en:"office", ipa:"/ˈɔːfɪs/", ko:["사무실"], pos:"n"},
      {en:"field", ipa:"/fiːld/", ko:["들판","분야"], pos:"n"},
      {en:"house", ipa:"/haʊs/", ko:["집"], pos:"n"}
    ]},{ id:"3형식(2)", items:[
      {en:"enter", ipa:"/ˈentər/", ko:["들어가다"], pos:"v"},
      {en:"address", ipa:"/əˈdres/", ko:["다루다","연설하다"], pos:"v"},
      {en:"add", ipa:"/æd/", ko:["더하다"], pos:"v"},
      {en:"hope", ipa:"/hoʊp/", ko:["바라다"], pos:"v"},
      {en:"object", ipa:"/əbˈdʒekt/", ko:["반대하다"], pos:"v"},
      {en:"wait", ipa:"/weɪt/", ko:["기다리다"], pos:"v"},
      {en:"change", ipa:"/tʃeɪndʒ/", ko:["바꾸다","변화"], pos:"n"},
      {en:"account", ipa:"/əˈkaʊnt/", ko:["계좌","설명"], pos:"v"},
      {en:"answer", ipa:"/ˈænsər/", ko:["대답하다"], pos:"v"},
      {en:"approach", ipa:"/əˈproʊtʃ/", ko:["다가가다"], pos:"v"},
      {en:"attend", ipa:"/əˈtend/", ko:["참석하다"], pos:"v"},
      {en:"await", ipa:"/əˈweɪt/", ko:["기다리다"], pos:"v"},
      {en:"consider", ipa:"/kənˈsɪdər/", ko:["고려하다"], pos:"v"},
      {en:"discuss", ipa:"/dɪsˈkʌs/", ko:["논의하다"], pos:"v"},
      {en:"inhabit", ipa:"/ɪnˈhæbɪt/", ko:["거주하다"], pos:"v"},
      {en:"interfere", ipa:"/ˌɪntərˈfɪr/", ko:["간섭하다"], pos:"v"},
      {en:"marry", ipa:"/ˈmæri/", ko:["결혼하다"], pos:"v"},
      {en:"obey", ipa:"/oʊˈbeɪ/", ko:["복종하다"], pos:"v"},
      {en:"reach", ipa:"/riːtʃ/", ko:["도달하다"], pos:"v"},
      {en:"resemble", ipa:"/rɪˈzembl/", ko:["닮다"], pos:"v"},
      {en:"sympathize", ipa:"/ˈsɪmpəθaɪz/", ko:["공감하다"], pos:"v"},
      {en:"result", ipa:"/rɪˈzʌlt/", ko:["결과"], pos:"n"}
    ]},
    { id:"4형식(1)", items:[
      {en:"buy", ipa:"/baɪ/", ko:["사다"], pos:"v"},
      {en:"choose", ipa:"/tʃuːz/", ko:["고르다"], pos:"v"},
      {en:"cook", ipa:"/kʊk/", ko:["요리하다"], pos:"v"},
      {en:"find", ipa:"/faɪnd/", ko:["찾다","~라고 여기다"], pos:"v"},
      {en:"give", ipa:"/ɡɪv/", ko:["주다"], pos:"v"},
      {en:"hand", ipa:"/hænd/", ko:["건네주다","손"], pos:"v"},
      {en:"make", ipa:"/meɪk/", ko:["만들다","~하게 하다"], pos:"v"},
      {en:"promise", ipa:"/ˈprɑːmɪs/", ko:["약속하다"], pos:"v"},
      {en:"sell", ipa:"/sel/", ko:["팔다"], pos:"v"},
      {en:"send", ipa:"/send/", ko:["보내다"], pos:"v"},
      {en:"show", ipa:"/ʃoʊ/", ko:["보여주다"], pos:"v"},
      {en:"teach", ipa:"/tiːtʃ/", ko:["가르치다"], pos:"v"},
      {en:"tell", ipa:"/tel/", ko:["말하다"], pos:"v"},
      {en:"write", ipa:"/raɪt/", ko:["쓰다"], pos:"v"},
      {en:"demand", ipa:"/dɪˈmænd/", ko:["요구하다"], pos:"v"},
      {en:"do", ipa:"/duː/", ko:["하다"], pos:"v"},
      {en:"get", ipa:"/ɡet/", ko:["구해주다"], pos:"v"},
      {en:"lend", ipa:"/lend/", ko:["빌려주다"], pos:"v"},
      {en:"order", ipa:"/ˈɔːrdər/", ko:["명령하다","주문"], pos:"v"},
      {en:"prepare", ipa:"/prɪˈper/", ko:["준비하다"], pos:"v"},
      {en:"request", ipa:"/rɪˈkwest/", ko:["요청하다"], pos:"v"},
      {en:"require", ipa:"/rɪˈkwaɪər/", ko:["요구하다"], pos:"v"},
      {en:"spare", ipa:"/sper/", ko:["아끼다","할애하다"], pos:"v"},
      {en:"throw", ipa:"/θroʊ/", ko:["던지다"], pos:"v"},
      {en:"favor", ipa:"/ˈfeɪvər/", ko:["호의","부탁"], pos:"n"},
      {en:"minute", ipa:"/ˈmɪnɪt/", ko:["분"], pos:"n"},
      {en:"taxi", ipa:"/ˈtæksi/", ko:["택시"], pos:"n"}
    ]},
    { id:"4형식(2)", items:[
      {en:"bag", ipa:"/bæɡ/", ko:["가방"], pos:"n"},
      {en:"ball", ipa:"/bɔːl/", ko:["공"], pos:"n"},
      {en:"bike", ipa:"/baɪk/", ko:["자전거"], pos:"n"},
      {en:"bottle", ipa:"/ˈbɑːtl/", ko:["병"], pos:"n"},
      {en:"brother", ipa:"/ˈbrʌðər/", ko:["형제"], pos:"n"},
      {en:"car", ipa:"/kɑːr/", ko:["자동차"], pos:"n"},
      {en:"chair", ipa:"/tʃer/", ko:["의자"], pos:"n"},
      {en:"cup", ipa:"/kʌp/", ko:["컵"], pos:"n"},
      {en:"desk", ipa:"/desk/", ko:["책상"], pos:"n"},
      {en:"dog", ipa:"/dɔːɡ/", ko:["개"], pos:"n"},
      {en:"door", ipa:"/dɔːr/", ko:["문"], pos:"n"},
      {en:"drink", ipa:"/drɪŋk/", ko:["마시다","음료"], pos:"n"},
      {en:"egg", ipa:"/eɡ/", ko:["달걀"], pos:"n"},
      {en:"father", ipa:"/ˈfɑːðər/", ko:["아버지"], pos:"n"},
      {en:"flower", ipa:"/ˈflaʊər/", ko:["꽃"], pos:"n"},
      {en:"game", ipa:"/ɡeɪm/", ko:["경기"], pos:"n"},
      {en:"money", ipa:"/ˈmʌni/", ko:["돈"], pos:"n"},
      {en:"mother", ipa:"/ˈmʌðər/", ko:["어머니"], pos:"n"},
      {en:"name", ipa:"/neɪm/", ko:["이름"], pos:"n"},
      {en:"paper", ipa:"/ˈpeɪpər/", ko:["종이"], pos:"n"},
      {en:"plan", ipa:"/plæn/", ko:["계획"], pos:"n"},
      {en:"question", ipa:"/ˈkwestʃən/", ko:["질문"], pos:"n"},
      {en:"sister", ipa:"/ˈsɪstər/", ko:["자매"], pos:"n"},
      {en:"watch", ipa:"/wɑːtʃ/", ko:["시계"], pos:"n"}
    ]},
    { id:"3형식수동태", items:[
      {en:"clean", ipa:"/kliːn/", ko:["깨끗한","청소하다"], pos:"v"},
      {en:"close", ipa:"/kloʊz/", ko:["닫다"], pos:"v"},
      {en:"control", ipa:"/kənˈtroʊl/", ko:["통제하다"], pos:"v"},
      {en:"cover", ipa:"/ˈkʌvər/", ko:["덮다"], pos:"v"},
      {en:"drop", ipa:"/drɑːp/", ko:["떨어뜨리다"], pos:"v"},
      {en:"fix", ipa:"/fɪks/", ko:["고치다"], pos:"v"},
      {en:"move", ipa:"/muːv/", ko:["움직이다"], pos:"v"},
      {en:"store", ipa:"/stɔːr/", ko:["가게","저장하다"], pos:"v"},
      {en:"touch", ipa:"/tʌtʃ/", ko:["만지다"], pos:"v"},
      {en:"wash", ipa:"/wɑːʃ/", ko:["씻다"], pos:"v"},
      {en:"wear-wore-worn", ipa:"/wer/", ko:["입다"], pos:"v"},
      {en:"catch-caught-caught", ipa:"/kætʃ/", ko:["잡다"], pos:"v"}
    ]},
    
    { id:"4형식수동태", items:[
      {en:"pass", ipa:"/pæs/", ko:["건네다","지나가다"], pos:"v"},
      {en:"sing-sang-sung", ipa:"/sɪŋ/", ko:["노래하다"], pos:"v"},
      {en:"save", ipa:"/seɪv/", ko:["자리를 맡아주다"], pos:"v"},
      {en:"effort", ipa:"/ˈefərt/", ko:["노력"], pos:"n"},
      {en:"song", ipa:"/sɔːŋ/", ko:["노래"], pos:"n"},
      {en:"seat", ipa:"/siːt/", ko:["좌석"], pos:"n"},
      {en:"meal", ipa:"/miːl/", ko:["식사"], pos:"n"}
    ]},
    { id:"5형식(1)", items:[
      {en:"believe", ipa:"/bɪˈliːv/", ko:["믿다"], pos:"v"},
      {en:"keep", ipa:"/kiːp/", ko:["유지하다"], pos:"v"},
      {en:"familiar", ipa:"/fəˈmɪliər/", ko:["익숙한"], pos:"adj"},
      {en:"honest", ipa:"/ˈɑːnɪst/", ko:["정직한"], pos:"adj"},
      {en:"warm", ipa:"/wɔːrm/", ko:["따뜻한"], pos:"adj"},
      {en:"leader", ipa:"/ˈliːdər/", ko:["지도자"], pos:"n"},
      {en:"adult", ipa:"/ˈædʌlt/", ko:["성인"], pos:"n"},
      {en:"engine", ipa:"/ˈendʒɪn/", ko:["엔진"], pos:"n"},
      {en:"kitchen", ipa:"/ˈkɪtʃɪn/", ko:["부엌"], pos:"n"},
      {en:"member", ipa:"/ˈmembər/", ko:["구성원"], pos:"n"},
      {en:"movie", ipa:"/ˈmuːvi/", ko:["영화"], pos:"n"},
      {en:"opinion", ipa:"/əˈpɪnjən/", ko:["의견"], pos:"n"},
      {en:"parent", ipa:"/ˈperənt/", ko:["부모"], pos:"n"},
      {en:"people", ipa:"/ˈpiːpl/", ko:["사람들"], pos:"n"},
      {en:"research", ipa:"/rɪˈsɜːrtʃ/", ko:["연구"], pos:"n"},
      {en:"star", ipa:"/stɑːr/", ko:["별","스타"], pos:"n"},
      {en:"success", ipa:"/səkˈses/", ko:["성공"], pos:"n"},
      {en:"table", ipa:"/ˈteɪbl/", ko:["탁자"], pos:"n"},
      {en:"victim", ipa:"/ˈvɪktɪm/", ko:["피해자"], pos:"n"},
      {en:"water", ipa:"/ˈwɔːtər/", ko:["물"], pos:"n"},
      {en:"call", ipa:"/kɔːl/", ko:["부르다","~라고 부르다"], pos:"v"},
      {en:"name", ipa:"/neɪm/", ko:["~라고 명명하다"], pos:"v"},
      {en:"leave", ipa:"/liːv/", ko:["떠나다","~한 채로 두다"], pos:"v"},
      {en:"elect", ipa:"/ɪˈlekt/", ko:["선출하다"], pos:"v"},
      {en:"president", ipa:"/ˈprezɪdənt/", ko:["회장","대통령"], pos:"n"},
      {en:"captain", ipa:"/ˈkæptɪn/", ko:["주장","선장"], pos:"n"}
    ]},
    { id:"5형식(2)", items:[
      {en:"agree", ipa:"/əˈɡriː/", ko:["동의하다"], pos:"v"},
      {en:"complain", ipa:"/kəmˈpleɪn/", ko:["불평하다"], pos:"v"},
      {en:"cough", ipa:"/kɔːf/", ko:["기침하다"], pos:"v"},
      {en:"help", ipa:"/help/", ko:["돕다"], pos:"v"},
      {en:"laugh", ipa:"/læf/", ko:["웃다"], pos:"v"},
      {en:"play", ipa:"/pleɪ/", ko:["놀다","연주하다"], pos:"v"},
      {en:"react", ipa:"/riˈækt/", ko:["반응하다"], pos:"v"},
      {en:"return", ipa:"/rɪˈtɜːrn/", ko:["돌아오다"], pos:"v"},
      {en:"stop", ipa:"/stɑːp/", ko:["멈추다"], pos:"v"},
      {en:"succeed", ipa:"/səkˈsiːd/", ko:["성공하다"], pos:"v"},
      {en:"understand", ipa:"/ˌʌndərˈstænd/", ko:["이해하다"], pos:"v"},
      {en:"win", ipa:"/wɪn/", ko:["이기다"], pos:"v"},
      {en:"decide", ipa:"/dɪˈsaɪd/", ko:["결정하다"], pos:"v"},
      {en:"start", ipa:"/stɑːrt/", ko:["시작하다"], pos:"v"},
      {en:"animal", ipa:"/ˈænɪml/", ko:["동물"], pos:"n"},
      {en:"area", ipa:"/ˈeriə/", ko:["지역"], pos:"n"},
      {en:"audience", ipa:"/ˈɔːdiəns/", ko:["관객"], pos:"n"},
      {en:"baby", ipa:"/ˈbeɪbi/", ko:["아기"], pos:"n"},
      {en:"beach", ipa:"/biːtʃ/", ko:["해변"], pos:"n"},
      {en:"class", ipa:"/klæs/", ko:["수업","학급"], pos:"n"},
      {en:"crowd", ipa:"/kraʊd/", ko:["군중"], pos:"n"},
      {en:"desert", ipa:"/ˈdezərt/", ko:["사막"], pos:"n"},
      {en:"family", ipa:"/ˈfæməli/", ko:["가족"], pos:"n"},
      {en:"floor", ipa:"/flɔːr/", ko:["바닥"], pos:"n"},
      {en:"glass", ipa:"/ɡlæs/", ko:["유리","잔"], pos:"n"},
      {en:"group", ipa:"/ɡruːp/", ko:["집단"], pos:"n"},
      {en:"highway", ipa:"/ˈhaɪweɪ/", ko:["고속도로"], pos:"n"},
      {en:"hour", ipa:"/ˈaʊər/", ko:["시간"], pos:"n"},
      {en:"issue", ipa:"/ˈɪʃuː/", ko:["문제","사안"], pos:"n"},
      {en:"lady", ipa:"/ˈleɪdi/", ko:["숙녀"], pos:"n"},
      {en:"music", ipa:"/ˈmjuːzɪk/", ko:["음악"], pos:"n"},
      {en:"park", ipa:"/pɑːrk/", ko:["공원"], pos:"n"},
      {en:"project", ipa:"/ˈprɑːdʒekt/", ko:["프로젝트"], pos:"n"},
      {en:"rain", ipa:"/reɪn/", ko:["비"], pos:"n"},
      {en:"science", ipa:"/ˈsaɪəns/", ko:["과학"], pos:"n"},
      {en:"old", ipa:"/oʊld/", ko:["오래된","늙은"], pos:"adj"},
      {en:"proud", ipa:"/praʊd/", ko:["자랑스러운"], pos:"adj"},
      {en:"watch", ipa:"/wɑːtʃ/", ko:["보다"], pos:"v"},
      {en:"have", ipa:"/hæv/", ko:["~하게 시키다","~하게 당하다"], pos:"v"},
      {en:"let", ipa:"/let/", ko:["~하게 두다"], pos:"v"},
      {en:"see", ipa:"/siː/", ko:["보다"], pos:"v"},
      {en:"hear", ipa:"/hɪr/", ko:["듣다"], pos:"v"},
      {en:"notice", ipa:"/ˈnoʊtɪs/", ko:["알아차리다"], pos:"v"},
      {en:"observe", ipa:"/əbˈzɜːrv/", ko:["관찰하다"], pos:"v"},
      {en:"bug", ipa:"/bʌɡ/", ko:["벌레"], pos:"n"},
      {en:"look at", ipa:"/lʊk æt/", ko:["~을 보다"], pos:"v"},
      {en:"listen to", ipa:"/ˈlɪsən tuː/", ko:["~을 듣다"], pos:"v"},
      {en:"smell", ipa:"/smel/", ko:["~의 냄새를 맡다"], pos:"v"},
      {en:"burn", ipa:"/bɜːrn/", ko:["(불에) 타다"], pos:"v"},
      {en:"leg", ipa:"/leɡ/", ko:["다리"], pos:"n"},
      {en:"wallet", ipa:"/ˈwɑːlɪt/", ko:["지갑"], pos:"n"},
      {en:"steal", ipa:"/stiːl/", ko:["훔치다"], pos:"v"},
    ]},
    { id:"5형식(3)", items:[
      {en:"want", ipa:"/wɑːnt/", ko:["원하다"], pos:"v"},
      {en:"ask", ipa:"/æsk/", ko:["묻다","요청하다"], pos:"v"},
      {en:"allow", ipa:"/əˈlaʊ/", ko:["허락하다"], pos:"v"},
      {en:"expect", ipa:"/ɪkˈspekt/", ko:["기대하다"], pos:"v"},
      {en:"encourage", ipa:"/ɪnˈkɜːrɪdʒ/", ko:["격려하다"], pos:"v"},
      {en:"force", ipa:"/fɔːrs/", ko:["강요하다","힘"], pos:"v"},
      {en:"advise", ipa:"/ədˈvaɪz/", ko:["조언하다"], pos:"v"},
      {en:"invite", ipa:"/ɪnˈvaɪt/", ko:["초대하다"], pos:"v"},
      {en:"remind", ipa:"/rɪˈmaɪnd/", ko:["상기시키다"], pos:"v"},
      {en:"warn", ipa:"/wɔːrn/", ko:["경고하다"], pos:"v"},
      {en:"cause", ipa:"/kɔːz/", ko:["~하게 야기하다"], pos:"v"},
      {en:"enable", ipa:"/ɪˈneɪbl/", ko:["~할 수 있게 하다"], pos:"v"},
      {en:"persuade", ipa:"/pərˈsweɪd/", ko:["설득하다"], pos:"v"},
      {en:"bring-brought-brought", ipa:"/brɪŋ/", ko:["가져오다"], pos:"v"},
      {en:"care", ipa:"/ker/", ko:["돌보다","관심 갖다"], pos:"v"},
      {en:"face", ipa:"/feɪs/", ko:["마주하다","얼굴"], pos:"v"},
      {en:"fail", ipa:"/feɪl/", ko:["실패하다"], pos:"v"},
      {en:"join", ipa:"/dʒɔɪn/", ko:["합류하다"], pos:"v"},
      {en:"participate", ipa:"/pɑːrˈtɪsɪpeɪt/", ko:["참여하다"], pos:"v"},
      {en:"pause", ipa:"/pɔːz/", ko:["멈추다"], pos:"v"},
      {en:"respond", ipa:"/rɪˈspɑːnd/", ko:["응답하다"], pos:"v"},
      {en:"retire", ipa:"/rɪˈtaɪər/", ko:["은퇴하다"], pos:"v"},
      {en:"try", ipa:"/traɪ/", ko:["시도하다"], pos:"v"},
      {en:"fire", ipa:"/ˈfaɪər/", ko:["불"], pos:"n"},
      {en:"sale", ipa:"/seɪl/", ko:["판매"], pos:"n"},
      {en:"month", ipa:"/mʌnθ/", ko:["달","월"], pos:"n"},
      {en:"season", ipa:"/ˈsiːzn/", ko:["계절"], pos:"n"},
      {en:"future", ipa:"/ˈfjuːtʃər/", ko:["미래"], pos:"n"},
      {en:"bright", ipa:"/braɪt/", ko:["총명한"], pos:"adj"},
      {en:"loud", ipa:"/laʊd/", ko:["시끄러운"], pos:"adj"},
      {en:"new", ipa:"/nuː/", ko:["새로운"], pos:"adj"},
      {en:"next", ipa:"/nekst/", ko:["다음의"], pos:"adj"},
      {en:"short", ipa:"/ʃɔːrt/", ko:["짧은"], pos:"adj"}
    ]},
    { id:"5형식수동태", items:[
      {en:"queen", ipa:"/kwiːn/", ko:["여왕"], pos:"n"},
      {en:"police", ipa:"/pəˈliːs/", ko:["경찰"], pos:"n"},
      {en:"model", ipa:"/ˈmɑːdl/", ko:["모형", "모델"], pos:"n"},
      {en:"sea", ipa:"/siː/", ko:["바다"], pos:"n"},
      {en:"weather", ipa:"/ˈweðər/", ko:["날씨"], pos:"n"},
      {en:"chemical", ipa:"/ˈkemɪkl/", ko:["화학물질"], pos:"n"},
      {en:"dream", ipa:"/driːm/", ko:["꿈"], pos:"n"},
      {en:"form", ipa:"/fɔːrm/", ko:["형태", "양식"], pos:"n"},
      {en:"grass", ipa:"/ɡræs/", ko:["풀"], pos:"n"},
      {en:"ice", ipa:"/aɪs/", ko:["얼음"], pos:"n"},
      {en:"nature", ipa:"/ˈneɪtʃər/", ko:["자연"], pos:"n"},
      {en:"rose", ipa:"/roʊz/", ko:["장미"], pos:"n"},
      {en:"salt", ipa:"/sɔːlt/", ko:["소금"], pos:"n"},
      {en:"smile", ipa:"/smaɪl/", ko:["미소"], pos:"n"},
      {en:"style", ipa:"/staɪl/", ko:["방식", "스타일"], pos:"n"},
      {en:"wood", ipa:"/wʊd/", ko:["나무", "목재"], pos:"n"},
      {en:"delicious", ipa:"/dɪˈlɪʃəs/", ko:["맛있는"], pos:"a"},
      {en:"hard", ipa:"/hɑːrd/", ko:["어려운", "열심히"], pos:"a"},
      {en:"high", ipa:"/haɪ/", ko:["높은"], pos:"a"},
      {en:"light", ipa:"/laɪt/", ko:["가벼운", "빛"], pos:"a"},
      {en:"panic", ipa:"/ˈpænɪk/", ko:["당황하다", "공황"], pos:"v"},
      {en:"take", ipa:"/teɪk/", ko:["가져가다", "취하다"], pos:"v"},
      {en:"drive", ipa:"/draɪv/", ko:["운전하다"], pos:"v"},
      {en:"forget", ipa:"/fərˈɡet/", ko:["잊다"], pos:"v"},
    ]},
    { id:"MASH UP(문장 구조)", items:[
      {en:"vary", ipa:"/ˈveri/", ko:["다양하다"], pos:"v"},
      {en:"differ", ipa:"/ˈdɪfər/", ko:["다르다"], pos:"v"},
      {en:"happen", ipa:"/ˈhæpən/", ko:["일어나다"], pos:"v"},
      {en:"love", ipa:"/lʌv/", ko:["사랑하다"], pos:"v"},
      {en:"hate", ipa:"/heɪt/", ko:["싫어하다"], pos:"v"},
      {en:"like", ipa:"/laɪk/", ko:["좋아하다", "~처럼"], pos:"v"},
      {en:"world", ipa:"/wɜːrld/", ko:["세계"], pos:"n"},
    ]},
    { id:"기본 시제", items:[
      {en:"yesterday", ipa:"/ˈjestərdeɪ/", ko:["어제"], pos:"ad"},
      {en:"tomorrow", ipa:"/təˈmɑːroʊ/", ko:["내일"], pos:"ad"},
      {en:"tonight", ipa:"/təˈnaɪt/", ko:["오늘 밤"], pos:"ad"},
      {en:"soon", ipa:"/suːn/", ko:["곧"], pos:"ad"},
      {en:"late", ipa:"/leɪt/", ko:["늦은", "늦게"], pos:"a"},
      {en:"ago", ipa:"/əˈɡoʊ/", ko:["~ 전에"], pos:"ad"},
      {en:"once", ipa:"/wʌns/", ko:["한 번", "한때"], pos:"ad"},
      {en:"always", ipa:"/ˈɔːlweɪz/", ko:["항상"], pos:"ad"},
      {en:"age", ipa:"/eɪdʒ/", ko:["나이", "시대"], pos:"n"},
      {en:"often", ipa:"/ˈɔːfn/", ko:["자주"], pos:"ad"},
      {en:"past", ipa:"/pæst/", ko:["과거", "지난"], pos:"n"},
      {en:"habit", ipa:"/ˈhæbɪt/", ko:["습관"], pos:"n"},
      {en:"birth", ipa:"/bɜːrθ/", ko:["탄생", "출생"], pos:"n"},
      {en:"holiday", ipa:"/ˈhɑːlədeɪ/", ko:["휴일"], pos:"n"},
      {en:"vacation", ipa:"/vəˈkeɪʃn/", ko:["휴가"], pos:"n"},
      {en:"weekend", ipa:"/ˈwiːkend/", ko:["주말"], pos:"n"},
      {en:"schedule", ipa:"/ˈskedʒuːl/", ko:["일정", "일정을 잡다"], pos:"n"},
      {en:"event", ipa:"/ɪˈvent/", ko:["행사", "사건"], pos:"n"},
      {en:"airport", ipa:"/ˈerpɔːrt/", ko:["공항"], pos:"n"},
      {en:"station", ipa:"/ˈsteɪʃn/", ko:["역", "정거장"], pos:"n"},
      {en:"train", ipa:"/treɪn/", ko:["기차", "훈련하다"], pos:"n"},
      {en:"flight", ipa:"/flaɪt/", ko:["항공편", "비행"], pos:"n"},
      {en:"ticket", ipa:"/ˈtɪkɪt/", ko:["표", "승차권"], pos:"n"},
      {en:"arrive", ipa:"/əˈraɪv/", ko:["도착하다"], pos:"v"},
      {en:"fly", ipa:"/flaɪ/", ko:["날다", "비행기로 가다"], pos:"v"},
      {en:"ride", ipa:"/raɪd/", ko:["타다"], pos:"v"},
      {en:"board", ipa:"/bɔːrd/", ko:["탑승하다", "판자"], pos:"v"},
    ]},
    { id:"진행 시제", items:[
      {en:"belong", ipa:"/bɪˈlɔːŋ/", ko:["속하다"], pos:"v"},
      {en:"contain", ipa:"/kənˈteɪn/", ko:["담고 있다", "포함하다"], pos:"v"},
      {en:"own", ipa:"/oʊn/", ko:["소유하다", "자기 자신의"], pos:"v"},
      {en:"deserve", ipa:"/dɪˈzɜːrv/", ko:["~을 받을 만하다"], pos:"v"},
      {en:"depend", ipa:"/dɪˈpend/", ko:["~에 달려 있다", "~에 의존하다"], pos:"v"},
      {en:"mean", ipa:"/miːn/", ko:["의미하다"], pos:"v"},
      {en:"knock", ipa:"/nɑːk/", ko:["두드리다"], pos:"v"},
      {en:"shake", ipa:"/ʃeɪk/", ko:["흔들다", "흔들리다"], pos:"v"},
      {en:"melt", ipa:"/melt/", ko:["녹다", "녹이다"], pos:"v"},
      {en:"boil", ipa:"/bɔɪl/", ko:["끓다", "끓이다"], pos:"v"},
      {en:"freeze", ipa:"/friːz/", ko:["얼다", "얼리다"], pos:"v"},
      {en:"bake", ipa:"/beɪk/", ko:["굽다"], pos:"v"},
      {en:"climb", ipa:"/klaɪm/", ko:["오르다"], pos:"v"},
      {en:"swim", ipa:"/swɪm/", ko:["헤엄치다"], pos:"v"},
      {en:"jump", ipa:"/dʒʌmp/", ko:["뛰어오르다"], pos:"v"},
      {en:"dance", ipa:"/dæns/", ko:["춤추다"], pos:"v"},
      {en:"wave", ipa:"/weɪv/", ko:["흔들다", "파도"], pos:"v"},
      {en:"chase", ipa:"/tʃeɪs/", ko:["뒤쫓다"], pos:"v"},
      {en:"noise", ipa:"/nɔɪz/", ko:["소음"], pos:"n"},
      {en:"wind", ipa:"/wɪnd/", ko:["바람"], pos:"n"},
      {en:"snow", ipa:"/snoʊ/", ko:["눈", "눈이 오다"], pos:"n"},
      {en:"storm", ipa:"/stɔːrm/", ko:["폭풍"], pos:"n"},
      {en:"cloud", ipa:"/klaʊd/", ko:["구름"], pos:"n"},
      {en:"moment", ipa:"/ˈmoʊmənt/", ko:["순간"], pos:"n"},
      {en:"pool", ipa:"/puːl/", ko:["수영장", "웅덩이"], pos:"n"},
      {en:"stage", ipa:"/steɪdʒ/", ko:["무대", "단계"], pos:"n"},
      {en:"gate", ipa:"/ɡeɪt/", ko:["문", "대문"], pos:"n"},
      {en:"roof", ipa:"/ruːf/", ko:["지붕"], pos:"n"},
      {en:"present", ipa:"/ˈpreznt/", ko:["현재의", "현재", "선물"], pos:"a"},
      {en:"now", ipa:"/naʊ/", ko:["지금"], pos:"ad"},
    ]},
    { id:"조동사(1)", items:[
      {en:"apply", ipa:"/əˈplaɪ/", ko:["신청하다 (apply for)", "적용하다"], pos:"v"},
      {en:"examine", ipa:"/ɪɡˈzæmɪn/", ko:["검사하다", "진찰하다"], pos:"v"},
      {en:"lift", ipa:"/lɪft/", ko:["들어 올리다"], pos:"v"},
      {en:"pay", ipa:"/peɪ/", ko:["지불하다"], pos:"v"},
      {en:"protect", ipa:"/prəˈtekt/", ko:["보호하다"], pos:"v"},
      {en:"register", ipa:"/ˈredʒɪstər/", ko:["등록하다"], pos:"v"},
      {en:"repeat", ipa:"/rɪˈpiːt/", ko:["반복하다"], pos:"v"},
      {en:"solve", ipa:"/sɑːlv/", ko:["해결하다"], pos:"v"},
      {en:"submit", ipa:"/səbˈmɪt/", ko:["제출하다"], pos:"v"},
      {en:"translate", ipa:"/trænzˈleɪt/", ko:["번역하다"], pos:"v"},
      {en:"fee", ipa:"/fiː/", ko:["요금", "수수료"], pos:"n"},
      {en:"helmet", ipa:"/ˈhelmɪt/", ko:["헬멧"], pos:"n"},
      {en:"law", ipa:"/lɔː/", ko:["법"], pos:"n"},
      {en:"mask", ipa:"/mæsk/", ko:["마스크"], pos:"n"},
      {en:"passport", ipa:"/ˈpæspɔːrt/", ko:["여권"], pos:"n"},
      {en:"rule", ipa:"/ruːl/", ko:["규칙", "지배하다"], pos:"n"},
      {en:"tax", ipa:"/tæks/", ko:["세금"], pos:"n"},
      {en:"uniform", ipa:"/ˈjuːnɪfɔːrm/", ko:["제복", "유니폼"], pos:"n"},
      {en:"able", ipa:"/ˈeɪbl/", ko:["~할 수 있는 (be able to)"], pos:"a"},
      {en:"safe", ipa:"/seɪf/", ko:["안전한"], pos:"a"},
      {en:"strict", ipa:"/strɪkt/", ko:["엄격한"], pos:"a"}
    ]},
    { id:"조동사(2)", items:[
      {en:"avoid", ipa:"/əˈvɔɪd/", ko:["피하다"], pos:"v"},
      {en:"follow", ipa:"/ˈfɑːloʊ/", ko:["따르다", "준수하다"], pos:"v"},
      {en:"hurry", ipa:"/ˈhɜːri/", ko:["서두르다"], pos:"v"},
      {en:"quit", ipa:"/kwɪt/", ko:["그만두다"], pos:"v"},
      {en:"rest", ipa:"/rest/", ko:["쉬다", "휴식"], pos:"v"},
      {en:"stretch", ipa:"/stretʃ/", ko:["뻗다", "스트레칭하다"], pos:"v"},
      {en:"ache", ipa:"/eɪk/", ko:["통증", "아프다"], pos:"n"},
      {en:"advice", ipa:"/ədˈvaɪs/", ko:["조언"], pos:"n"},
      {en:"clue", ipa:"/kluː/", ko:["단서"], pos:"n"},
      {en:"exercise", ipa:"/ˈeksərsaɪz/", ko:["운동", "운동하다"], pos:"n"},
      {en:"fever", ipa:"/ˈfiːvər/", ko:["열"], pos:"n"},
      {en:"medicine", ipa:"/ˈmedɪsn/", ko:["약"], pos:"n"},
      {en:"nurse", ipa:"/nɜːrs/", ko:["간호사"], pos:"n"},
      {en:"sign", ipa:"/saɪn/", ko:["징후", "표시"], pos:"n"},
      {en:"symptom", ipa:"/ˈsɪmptəm/", ko:["증상"], pos:"n"}
    ]},
    { id:"완료시제(1)", items:[
      {en:"achieve", ipa:"/əˈtʃiːv/", ko:["이루다", "달성하다"], pos:"v"},
      {en:"complete", ipa:"/kəmˈpliːt/", ko:["완료하다", "완전한"], pos:"v"},
      {en:"continue", ipa:"/kənˈtɪnjuː/", ko:["계속되다", "계속하다"], pos:"v"},
      {en:"improve", ipa:"/ɪmˈpruːv/", ko:["개선하다", "나아지다"], pos:"v"},
      {en:"lose", ipa:"/luːz/", ko:["잃다", "지다"], pos:"v"},
      {en:"recover", ipa:"/rɪˈkʌvər/", ko:["회복하다", "되찾다"], pos:"v"},
      {en:"repair", ipa:"/rɪˈper/", ko:["수리하다"], pos:"v"},
      {en:"ruin", ipa:"/ˈruːɪn/", ko:["망치다", "파괴하다"], pos:"v"},
      {en:"adventure", ipa:"/ədˈventʃər/", ko:["모험"], pos:"n"},
      {en:"culture", ipa:"/ˈkʌltʃər/", ko:["문화"], pos:"n"},
      {en:"distance", ipa:"/ˈdɪstəns/", ko:["거리"], pos:"n"},
      {en:"experience", ipa:"/ɪkˈspɪriəns/", ko:["경험", "경험하다"], pos:"n"},
      {en:"hotel", ipa:"/hoʊˈtel/", ko:["호텔"], pos:"n"},
      {en:"island", ipa:"/ˈaɪlənd/", ko:["섬"], pos:"n"},
      {en:"language", ipa:"/ˈlæŋɡwɪdʒ/", ko:["언어"], pos:"n"},
      {en:"mountain", ipa:"/ˈmaʊntn/", ko:["산"], pos:"n"},
      {en:"museum", ipa:"/mjuˈziːəm/", ko:["박물관"], pos:"n"},
      {en:"ocean", ipa:"/ˈoʊʃn/", ko:["대양", "바다"], pos:"n"},
      {en:"temple", ipa:"/ˈtempl/", ko:["사원", "절"], pos:"n"},
      {en:"foreign", ipa:"/ˈfɔːrən/", ko:["외국의"], pos:"a"},
      {en:"recent", ipa:"/ˈriːsnt/", ko:["최근의"], pos:"a"},
      {en:"whole", ipa:"/hoʊl/", ko:["전체의"], pos:"a"},
      {en:"abroad", ipa:"/əˈbrɔːd/", ko:["해외로", "해외에서"], pos:"ad"},
      {en:"already", ipa:"/ɔːlˈredi/", ko:["이미", "벌써"], pos:"ad"},
      {en:"just", ipa:"/dʒʌst/", ko:["방금", "막"], pos:"ad"},
      {en:"never", ipa:"/ˈnevər/", ko:["한 번도 ~않다"], pos:"ad"},
      {en:"yet", ipa:"/jet/", ko:["아직 (부정문·의문문)"], pos:"ad"},
      {en:"since", ipa:"/sɪns/", ko:["~ 이래로"], pos:"prep"}
    ]},
    { id:"완료시제(2)", items:[
      {en:"collect", ipa:"/kəˈlekt/", ko:["모으다", "수집하다"], pos:"v"},
      {en:"publish", ipa:"/ˈpʌblɪʃ/", ko:["출판하다", "게재하다"], pos:"v"},
      {en:"article", ipa:"/ˈɑːrtɪkl/", ko:["기사", "글"], pos:"n"},
      {en:"author", ipa:"/ˈɔːθər/", ko:["작가", "저자"], pos:"n"},
      {en:"camera", ipa:"/ˈkæmərə/", ko:["카메라"], pos:"n"},
      {en:"diary", ipa:"/ˈdaɪəri/", ko:["일기"], pos:"n"},
      {en:"magazine", ipa:"/ˈmæɡəziːn/", ko:["잡지"], pos:"n"},
      {en:"novel", ipa:"/ˈnɑːvl/", ko:["소설"], pos:"n"},
      {en:"poem", ipa:"/ˈpoʊəm/", ko:["시"], pos:"n"},
      {en:"view", ipa:"/vjuː/", ko:["전망", "견해", "바라보다"], pos:"n"}
    ]},
    { id:"완료시제(3)", items:[
      {en:"announce", ipa:"/əˈnaʊns/", ko:["발표하다"], pos:"v"},
      {en:"appoint", ipa:"/əˈpɔɪnt/", ko:["임명하다"], pos:"v"},
      {en:"arrange", ipa:"/əˈreɪndʒ/", ko:["준비하다", "배치하다"], pos:"v"},
      {en:"cancel", ipa:"/ˈkænsl/", ko:["취소하다"], pos:"v"},
      {en:"confirm", ipa:"/kənˈfɜːrm/", ko:["확인하다", "확정하다"], pos:"v"},
      {en:"delay", ipa:"/dɪˈleɪ/", ko:["지연시키다", "지연"], pos:"v"},
      {en:"end", ipa:"/end/", ko:["끝나다", "끝내다", "끝"], pos:"v"},
      {en:"gather", ipa:"/ˈɡæðər/", ko:["모이다", "모으다"], pos:"v"},
      {en:"graduate", ipa:"/ˈɡrædʒueɪt/", ko:["졸업하다"], pos:"v"},
      {en:"limit", ipa:"/ˈlɪmɪt/", ko:["제한하다", "한계"], pos:"v"},
      {en:"reserve", ipa:"/rɪˈzɜːrv/", ko:["예약하다"], pos:"v"},
      {en:"settle", ipa:"/ˈsetl/", ko:["해결하다", "정착하다"], pos:"v"},
      {en:"anniversary", ipa:"/ˌænɪˈvɜːrsəri/", ko:["기념일"], pos:"n"},
      {en:"award", ipa:"/əˈwɔːrd/", ko:["상", "수여하다"], pos:"n"},
      {en:"career", ipa:"/kəˈrɪr/", ko:["경력", "직업"], pos:"n"},
      {en:"clock", ipa:"/klɑːk/", ko:["시계"], pos:"n"},
      {en:"dawn", ipa:"/dɔːn/", ko:["새벽"], pos:"n"},
      {en:"evening", ipa:"/ˈiːvnɪŋ/", ko:["저녁"], pos:"n"},
      {en:"festival", ipa:"/ˈfestɪvl/", ko:["축제"], pos:"n"},
      {en:"party", ipa:"/ˈpɑːrti/", ko:["파티"], pos:"n"},
      {en:"speech", ipa:"/spiːtʃ/", ko:["연설"], pos:"n"},
      {en:"wedding", ipa:"/ˈwedɪŋ/", ko:["결혼식"], pos:"n"},
      {en:"entire", ipa:"/ɪnˈtaɪər/", ko:["전체의"], pos:"a"},
      {en:"final", ipa:"/ˈfaɪnl/", ko:["마지막의", "최종의"], pos:"a"},
      {en:"former", ipa:"/ˈfɔːrmər/", ko:["전(前)의", "이전의"], pos:"a"},
      {en:"previous", ipa:"/ˈpriːviəs/", ko:["이전의"], pos:"a"},
      {en:"sudden", ipa:"/ˈsʌdn/", ko:["갑작스러운"], pos:"a"},
      {en:"until", ipa:"/ənˈtɪl/", ko:["~까지"], pos:"prep"}
    ]},
    { id:"조동사(3)", items:[
      {en:"accept", ipa:"/əkˈsept/", ko:["받아들이다"], pos:"v"},
      {en:"admire", ipa:"/ədˈmaɪər/", ko:["감탄하다", "존경하다"], pos:"v"},
      {en:"blame", ipa:"/bleɪm/", ko:["탓하다", "비난하다"], pos:"v"},
      {en:"confess", ipa:"/kənˈfes/", ko:["자백하다", "고백하다"], pos:"v"},
      {en:"cry", ipa:"/kraɪ/", ko:["울다", "외치다"], pos:"v"},
      {en:"endure", ipa:"/ɪnˈdʊr/", ko:["견디다"], pos:"v"},
      {en:"envy", ipa:"/ˈenvi/", ko:["부러워하다"], pos:"v"},
      {en:"escape", ipa:"/ɪˈskeɪp/", ko:["탈출하다", "달아나다"], pos:"v"},
      {en:"forgive", ipa:"/fərˈɡɪv/", ko:["용서하다"], pos:"v"},
      {en:"ignore", ipa:"/ɪɡˈnɔːr/", ko:["무시하다"], pos:"v"},
      {en:"inspect", ipa:"/ɪnˈspekt/", ko:["점검하다", "검사하다"], pos:"v"},
      {en:"lock", ipa:"/lɑːk/", ko:["잠그다", "자물쇠"], pos:"v"},
      {en:"opt", ipa:"/ɑːpt/", ko:["선택하다 (opt for)"], pos:"v"},
      {en:"prefer", ipa:"/prɪˈfɜːr/", ko:["선호하다"], pos:"v"},
      {en:"press", ipa:"/pres/", ko:["누르다"], pos:"v"},
      {en:"prevent", ipa:"/prɪˈvent/", ko:["막다", "예방하다"], pos:"v"},
      {en:"punish", ipa:"/ˈpʌnɪʃ/", ko:["처벌하다"], pos:"v"},
      {en:"refuse", ipa:"/rɪˈfjuːz/", ko:["거절하다"], pos:"v"},
      {en:"regret", ipa:"/rɪˈɡret/", ko:["후회하다"], pos:"v"},
      {en:"search", ipa:"/sɜːrtʃ/", ko:["수색하다", "찾다 (search for)"], pos:"v"},
      {en:"sense", ipa:"/sens/", ko:["감지하다", "감각"], pos:"v"},
      {en:"suffer", ipa:"/ˈsʌfər/", ko:["겪다", "시달리다 (suffer from)"], pos:"v"},
      {en:"waste", ipa:"/weɪst/", ko:["낭비하다"], pos:"v"},
      {en:"accident", ipa:"/ˈæksɪdənt/", ko:["사고"], pos:"n"},
      {en:"alarm", ipa:"/əˈlɑːrm/", ko:["경보", "알람"], pos:"n"},
      {en:"anger", ipa:"/ˈæŋɡər/", ko:["분노"], pos:"n"},
      {en:"apology", ipa:"/əˈpɑːlədʒi/", ko:["사과"], pos:"n"},
      {en:"burden", ipa:"/ˈbɜːrdn/", ko:["짐", "부담"], pos:"n"},
      {en:"chance", ipa:"/tʃæns/", ko:["기회", "가능성"], pos:"n"},
      {en:"choice", ipa:"/tʃɔɪs/", ko:["선택"], pos:"n"},
      {en:"crime", ipa:"/kraɪm/", ko:["범죄"], pos:"n"},
      {en:"excuse", ipa:"/ɪkˈskjuːs/", ko:["변명", "용서하다"], pos:"n"},
      {en:"fate", ipa:"/feɪt/", ko:["운명"], pos:"n"},
      {en:"fault", ipa:"/fɔːlt/", ko:["잘못", "결함"], pos:"n"},
      {en:"guilt", ipa:"/ɡɪlt/", ko:["죄책감", "유죄"], pos:"n"},
      {en:"key", ipa:"/kiː/", ko:["열쇠", "키(건반)"], pos:"n"},
      {en:"pain", ipa:"/peɪn/", ko:["고통"], pos:"n"},
      {en:"receipt", ipa:"/rɪˈsiːt/", ko:["영수증"], pos:"n"},
      {en:"reward", ipa:"/rɪˈwɔːrd/", ko:["보상", "보상하다"], pos:"n"},
      {en:"risk", ipa:"/rɪsk/", ko:["위험"], pos:"n"},
      {en:"trouble", ipa:"/ˈtrʌbl/", ko:["곤란", "문제"], pos:"n"},
      {en:"umbrella", ipa:"/ʌmˈbrelə/", ko:["우산"], pos:"n"},
      {en:"alternate", ipa:"/ˈɔːltərnət/", ko:["대안의", "대체의"], pos:"a"},
      {en:"bitter", ipa:"/ˈbɪtər/", ko:["쓰라린", "쓴"], pos:"a"},
      {en:"foolish", ipa:"/ˈfuːlɪʃ/", ko:["어리석은"], pos:"a"},
      {en:"inevitable", ipa:"/ɪnˈevɪtəbl/", ko:["피할 수 없는"], pos:"a"},
      {en:"innocent", ipa:"/ˈɪnəsnt/", ko:["무죄의", "결백한"], pos:"a"},
      {en:"opportune", ipa:"/ˌɑːpərˈtuːn/", ko:["시의적절한"], pos:"a"},
      {en:"sorry", ipa:"/ˈsɑːri/", ko:["미안한", "유감스러운 (be sorry for)"], pos:"a"},
      {en:"worth", ipa:"/wɜːrθ/", ko:["~할 가치가 있는"], pos:"a"},
      {en:"wrong", ipa:"/rɔːŋ/", ko:["잘못된", "틀린"], pos:"a"}
    ]},
    { id:"명령문·청유문·감탄문·의문문", items:[
      {en:"amaze", ipa:"/əˈmeɪz/", ko:["놀라게 하다"], pos:"v"},
      {en:"behave", ipa:"/bɪˈheɪv/", ko:["행동하다", "예의 바르게 굴다"], pos:"v"},
      {en:"breathe", ipa:"/briːð/", ko:["숨쉬다"], pos:"v"},
      {en:"compare", ipa:"/kəmˈper/", ko:["비교하다"], pos:"v"},
      {en:"guess", ipa:"/ɡes/", ko:["추측하다", "짐작하다"], pos:"v"},
      {en:"imagine", ipa:"/ɪˈmædʒɪn/", ko:["상상하다", "생각하다"], pos:"v"},
      {en:"mind", ipa:"/maɪnd/", ko:["꺼리다", "신경 쓰다", "마음"], pos:"v"},
      {en:"pull", ipa:"/pʊl/", ko:["당기다"], pos:"v"},
      {en:"push", ipa:"/pʊʃ/", ko:["밀다"], pos:"v"},
      {en:"shout", ipa:"/ʃaʊt/", ko:["소리치다"], pos:"v"},
      {en:"suppose", ipa:"/səˈpoʊz/", ko:["생각하다", "가정하다"], pos:"v"},
      {en:"think", ipa:"/θɪŋk/", ko:["생각하다"], pos:"v"},
      {en:"whisper", ipa:"/ˈwɪspər/", ko:["속삭이다"], pos:"v"},
      {en:"caution", ipa:"/ˈkɔːʃn/", ko:["조심", "주의"], pos:"n"},
      {en:"corner", ipa:"/ˈkɔːrnər/", ko:["모퉁이", "구석"], pos:"n"},
      {en:"cost", ipa:"/kɔːst/", ko:["비용", "(비용이) 들다"], pos:"n"},
      {en:"height", ipa:"/haɪt/", ko:["높이", "키"], pos:"n"},
      {en:"method", ipa:"/ˈmeθəd/", ko:["방법"], pos:"n"},
      {en:"purpose", ipa:"/ˈpɜːrpəs/", ko:["목적"], pos:"n"},
      {en:"reason", ipa:"/ˈriːzn/", ko:["이유"], pos:"n"},
      {en:"weight", ipa:"/weɪt/", ko:["무게"], pos:"n"},
      {en:"alert", ipa:"/əˈlɜːrt/", ko:["경계하는", "기민한", "경보"], pos:"a"},
      {en:"awesome", ipa:"/ˈɔːsəm/", ko:["굉장한", "경탄스러운"], pos:"a"},
      {en:"brilliant", ipa:"/ˈbrɪliənt/", ko:["훌륭한", "뛰어난"], pos:"a"},
      {en:"credible", ipa:"/ˈkredəbl/", ko:["믿을 만한"], pos:"a"},
      {en:"direct", ipa:"/dəˈrekt/", ko:["직접적인", "안내하다"], pos:"a"},
      {en:"great", ipa:"/ɡreɪt/", ko:["굉장한", "큰"], pos:"a"},
      {en:"polite", ipa:"/pəˈlaɪt/", ko:["예의 바른"], pos:"a"},
      {en:"silent", ipa:"/ˈsaɪlənt/", ko:["조용한"], pos:"a"},
      {en:"silly", ipa:"/ˈsɪli/", ko:["어리석은"], pos:"a"},
      {en:"terrible", ipa:"/ˈterəbl/", ko:["끔찍한"], pos:"a"},
      {en:"ever", ipa:"/ˈevər/", ko:["한 번이라도 (의문문·부정문에서)"], pos:"ad"},
      {en:"gently", ipa:"/ˈdʒentli/", ko:["부드럽게", "살살"], pos:"ad"}
    ]},
    { id:"명사절", items:[
      {en:"admit", ipa:"/ədˈmɪt/", ko:["인정하다"], pos:"v"},
      {en:"argue", ipa:"/ˈɑːrɡjuː/", ko:["주장하다", "논하다"], pos:"v"},
      {en:"claim", ipa:"/kleɪm/", ko:["주장하다", "주장"], pos:"v"},
      {en:"conclude", ipa:"/kənˈkluːd/", ko:["결론짓다"], pos:"v"},
      {en:"deny", ipa:"/dɪˈnaɪ/", ko:["부인하다"], pos:"v"},
      {en:"describe", ipa:"/dɪˈskraɪb/", ko:["묘사하다", "서술하다"], pos:"v"},
      {en:"doubt", ipa:"/daʊt/", ko:["의심하다", "의심"], pos:"v"},
      {en:"explain", ipa:"/ɪkˈspleɪn/", ko:["설명하다"], pos:"v"},
      {en:"insist", ipa:"/ɪnˈsɪst/", ko:["주장하다", "고집하다 (insist on)"], pos:"v"},
      {en:"matter", ipa:"/ˈmætər/", ko:["중요하다", "문제", "사안"], pos:"v"},
      {en:"mention", ipa:"/ˈmenʃn/", ko:["언급하다"], pos:"v"},
      {en:"note", ipa:"/noʊt/", ko:["주목하다", "언급하다", "메모"], pos:"v"},
      {en:"report", ipa:"/rɪˈpɔːrt/", ko:["보도하다", "보고하다", "보고서"], pos:"v"},
      {en:"state", ipa:"/steɪt/", ko:["진술하다", "밝히다", "상태"], pos:"v"},
      {en:"suggest", ipa:"/səɡˈdʒest/", ko:["제안하다", "시사하다"], pos:"v"},
      {en:"suspect", ipa:"/səˈspekt/", ko:["의심하다"], pos:"v"},
      {en:"wonder", ipa:"/ˈwʌndər/", ko:["궁금해하다"], pos:"v"},
      {en:"detail", ipa:"/ˈdiːteɪl/", ko:["세부 사항"], pos:"n"},
      {en:"fact", ipa:"/fækt/", ko:["사실"], pos:"n"},
      {en:"news", ipa:"/nuːz/", ko:["소식", "뉴스 (단수 취급)"], pos:"n"},
      {en:"path", ipa:"/pæθ/", ko:["길", "경로"], pos:"n"},
      {en:"proof", ipa:"/pruːf/", ko:["증거"], pos:"n"},
      {en:"secret", ipa:"/ˈsiːkrət/", ko:["비밀", "비밀의"], pos:"n"},
      {en:"source", ipa:"/sɔːrs/", ko:["출처", "원천"], pos:"n"},
      {en:"theory", ipa:"/ˈθiːəri/", ko:["이론"], pos:"n"},
      {en:"tool", ipa:"/tuːl/", ko:["도구"], pos:"n"},
      {en:"topic", ipa:"/ˈtɑːpɪk/", ko:["주제"], pos:"n"},
      {en:"curious", ipa:"/ˈkjʊriəs/", ko:["궁금한", "호기심 많은"], pos:"a"},
      {en:"essential", ipa:"/ɪˈsenʃl/", ko:["필수적인", "반드시 필요한"], pos:"a"},
      {en:"important", ipa:"/ɪmˈpɔːrtnt/", ko:["중요한"], pos:"a"},
      {en:"necessary", ipa:"/ˈnesəseri/", ko:["필요한"], pos:"a"},
      {en:"obvious", ipa:"/ˈɑːbviəs/", ko:["명백한"], pos:"a"},
      {en:"real", ipa:"/ˈriːəl/", ko:["진짜의", "실제의"], pos:"a"}
    ]},
  ],
  memory:[
    { id:"3형식(2)", title:"헷갈리는 자·타동사", items:[
      {v:"discuss",    ipa:"/dɪˈskʌs/",     prep:null,   ko:"~에 대해 논의하다"},
      {v:"reach",      ipa:"/riːtʃ/",       prep:null,   ko:"~에 도착하다, ~에 이르다"},
      {v:"enter",      ipa:"/ˈentər/",      prep:null,   ko:"~에 들어가다"},
      {v:"resemble",   ipa:"/rɪˈzembl/",    prep:null,   ko:"~와 닮다"},
      {v:"approach",   ipa:"/əˈproʊtʃ/",    prep:null,   ko:"~에 다가가다"},
      {v:"address",    ipa:"/əˈdres/",      prep:null,   ko:"~에게 연설하다 (~을 다루다)"},
      {v:"answer",     ipa:"/ˈænsər/",      prep:null,   ko:"~에 대답하다"},
      {v:"attend",     ipa:"/əˈtend/",      prep:null,   ko:"~에 참석하다"},
      {v:"await",      ipa:"/əˈweɪt/",      prep:null,   ko:"~을 기다리다 (wait for와 비교)"},
      {v:"consider",   ipa:"/kənˈsɪdər/",   prep:null,   ko:"~에 대해 고려하다"},
      {v:"inhabit",    ipa:"/ɪnˈhæbɪt/",    prep:null,   ko:"~에 살다, ~에 서식하다"},
      {v:"marry",      ipa:"/ˈmæri/",       prep:null,   ko:"~와 결혼하다"},
      {v:"obey",       ipa:"/oʊˈbeɪ/",      prep:null,   ko:"~에 복종하다, ~에 따르다"},
      {v:"account",    ipa:"/əˈkaʊnt/",     prep:"for",  ko:"~을 설명하다, ~의 원인이 되다"},
      {v:"add",        ipa:"/æd/",          prep:"to",   ko:"~을 증가시키다"},
      {v:"hope",       ipa:"/hoʊp/",        prep:"for",  ko:"~을 바라다, ~을 희망하다"},
      {v:"interfere",  ipa:"/ˌɪntərˈfɪr/",  prep:"with", ko:"~을 방해하다"},
      {v:"object",     ipa:"/əbˈdʒekt/",    prep:"to",   ko:"~를 반대하다"},
      {v:"sympathize", ipa:"/ˈsɪmpəθaɪz/",  prep:"with", ko:"~을 동정하다 (~에 공감하다)"},
      {v:"wait",       ipa:"/weɪt/",        prep:"for",  ko:"~을 기다리다 (await와 비교)"}
    ]},
    { id:"4형식(1)", title:"수여동사 전치사 그룹", type:"group", items:[
      {v:"give",     g:"to",  ko:"주다"},
      {v:"hand",     g:"to",  ko:"건네주다"},
      {v:"lend",     g:"to",  ko:"빌려주다"},
      {v:"promise",  g:"to",  ko:"약속하다"},
      {v:"sell",     g:"to",  ko:"팔다"},
      {v:"send",     g:"to",  ko:"보내다"},
      {v:"show",     g:"to",  ko:"보여주다"},
      {v:"teach",    g:"to",  ko:"가르쳐주다"},
      {v:"tell",     g:"to",  ko:"말해주다"},
      {v:"throw",    g:"to",  ko:"던져주다"},
      {v:"write",    g:"to",  ko:"써주다, 편지를 쓰다"},
      {v:"buy",      g:"for", ko:"사주다"},
      {v:"make",     g:"for", ko:"만들어주다"},
      {v:"get",      g:"for", ko:"구해주다"},
      {v:"find",     g:"for", ko:"찾아주다"},
      {v:"cook",     g:"for", ko:"요리해주다"},
      {v:"call",     g:"for", ko:"불러주다"},
      {v:"choose",   g:"for", ko:"골라주다"},
      {v:"do",       g:"for", ko:"해주다"},
      {v:"order",    g:"for", ko:"주문해주다"},
      {v:"prepare",  g:"for", ko:"준비해주다"},
      {v:"spare",    g:"for", ko:"시간을 내주다"},
      {v:"ask",      g:"of",  ko:"묻다, 요청하다"},
      {v:"demand",   g:"of",  ko:"요구하다",           x:"demand A from B"},
      {v:"request",  g:"of",  ko:"요청하다",           x:"request A from B"},
      {v:"require",  g:"of",  ko:"요구하다, 필요로 하다", x:"require A"}
    ]}
  ]
};
