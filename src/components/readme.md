<span>, <button> 같은 기본 html element를 atom 이라고 생각할 때,
molecules에 해당하는 구성을 담음.
atom을 모아 사용하기 쉽게 구조화했거나, 기분 html 태그를 래핑한
리액트 컴포넌트들의 모음.
재사용이 가능하게 최대한 시스템과 독립적으로 행동할 수 있도록,
액션이나 스토어와 관련없이 독립적으로 동작해야 함!
(컴포넌트의 propTypes에 onChange 또는 onClick 함수를 대부분 포함시키는 것을 고려)
예시: Button/
Calendar/
ImageEditable/
Input/
Progress/
Select/
TimeSelector/
Toggle/
Video/