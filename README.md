## Git 저장소 이용 방법

#### 원격저장소 로컬에 가져오기

<code> git clone https://github.com/sineTlsl/FE-Algorithm-Study.git </code>

#### 로컬에서 branch 생성하기

각자 깃허브 이름으로 branch 생성
<code> git branch 깃허브이름 </code>

#### 로컬에서 작업 후 개인 branch Push

1. <code> git checkout 깃허브이름 </code>
2. <code> git add 파일/디렉토리 경로 </code>
3. <code> git commit -m "message" </code>
4. <code> git push origin 깃허브이름" </code>

#### Merge된 후, Repository 최신으로 동기화하기

1. <code> git remote add upstream 원본저장소URL </code>
2. <code> git remote -v </code>
3. <code> git fetch upstream </code>
4. <code> git checkout main </code>
5. <code> git merge upstream/main </code>
6. <code> git push origin main </code>
