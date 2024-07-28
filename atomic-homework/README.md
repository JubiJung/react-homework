# 아토믹 과제 (2024/07/28)
![image](https://github.com/user-attachments/assets/04216929-835c-4403-9af6-adecd3575dac)

바닐라 프로젝트에서 작업한 타잉의 회원가입 페이지 중 약관동의 부분을 작업하였습니다.

---
### 📝작업 내용
<a href="https://www.figma.com/design/EyFl35uNPLA6fKoO6qt0Z5/%EC%95%84%ED%86%A0%EB%AF%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%8B%9C%EC%95%88?node-id=0-1&t=cmXEQOBnrC7cK0Wv-1">피그마 시안</a>

사용한 도구: Vite, Typescript, React, Tailwind CSS

- 이용약관을 리스트로 만들어서 상위 상위 리스트와 내부의 하위 리스트를 나눠서 하위 리스트를 컴포넌트로 만들었다.
- 컴포넌트를 동적으로 렌더링하기 위해 필요한 데이터를 객체로 만들어서 props로 전달하였다.
- 기능 구현을 위해 useState와 useEffect 훅을 사용하여 전체 선택 및 해제 기능을 구현하였다.
--- 
### 📝개선하고 싶은 점
- 시간이 없어서 기능구현을 마저 하지 못했다. 전체 선택과 전체 해제 기능만 작동한다.
- 기존 마크업은 선택 이용약관 중 하위 이용약관을 구현하기 위해 ul 태그를 한 번 더 사용하여 구현했는데, 리액트로 하려니 생각보다 잘 되지 않았다. 리액트에서 마크업을 구현하는 것이 생각보다 까다로웠다.
