## Git 저장소 이용 방법

#### 원격저장소 로컬에 가져오기

<code> git clone https://github.com/forhrever/Dream-Hope-Study.git </code>

#### 로컬에서 branch 생성하기

각자 깃허브 이름으로 branch 생성
<code> git branch 깃허브이름 </code>

#### 로컬에서 작업 후 개인 branch Push

1. <code> git checkout 깃허브이름 </code>
2. <code> git add 파일/디렉토리 경로 </code>
3. <code> git commit -m "message" </code>
4. <code> git push origin 깃허브이름" </code>

#### Merge된 후, Repository 최신으로 동기화하기

1. <code> git remote add upstream 원본저장소URL </code>`
2. <code> git remote -v </code>
3. <code> git fetch upstream </code>
4. <code> git checkout main </code>
5. <code> git merge upstream/main </code>
6. <code> git push origin main </code>

#### 예시

> 레파지토리 clone 부터 시작 예시 따라만 해주세요~

1. git clone https://github.com/forhrever/Dream-Hope-Study.git
2. 브랜치를 생성한다 => git branch forhrever
3. git checkout forhrever
4. 본인의 폴더 아래에 문제이름 js 파일을 만들어서 풀어서 저장한다.
5. git status 를 확인한다
   ![](https://velog.velcdn.com/images/app235naver/post/fb40ee2f-751f-4c1b-93e3-2b7284f87d25/image.png)
6. git 변경 사항을 확인후 git add 한다.
   ` git add forhrever/test.js`
7. git commit -m '남길 로그' `git commit -m '남길 메세지'`
8. git push origin 본인 branch 이름 `git push orign forhrever`
9. https://github.com/forhrever/Dream-Hope-Study 접근

10. 레파지토리 Pull requests 탭 클릭
    ![](https://velog.velcdn.com/images/app235naver/post/5e4349d9-31c5-4a3e-b9da-7e6e62b7f1f7/image.png)

11. `New Pull Request` 버튼 클릭
    ![](https://velog.velcdn.com/images/app235naver/post/d55242e6-e39f-4365-9fb2-ee5333da535e/image.png)

12. compare 버튼 눌러서 `push`한 본인 브랜치 클릭

![](https://velog.velcdn.com/images/app235naver/post/51d126c2-444d-4acb-9c45-2d04a4210330/image.png)

13. `Create Pull Request` 버튼 클릭

![](https://velog.velcdn.com/images/app235naver/post/c24fb24c-2ff9-4825-8c05-ade16feab5bd/image.png)

14. 내용 작성 후 다시 한번더 `Create Pull Request` 클릭

![](https://velog.velcdn.com/images/app235naver/post/091febf0-3ea2-4c51-ac23-a435219b0f66/image.png)

15. 충돌이 없다면 `Merge Pull request` 버튼 클릭 후 `confirm merge` 클릭

![](https://velog.velcdn.com/images/app235naver/post/fc67d456-1b46-41d7-ab51-0232e01a897b/image.png)
