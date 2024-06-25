# BankAI
[디지털 하나로 금융 서비스 개발 2기]-1차 프로젝트 우수팀 🏆

![poster](https://github.com/soyeonvv/BankAI-Backend/assets/68561229/8f6ef8c0-43f2-4463-9796-0b0bc14cf5d6)
> 뱅크시는 은행 창구에서 은행원의 안내를 받듯이 쉽고 편리하게 온라인 뱅킹을 이용할 수 있는 서비스입니다.
<br/>

## 목차
[1. 기능 설명](#1-기능-설명)

[2. 프로젝트 개요](#2-프로젝트-개요)

[3. 기술 스택](#3-기술-스택)

[4. ERD](#4-erd)

[5. 서비스 아키텍처](#5-서비스-아키텍처)

[6. 팀원 소개](#6-팀원-소개)
<br/><br/><br/>

## 1. 기능 설명
### ➊ 회원가입 및 로그인
| 회원가입 | 로그인 |
|--------------------------------------------------|--------------------------------------------------|
| ![회원가입](https://github.com/soyeonvv/BankAI-Backend/assets/68561229/4d960702-d35a-4005-b69f-4f902207f5bc) | ![로그인](https://github.com/soyeonvv/BankAI-Backend/assets/68561229/e32ba2cc-7035-4988-9fa1-c138b14619de) |
| ✔️ 휴대폰 인증 및 이메일 인증을 통해 본인확인을 진행합니다. | ✔️ 이메일을 통해 아이디 찾기와 임시 비밀번호 발급이 가능합니다. |
<br/>

### ➋ 상품 가입 및 계좌 개설
| 상품 페이지 | 입출금 상품 가입 |
|--------------------------------------------------|--------------------------------------------------|
| ![상품](https://github.com/soyeonvv/BankAI-Backend/assets/68561229/d56fa8e2-31d6-4bba-9adb-7162323a494e) | ![입출금](https://github.com/soyeonvv/BankAI-Backend/assets/68561229/c6e19659-675e-46b9-8f0a-75dba0701e94) |
| ✔️ 가입자 순으로 인기있는 상품 3개를 확인할 수 있습니다.<br/>✔️ 검색을 통해 원하는 상품을 찾을 수 있습니다.  | ✔️ 계좌 비밀번호 설정 시 보안 키패드가 작동합니다.<br/>✔️ 입출금 계좌를 생성하면 주거래 계좌로 등록할 수 있습니다. |

| 적금 상품 가입 | 대출 상품 가입
|--------------------------------------------------|--------------------------------------------------|
| ![적금](https://github.com/soyeonvv/BankAI-Backend/assets/68561229/0ab4cfdf-17b7-4aee-a7ba-9feb5188f5bd) | ![대출](https://github.com/soyeonvv/BankAI-Backend/assets/68561229/d5ff5c53-10f9-4c2f-91c8-d0c811cdabe0) |
| ✔️ 만기 금액을 확인한 뒤 자동이체 설정을 하면 적금 상품에 가입할 수 있습니다. | ✔️ 개인정보 입력을 통해 대출 신용도를 확인합니다.<br/>✔️ 예상 한도와 예상 금리를 확인한 뒤 자동납부일을 선택하여 대출 상품에 가입할 수 있습니다.  |
<br/>

### ➌ 계좌이체
| ![계좌이체](https://github.com/soyeonvv/BankAI-Backend/assets/68561229/ccc9686e-8c94-461d-9263-445b8f7a6f42) |
|--------------------------------------------------|
| ✔️ 계좌를 검색하고 출금 계좌의 잔액과 한도 내에서 송금을 진행할 수 있습니다. |
<br/>

### ➍ 거래내역 조회
<img width="810" alt="거래내역" src="https://github.com/soyeonvv/BankAI-Backend/assets/68561229/35fb3c5b-5fde-423e-bf2d-87b3a60da2e6">

### ➎ AI 음성인식
| 예금 상품 가입 |
|--------------------------------------------------|
| ![예금](https://github.com/soyeonvv/BankAI-Backend/assets/68561229/69d135ae-a611-4b03-8edf-f0a620d7bbd1) |
| ✔️ 예금 상품 가입 시 상품 선택, 저축 금액 설정, 출금 계좌 지정, 계좌 비밀번호 입력 등<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 모든 과정을 음성으로 간편하게 처리할 수 있습니다. |
| ✅ 뱅키에게 궁금한 환율 정보도 물어볼 수 있어요. |
<br/>

### ➏ 관리자 페이지
| ![관리자페이지](https://github.com/soyeonvv/BankAI-Backend/assets/68561229/3958d200-0406-4330-a098-a697c2e2ccf4) |
|--------------------------------------------------|
| ✔️ 관리자 계정만 접근 가능<br/>✔️ 상품별 가입자 수 비율 통계, 상품 종류별 가입자 연령대 통계, 올해 월별 신규 계좌 개설 건수 통계를 확인할 수 있다. |
<br/>

### [🖥️ 시연 동영상](https://www.youtube.com/watch?v=U5CJ422ja6s)
<br/>

## 2. 프로젝트 개요
| 항목 | 내용 |
| --- | --- |
| 프로젝트 소개 | AI를 활용한 음성인식 기반 뱅킹 서비스, 뱅크AI |
| 개발 인원 | 총 6명 (FE 3명 + BE 3명) |
| 개발 기간 | 총 30일 (2024. 05. 13 ~ 2024 06. 11) |
<br/>

## 3. 기술 스택
| 기술               | 사용 |
|------------------| --- |
| Frontend         | <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat&logo=React Query&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=white"/> <img src="https://img.shields.io/badge/MUI-007FFF?style=flat&logo=MUI&logoColor=white"/> <img src="https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=Storybook&logoColor=white"/> <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white"/> |
| Backend        | <img src="https://img.shields.io/badge/java-007396?style=flat&logo=java&logoColor=white"/> <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=Spring Boot&logoColor=white"> <img src="https://img.shields.io/badge/Spring Security-6DB33F?style=flat&logo=Spring Security&logoColor=white"> <img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=Swagger&logoColor=black"> |
| AI        | <img alt="Python" src ="https://img.shields.io/badge/Python-3776AB.svg?&style=flat&logo=Python&logoColor=white"/> <img src="https://img.shields.io/badge/Flask-000000?style=flat&logo=Flask&logoColor=white"> <img src="https://img.shields.io/badge/Hugging Face-FFD21E?style=flat&logo=Hugging Face&logoColor=black"> |
| Database         | <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"> <img src="https://img.shields.io/badge/Redis-DC382D?style=flat&logo=Redis&logoColor=white"> |
| Deploy           | <img src="https://img.shields.io/badge/amazonec2-FF9900?style=flat&logo=amazonec2&s&logoColor=white"> <img src="https://img.shields.io/badge/amazonrds-527FFF?style=flat&logo=amazonrds&s&logoColor=white"> <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=flat&logo=GitHub Actions&s&logoColor=white"> |
| API              | <img src="https://img.shields.io/badge/Microsoft Azure-0078D4?style=flat&logo=Microsoft Azure&logoColor=white"> <img src="https://img.shields.io/badge/Naver Cloud-03C75A?style=flat&logo=Naver Cloud&logoColor=black"/> |
| Cooperative Tool | <img src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=flat&logo=git&logoColor=white"> |
| IDE              | <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/intellijidea-000000?style=flat&logo=intellijidea&logoColor=white"> |
<br/>

## 4. ERD
<img src="https://github.com/soyeonvv/BankAI-Backend/assets/68561229/bbb4b189-3d0a-4f1e-85e0-04314deeff44" width="75%"/>
<br/><br/>

## 5. 서비스 아키텍처
<img src="https://github.com/soyeonvv/BankAI-Backend/assets/68561229/4d057c4d-d8f8-4c4e-aaa0-ec8f2bee7748" width="75%"/>
<br/><br/>

## 6. 팀원 소개
<table>
    <tr align="center">
        <td colspan="3"><B>프론트엔드</B></td>
        <td colspan="3"><B>백엔드</B></td>
    </tr>
    <tr align="center">
        <td><B>남우현</B></td>
        <td><B>양채연</B></td>
        <td><B>임태규</B>$\oldstyle{\tiny{(팀장)}}$</td>
        <td><B>박소연</B></td>
        <td><B>임은상</B></td>
        <td><B>한원희</B></td>
    </tr>
    <tr align="center">
        <td>
            <img src="https://github.com/hikiman9.png?size=100" width="100">
            <br>
            <a href="https://github.com/hikiman9"><I>hikiman</I></a>
        </td>
        <td>
            <img src="https://github.com/chaeyeon-yang.png?size=100" width="100">
            <br>
            <a href="https://github.com/chaeyeon-yang"><I>chaeyeon-yang</I></a>
        </td>
        <td>
            <img src="https://github.com/bigstar9906.png?size=100" width="100">
            <br>
            <a href="https://github.com/bigstar9906"><I>bigstar9906</I></a>
        </td>
        <td>
            <img src="https://github.com/soyeonvv.png?size=100" width="100">
            <br>
            <a href="https://github.com/soyeonvv"><I>soyeonvv</I></a>
        </td>
        <td>
            <img src="https://github.com/LimEunSang.png?size=100" width="100">
            <br>
            <a href="https://github.com/LimEunSang"><I>LimEunSang</I></a>
        </td>
        <td>
            <img src="https://github.com/Wonhee0221.png?size=100" width="100">
            <br>
            <a href="https://github.com/Wonhee0221"><I>Wonhee0221</I></a>
        </td>
    </tr>
</table>

