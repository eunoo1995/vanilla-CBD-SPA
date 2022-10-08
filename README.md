# vanilla-CBD-SPA

## CBD SPA Library

바닐라JS를 활용하여 상태를 기반으로 컴포넌트가 변경된 부분만 렌더링되게 하는 라이브러리를 만드는 실습을 진행하였다. 돔과 가상돔을 비교하여 변경되어진 부분만을 반영시키는 diff 알고리즘을 구현하고
클래스 기반의 컴포넌트를 만들어 상태가 변경되면 그 상태를 기반으로 가상돔을 만들어내고 그려져있는
실제 돔과 비교하여 부분만을 리렌더링 하게 동작한다. 초기에는 함수로 구현하였는데 상태를 안전하게
관리할 수 없는 문제가 있는 것 같아 클래스로 바꾸어 루트 컴포넌트에서 상태를 가지고 자식들에게 전달
해주는 방법으로 구현하게 되었다. 구현하며 자바스크립트의 동작 과정에 대한 이해도가 좀 더 높아지고,
리액트와 같은 라이브러리의 필요성과 컴포넌트에 대한 어느정도의 이해를 할 수 있었다!!

### 10/4

걱정했던 것 처럼 9번 미션은 생각보다 더 난관이었다. 어떤 방향으로 진행하는 것이 맞는지부터가 막막했다. 팀원이 잘 이끌어준 덕분에 방향을 잡고 차근차근 진행할 수 있었다. 또한 배려를 많이 해주고 수긍해주어 한결 더 수월하게 진행할 수 있었다. 제일 어려웠던 부분은 재귀를 돌며 가상 돔을 실제 돔에 변경되어진 부분만 반영하게 해주는 diff 알고리즘을 구현하는 것이다. 계속 고민을 하며 알고리즘 함수를 만들어내고 동작시켰을 때 완벽하게 동작하지 않아 여러 시행착오를 겪으며 계속 수정했고, 책에서 공부했던 어트리뷰트와 프로퍼티의 차이를 경험하게 되었다. checked 어트리뷰트 노드는 초기의 값만을 저장하고 있고, 화면에 보여지는 상태를 가지고 있는 것은 프로퍼티라는 부분을 다시 기억할 수 있었다. 그렇게 알고리즘 내부에서 어트리뷰트, 프로퍼티, 요소, 텍스트를 비교하여 바뀌어진 부분에 대해서만 리렌더링을 하는 방법이 구현하고 나서 보니 신기했다. 기능을 어느정도 완성한 후 라이브러리의 관점으로 로직을 분리해내어 재사용이 가능한 파일을 분리해내는 과정에서 강사님의 피드백이 내가 나눈 기준과 많이 상이해서 어떻게 수정해볼지에 대해서 고민해보게 되었고, 클래스를 활용하여 사용자가 라이브러리를 사용할 때 작성할 내용이 최소화될 수 있도록 공통된 부분을 뽑아내는 것에 대해 고민하고 있다. 내일은 오늘 완성한 방법을 남겨두고 강사님이 주신 피드백을 활용하여 클래스 기반 컴포넌트로 구현해보아야겠다!

### 10/5

클래스 컴포넌트 방식으로 주먹구구식 코딩으로 만들면서 놓치고 간 부분들이 상당히 많았다. 발표를 통해서 어떻게 만들었는가에 대한 내용을 다시 한 번 정리할 수 있었고, 시간이 촉박했고 아직 만들어가는 과정이라 미흡한 부분이 많은 것도 사실이지만 결국 생각대로 동작하지 않는 부분에 대해 회피하고 넘어간 부분도 사실 있었던 것 같다. 강사님이 주신 피드백을 바탕으로 남은 시간 리팩토링을 진행해야겠다!

### 10/7

new 키워드가 여러번 불려도 정상적으로 동작할 수 있도록, 사용자가 최대한 편하게 사용할 수 있게 규칙을 최소화 해야한다는 강사님의 피드백을 바탕으로 이벤트 중복 등록은 배열로 관리하고, 루트 컴포넌트가 상태를 가져 Component 부모 클래스를 활용하여 루트 컴포넌트가 자식들에게 props를 넘겨주어 각각의 컴포넌트가 인수로 넘겨받은 프롭의 상태를 기반으로 리렌더링을 발생시킬 수 있도록 바꾸었다.
