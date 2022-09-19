var MENU = {
    "list": [
        {
            "navId": "00",
            "menuId": 40000,
            "vs-class": "vs-7",
            "menuNm": "메인",
            "level": 0,
            "sort": 0,
            "children": [
                {"navId": "00_00", "menuId": 40100, "menuNm": "로그인", "parentId": 40000, "level": 1, "sort": 0, "children": []},
                {"navId": "00_01", "menuId": 40200, "menuNm": "회원가입", "parentId": 40000, "level": 1, "sort": 1, "children": []},
                {"navId": "00_02", "menuId": 40300, "menuNm": "아이디 찾기", "parentId": 40000, "level": 1, "sort": 2, "children": []},
                {"navId": "00_03", "menuId": 40400, "menuNm": "비밀번호 찾기", "parentId": 40000, "level": 1, "sort": 3, "children": []},
                {"navId": "00_04", "menuId": 40500, "menuNm": "사이트맵", "parentId": 40000, "level": 1, "sort": 4, "children": []},
                {"navId": "00_05", "menuId": 40600, "menuNm": "통합검색", "parentId": 40000, "level": 1, "sort": 5, "children": []}
                //회원탈퇴, 퀵링크
            ]
        },

        {
            "navId": "01",
            "menuId": 24000,
            "vs-class": "vs-1",
            "menuNm": "주거복지 서비스",
            "level": 0,
            "sort": 1,
            "children": [
                {"navId": "01_00", "menuId": 24001, "menuNm": "주거복지 소개", "parentId": 24000, "level": 1, "sort": 0, "children": []},
                {"navId": "01_01", "menuId": 24100, "menuNm": "공공임대주택 지원", "parentId": 24000, "level": 1, "sort": 1, "children": [
                        {"navId": "01_01_00", "menuId": 24101, "menuNm": "공공임대주택 지원 서비스", "parentId": 24100, "level": 2, "sort": 0, "children": []},
                        {"navId": "01_01_01", "menuId": 24102, "menuNm": "공공임대주택 공통 입주자격", "parentId": 24100, "level": 2, "sort": 1, "children": []},
                        {"navId": "01_01_02", "menuId": 24103, "menuNm": "영구임대주택", "parentId": 24100, "level": 2, "sort": 2, "children": []},
                        {"navId": "01_01_03", "menuId": 24104, "menuNm": "국민임대주택", "parentId": 24100, "level": 2, "sort": 3, "children": []},
                        {"navId": "01_01_04", "menuId": 24105, "menuNm": "경기도 행복주택", "parentId": 24100, "level": 2, "sort": 4, "children": []},
                        /*{"navId": "01_01_05", "menuId": 24106, "menuNm": "장기전세주택(재건축매입임대)", "parentId": 24100, "level": 2, "sort": 5, "children": []},
                        {"navId": "01_01_06", "menuId": 24107, "menuNm": "분양전환공공임대주택(10년공공임대)", "parentId": 24100, "level": 2, "sort": 6, "children": []},*/
                        {"navId": "01_01_05", "menuId": 24108, "menuNm": "기존주택 매입임대주택", "parentId": 24100, "level": 2, "sort": 5, "children": []},
                        {"navId": "01_01_06", "menuId": 24109, "menuNm": "기존주택 전세임대주택", "parentId": 24100, "level": 2, "sort": 6, "children": []}
                    ]
                },
                {"navId": "01_02", "menuId": 24200, "menuNm": "주거비 및 금융지원", "parentId": 24000, "level": 1, "sort": 1, "children": [
	        			{"navId": "01_02_00", "menuId": 24201, "menuNm": "주거비 및 금융지원 서비스", "parentId": 24200, "level": 2, "sort": 0, "children": []},

	            		{"navId": "01_02_01", "menuId": 24210, "menuNm": "경기도 매입임대주택 임대보증금 지원", "parentId": 24200, "level": 2, "sort": 1, "children": []},
	                    {"navId": "01_02_02", "menuId": 24211, "menuNm": "경기도 행복주택 보증금 이자지원", "parentId": 24200, "level": 2, "sort": 2, "children": []},
	                    {"navId": "01_02_03", "menuId": 24212, "menuNm": "경기도 전세보증금 지원", "parentId": 24200, "level": 2, "sort": 3, "children": []},
	                    {"navId": "01_02_04", "menuId": 24213, "menuNm": "경기도 저소득층 전세금대출보증 및 이자지원", "parentId": 24200, "level": 12, "sort": 4, "children": []},
                        {"navId": "01_02_05", "menuId": 24202, "menuNm": "주거급여", "parentId": 24200, "level": 2, "sort": 5, "children": []},
	                    {"navId": "01_02_06", "menuId": 24206, "menuNm": "버팀목 전세자금대출", "parentId": 24200, "level": 2, "sort": 6, "children": []},
                        {"navId": "01_02_07", "menuId": 24203, "menuNm": "주거안정 월세대출", "parentId": 24200, "level": 2, "sort": 7, "children": []},
	                    {"navId": "01_02_08", "menuId": 24208, "menuNm": "내집마련 디딤돌대출", "parentId": 24200, "level": 2, "sort": 8, "children": []},
	                     /*{"navId": "01_02_09", "menuId": 24209, "menuNm": "주거안정 주택구입자금대출", "parentId": 24200, "level": 2, "sort": 9, "children": []},*/
                        //추가정책
                        {"navId": "01_02_09", "menuId": 24216, "menuNm": "노후고시원거주자 주거이전대출", "parentId": 24200, "level": 2, "sort": 9, "children": []},
                        {"navId": "01_02_10", "menuId": 24217, "menuNm": "보금자리론", "parentId": 24200, "level": 2, "sort": 10, "children": []},
                        {"navId": "01_02_11", "menuId": 24218, "menuNm": "더 나은 보금자리론", "parentId": 24200, "level": 2, "sort": 11, "children": []}
                    ]
                },
                {"navId": "01_03", "menuId": 24300, "menuNm": "주택개량 지원", "parentId": 24000, "level": 1, "sort": 2, "children": [
                        {"navId": "01_03_00", "menuId": 24301, "menuNm": "주택개량 지원 서비스", "parentId": 24300, "level": 2, "sort": 0, "children": []},
                        {"navId": "01_03_01", "menuId": 24302, "menuNm": "햇살하우징", "parentId": 24300, "level": 2, "sort": 1, "children": []},
                        {"navId": "01_03_02", "menuId": 24303, "menuNm": "G 하우징", "parentId": 24300, "level": 2, "sort": 2, "children": []},
                        {"navId": "01_03_03", "menuId": 24304, "menuNm": "중증장애인 주택개조", "parentId": 24300, "level": 2, "sort": 3, "children": []},
                        {"navId": "01_03_04", "menuId": 24305, "menuNm": "농어촌 장애인 주택개조사업", "parentId": 24400, "level": 2, "sort": 4, "children": []},
                        {"navId": "01_03_05", "menuId": 24421, "menuNm": "저소득층 에너지효율개선사업", "parentId": 24400, "level": 2, "sort": 5, "children": []}
                    ]
                },
                {"navId": "01_04", "menuId": 24400, "menuNm": "기타 복지서비스", "parentId": 24000, "level": 1, "sort": 3, "children": [
                        {"navId": "01_04_00", "menuId": 24401, "menuNm": "기타 복지서비스", "parentId": 24400, "level": 2, "sort": 0, "children": []},
                        {"navId": "01_04_01", "menuId": 24404, "menuNm": "경기도형 긴급복지지원(무한돌봄사업)", "parentId": 24400, "level": 2, "sort": 1, "children": []},
/*
                            {"navId": "01_04_02", "menuId": 24415, "menuNm": " - 생계지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 1, "children": []},
                            {"navId": "01_04_03", "menuId": 24416, "menuNm": " - 의료지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 1, "children": []},
                            {"navId": "01_04_04", "menuId": 24417, "menuNm": " - 주거지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 1, "children": []},
                            {"navId": "01_04_05", "menuId": 24418, "menuNm": " - 교육지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 1, "children": []},
                            {"navId": "01_04_06", "menuId": 24419, "menuNm": " - 사례관리지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 1, "children": []},
                            {"navId": "01_04_07", "menuId": 24420, "menuNm": " - 시장군수 추가지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 1, "children": []},
*/

                        {"navId": "01_04_02", "menuId": 24402, "menuNm": "국민기초생활보장제도", "parentId": 24400, "level": 2, "sort": 2, "children": []},
                        {"navId": "01_04_03", "menuId": 24403, "menuNm": "긴급복지지원", "parentId": 24400, "level": 2, "sort": 3, "children": []},
/*
                            {"navId": "01_04_10", "menuId": 24406, "menuNm": " - 생계지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 3, "children": []},
                            {"navId": "01_04_11", "menuId": 24407, "menuNm": " - 의료지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 3, "children": []},
                            {"navId": "01_04_12", "menuId": 24408, "menuNm": " - 주거지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 3, "children": []},
                            {"navId": "01_04_13", "menuId": 24409, "menuNm": " - 사회복지시설 이용지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 3, "children": []},
                            {"navId": "01_04_14", "menuId": 24410, "menuNm": " - 교육지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 3, "children": []},
                            {"navId": "01_04_15", "menuId": 24411, "menuNm": " - 연료비지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 3, "children": []},
                            {"navId": "01_04_16", "menuId": 24412, "menuNm": " - 해산비지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 3, "children": []},
                            {"navId": "01_04_17", "menuId": 24413, "menuNm": " - 장제비지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 3, "children": []},
                            {"navId": "01_04_18", "menuId": 24414, "menuNm": " - 전기요금지원", "parentId": 24400, "level": 2, "depth4": true, "sort": 3, "children": []},
*/

                        //추가정책
                        {"navId": "01_04_04", "menuId": 24422, "menuNm": "주거사다리 지원", "parentId": 24400, "level": 2, "sort": 4, "children": []},
                        {"navId": "01_04_05", "menuId": 24405, "menuNm": "시/군 자체 주거복지사업", "parentId": 24400, "level": 2, "sort": 5, "children": []}
                    ]
                }
            ]
        },
        {
            "navId": "02", "menuId": 25000, "vs-class": "vs-2", "menuNm": "내게 딱 맞는 주거", "level": 0, "sort": 2, "children": [
                {"navId": "02_00", "menuId": 25100, "menuNm": "맞춤형 주거검색", "parentId": 25000, "level": 1, "sort": 0, "children": []}
            ]
        },
        {
            "navId": "03",
            "menuId": 26000,
            "vs-class": "vs-2",
            // "menuNm": "공공사업현황",
            "menuNm": "임대주택 찾기",
            "level": 0,
            "sort": 2,
            "children": [
                /*{"navId": "03_00", "menuId": 26100, "menuNm": "임대주택 찾기", "parentId": 26000, "level": 1, "sort": 0, "children": [
                        {"navId": "03_00_00", "menuId": 26101, "menuNm": "입주자 모집공고", "parentId": 26100, "level": 2, "sort": 0, "children": []},
                        {"navId": "03_00_01", "menuId": 26102, "menuNm": "연간공급계획", "parentId": 26100, "level": 2, "sort": 1, "children": []},
                        {"navId": "03_00_02", "menuId": 26103, "menuNm": "기존 임대주택 찾기", "parentId": 26100, "level": 2, "sort": 2, "children": []},
                        {"navId": "03_00_03", "menuId": 26104, "menuNm": "예비 입주자 대기현황", "parentId": 26100, "level": 2, "sort": 3, "children": []}
                    ]
                },*/
                {"navId": "03_00", "menuId": 26100, "menuNm": "공공임대주택 찾기", "parentId": 26000, "level": 1, "sort": 0, "children": []}
                /*
                {"navId": "03_01", "menuId": 26200, "menuNm": "공공분양주택 찾기", "parentId": 26000, "level": 1, "sort": 1, "children": [
                        {"navId": "03_01_00", "menuId": 26201, "menuNm": "입주자 모집공고", "parentId": 26200, "level": 2, "sort": 0, "children": []},
                        {"navId": "03_01_01", "menuId": 26202, "menuNm": "연간공급계획", "parentId": 26200, "level": 2, "sort": 1, "children": []}
                    ]
                }
                */
            ]
        },

        {
            "navId": "04",
            "vs-class": "vs-4",
            "menuId": 27000,
            "menuNm": "상담과 알림",
            "level": 0,
            "sort": 3,
            "children": [
                {"navId": "04_00", "menuId": 27100, "menuNm": "주거복지센터 안내", "parentId": 27000, "level": 1, "sort": 0, "children": []},
                {"navId": "04_01", "menuId": 27200, "menuNm": "주거복지 소식 알림서비스 소개", "parentId": 27000, "level": 1, "sort": 1, "children": []},
                {"navId": "04_02", "menuId": 27300, "menuNm": "상담센터 안내", "parentId": 27000, "level": 1, "sort": 2, "children": [
                        {"navId": "04_02_00", "menuId": 27301, "menuNm": "센터소개", "parentId": 27300, "level": 2, "sort": 0, "children": []},
                        {"navId": "04_02_01", "menuId": 27302, "menuNm": "센터에서 알려드려요", "parentId": 27300, "level": 2, "sort": 1, "children": []},
                    ]
                },
                {"navId": "04_03", "menuId": 27400, "menuNm": "관련기관 찾기", "parentId": 27000, "level": 1, "sort": 3, "children": []}
            ]
        },
        {
            "navId": "05",
            "vs-class": "vs-5",
            "menuId": 28000,
            "menuNm": "정보나눔",
            "level": 0,
            "sort": 4,
            "children": [
                {"navId": "05_00", "menuId": 28100, "menuNm": "공지사항", "parentId": 28000, "level": 1, "sort": 0, "children": [
                        /*
                        {"navId": "05_00_00", "menuId": 28101, "menuNm": "주택지원", "parentId": 28100, "level": 2, "sort": 0, "children": []},
                        {"navId": "05_00_01", "menuId": 28102, "menuNm": "주거비 및 금융지원", "parentId": 28100, "level": 2, "sort": 1, "children": []},
                        {"navId": "05_00_02", "menuId": 28103, "menuNm": "집수리 지원", "parentId": 28100, "level": 2, "sort": 2, "children": []},
                        {"navId": "05_00_03", "menuId": 28104, "menuNm": "기타 복지사업", "parentId": 28100, "level": 2, "sort": 3, "children": []}
                        */
                    ]
                },
                //{"navId": "05_00", "menuId": 28300, "menuNm": "공지사항", "parentId": 28000, "level": 1, "sort": 0, "children": []},
                {"navId": "05_01", "menuId": 28200, "menuNm": "주거복지 자료실", "parentId": 28000, "level": 1, "sort": 1, "children": [
                        {"navId": "05_01_00", "menuId": 28201, "menuNm": "정보자료실", "parentId": 28200, "level": 2, "sort": 0, "children": []},
                        {"navId": "05_01_01", "menuId": 28202, "menuNm": "주거복지 TIP", "parentId": 28200, "level": 2, "sort": 1, "children": []},
                    ]
                },
                {"navId": "05_02", "menuId": 28300, "menuNm": "우리동네 이야기", "parentId": 28000, "level": 1, "sort": 2, "children": []},
                {"navId": "05_03", "menuId": 28400, "menuNm": "우리속의 주거복지", "parentId": 28000, "level": 1, "sort": 3, "children": [
                        {"navId": "05_03_00", "menuId": 28401, "menuNm": "만화로 보는 주거복지", "parentId": 28400, "level": 2, "sort": 0, "children": []},
                        {"navId": "05_03_01", "menuId": 28402, "menuNm": "미디어 및 보도자료", "parentId": 28400, "level": 2, "sort": 1, "children": []},
                    ]
                },
                {"navId": "05_04", "menuId": 28500, "menuNm": "함께만드는 주거복지", "parentId": 28000, "level": 1, "sort": 4, "children": []},
                {"navId": "05_05", "menuId": 28600, "menuNm": "묻고 답하기", "parentId": 28000, "level": 1, "sort": 5, "children": []},
                {"navId": "05_06", "menuId": 28700, "menuNm": "FAQ", "parentId": 28000, "level": 1, "sort": 6, "children": []}
            ]
        },
        {
            "navId": "06",
            "vs-class": "vs-8",
            "menuId": 29000,
            "menuNm": "마이페이지",
            "level": 0,
            "sort": 5,
            "children": [
                {"navId": "06_00", "menuId": 29100, "menuNm": "관심정보", "parentId": 29000, "level": 1, "sort": 0, "children": []},
                {"navId": "06_01", "menuId": 29200, "menuNm": "내 알림정보", "parentId": 29000, "level": 1, "sort": 1, "children": []},
                {"navId": "06_02", "menuId": 29300, "menuNm": "묻고 답하기", "parentId": 29000, "level": 1, "sort": 2, "children": []},
                {"navId": "06_03", "menuId": 29400, "menuNm": "상담신청 내역", "parentId": 29000, "level": 1, "sort": 3, "children": []},
                {"navId": "06_04", "menuId": 29500, "menuNm": "회원정보 수정", "parentId": 29000, "level": 1, "sort": 4, "children": []},
                {"navId": "06_05", "menuId": 29600, "menuNm": "회원탈퇴", "parentId": 29000, "level": 1, "sort": 5, "children": []}
            ]
        },
        {
            "navId": "07",
            "menuId": 30000,
            "vs-class": "vs-9",
            "menuNm": "서비스 이용안내",
            "level": 0,
            "sort": 6,
            "children": [
                {"navId": "07_00", "menuId": 30100, "menuNm": "개인정보처리방침", "parentId": 30000, "level": 1, "sort": 0, "children": []},
                {"navId": "07_01", "menuId": 30200, "menuNm": "홈페이지 이용약관", "parentId": 30000, "level": 1, "sort": 1, "children": []},
                {"navId": "07_02", "menuId": 30300, "menuNm": "이메일 무단수집 거부", "parentId": 30000, "level": 1, "sort": 2, "children": []},
                // {"navId": "07_03", "menuId": 30400, "menuNm": "찾아오시는 길", "parentId": 30000, "level": 1, "sort": 3, "children": []},
                {"navId": "07_03", "menuId": 30500, "menuNm": "사이트맵", "parentId": 30000, "level": 1, "sort": 3, "children": []},
                {"navId": "07_04", "menuId": 30600, "menuNm": "센터소개", "parentId": 30000, "level": 1, "sort": 4, "children": []}
                //, {"navId": "07_04", "menuId":30500,"menuNm":"에러","parentId":30000,"level":1,"sort":8,"children":[]}
            ]
        },

        {"navId": "08", "menuId": 31000, "vs-class": "vs-6", "menuNm": "통합검색", "level": 0, "sort": 7, "children": []},
        
        
        
        
     // taein
        {
            "navId": "09",
            "menuId": 51000,
            "vs-class": "vs-1",
            "menuNm": "청년 주거복지",
            "level": 0,
            "sort": 7,
            "children": [
                {"navId": "09_00", "menuId": 51100, "menuNm": "청년 매입임대", "parentId": 51000, "level": 1, "sort": 0, "children": []},
                {"navId": "09_01", "menuId": 51200, "menuNm": "경기행복주택(청년 등)", "parentId": 51000, "level": 1, "sort": 1, "children": []},
                {"navId": "09_02", "menuId": 51300, "menuNm": "경기행복주택 임대보증금 이자지원", "parentId": 51000, "level": 1, "sort": 1, "children": []},
                {"navId": "09_03", "menuId": 51400, "menuNm": "청년 기존주택 전세임대", "parentId": 51000, "level": 1, "sort": 2, "children": []},
                {"navId": "09_04", "menuId": 51500, "menuNm": "주거비 및 금융지원", "parentId": 51000, "level": 1, "sort": 3, "children": [
                	{"navId": "09_04_00", "menuId": 24204, "menuNm": "청년전용 버팀목 전세자금대출", "parentId": 51500, "level": 2, "sort": 1, "children": []},
                	{"navId": "09_04_01", "menuId": 24214, "menuNm": "청년전용 보증부 월세대출", "parentId": 51500, "level": 2, "sort": 2, "children": []},
                	{"navId": "09_04_02", "menuId": 24215, "menuNm": "중소기업 취업청년 전월세보증금 대출", "parentId": 51500, "level": 2, "sort": 3, "children": []},
                	{"navId": "09_04_03", "menuId": 51501, "menuNm": "신혼희망타운전용 주택 담보 장기대출", "parentId": 51500, "level": 2, "sort": 4, "children": []},
                	{"navId": "09_04_04", "menuId": 24207, "menuNm": "신혼부부전용 주택구입자금대출", "parentId": 51500, "level": 2, "sort": 5, "children": []},
                	{"navId": "09_04_05", "menuId": 24205, "menuNm": "신혼부부전용 전세자금대출", "parentId": 51500, "level": 2, "sort": 6, "children": []},
                	{"navId": "09_04_06", "menuId": 24221, "menuNm": "청년월세 한시 특별지원", "parentId": 51500, "level": 2, "sort": 7, "children": []},
                    ]
                }
            ]
        },

    ]
};


var URL = {
    "contentList": [
        {"menuId": 40000, "url": "/"},       // "menuNm": "메인",
        {"menuId": 40100, "url": "/main/login.do"},             //"menuNm": "로그인"
        {"menuId": 40200, "url": "/main/member_age.do"},      //"menuNm": "회원가입"
        {"menuId": 40300, "url": "/main/find_id_cert.do"},      //"menuNm": "아이디 찾기"
        {"menuId": 40400, "url": "/main/find_pw_cert.do"},      //"menuNm": "비밀번호 찾기"
        {"menuId": 40500, "url": "/html/30000.do"},             //"menuNm": "사이트맵"
        {"menuId": 40600, "url": "/jsp/search.do"},             //"menuNm": "통합검색"


        // {"menuId": 24000, "url": ""},       // "menuNm": "주거복지안내",
        {"menuId": 24001, "url": "/html/24001.do"},       //"menuNm": "주거복지 소개"
        // {"menuId": 24100, "url": ""},       //"menuNm": "공공임대주택 지원"
        {"menuId": 24101, "url": "/html/24101.do"},       //"menuNm": "공공임대주택 지원 서비스란?"
        {"menuId": 24102, "url": "/html/24102.do"},       //"menuNm": "공공임대주택"
        {"menuId": 24103, "url": "/html/24103.do"},       //"menuNm": "영구임대주택"
        {"menuId": 24104, "url": "/html/24104.do"},       //"menuNm": "국민임대주택"
        {"menuId": 24105, "url": "/html/24105.do"},       //"menuNm": "경기도형 행복주택"
        //{"menuId": 24106, "url": "/html/24106.do"},       //"menuNm": "장기전세주택(재건축매입임대)"
        //{"menuId": 24107, "url": "/html/24107.do"},       //"menuNm": "분양전환공공임대주택(10년공공임대)"
        {"menuId": 24108, "url": "/html/24108.do"},       //"menuNm": "기존주택 매입임대주택"
        {"menuId": 24109, "url": "/html/24109.do"},       //"menuNm": "기존주택 전세임대주택"
        // {"menuId": 24200, "url": ""},       //"menuNm": "주거비 및 금융지원"
        {"menuId": 24201, "url": "/html/24201.do"},       //"menuNm": "주거비 및 금융지원 서비스란?"
        {"menuId": 24202, "url": "/html/24202.do"},       //"menuNm": "주거급여"
        {"menuId": 24203, "url": "/html/24203.do"},       //"menuNm": "주거안정월세대출"
        {"menuId": 24204, "url": "/html/24204.do"},       //"menuNm": "청년전용 버팀목 전세자금대출"
        {"menuId": 24205, "url": "/html/24205.do"},       //"menuNm": "신혼부부전용 전세자금대출"
        {"menuId": 24206, "url": "/html/24206.do"},       //"menuNm": "버팀목 전세자금대출"
        {"menuId": 24207, "url": "/html/24207.do"},       //"menuNm": "신혼부부전용 주택구입자금대출"
        {"menuId": 24208, "url": "/html/24208.do"},       //"menuNm": "내집마련 디딤돌대출"
        //{"menuId": 24209, "url": "/html/24209.do"},       //"menuNm": "주거안정 주택구입자금대출"
        {"menuId": 24210, "url": "/html/24210.do"},       //"menuNm": "매입임대주택 보증금지원"
        {"menuId": 24211, "url": "/html/24211.do"},       //"menuNm": "행복주택 보증금 이자지원"
        {"menuId": 24212, "url": "/html/24212.do"},       //"menuNm": "보증금지원형 전세임대"
        {"menuId": 24213, "url": "/html/24213.do"},       //"menuNm": "저소득층 전세금대출보증 및 이자지원"

        {"menuId": 24214, "url": "/html/24214.do"},         //  청년전용 보증부 월세대출(추가정책)
        {"menuId": 24215, "url": "/html/24215.do"},         //  중소기업 취업청년 전월세보증금(추가정책)
        {"menuId": 24216, "url": "/html/24216.do"},         //  노후고시원거주자 주거이전대출(추가정책)
        {"menuId": 24217, "url": "/html/24217.do"},         //  보금자리론(추가정책)
        {"menuId": 24218, "url": "/html/24218.do"},         //  더 나은 보금자리론(추가정책)
        {"menuId": 24221, "url": "/html/24221.do"},         //  청년월세 한시 특별지원



        // {"menuId": 24300, "url": ""},       //"menuNm": "집수리 지원"
        {"menuId": 24301, "url": "/html/24301.do"},       //"menuNm": "주택개량 지원 서비스란?"
        {"menuId": 24302, "url": "/html/24302.do"},       //"menuNm": "햇살하우징"
        {"menuId": 24303, "url": "/html/24303.do"},       //"menuNm": "G 하우징"
        {"menuId": 24304, "url": "/html/24304.do"},       //"menuNm": "중증장애인 주택개조"
        {"menuId": 24305, "url": "/html/24305.do"},       //"menuNm": "농어촌 장애인 주택개조사업"
        // {"menuId": 24400, "url": ""},       //"menuNm": "주거비 및 금융지원"
        {"menuId": 24401, "url": "/html/24401.do"},       //"menuNm": "기타 복지서비스란?"
        {"menuId": 24402, "url": "/html/24402.do"},       //"menuNm": "국민기초생활보장제도"
        {"menuId": 24403, "url": "/html/24403.do"},       //"menuNm": "긴급복지지원"
        {"menuId": 24404, "url": "/html/24404.do"},       //"menuNm": "경기도형 긴급복지지원(무한돌봄사업)"
        {"menuId": 24405, "url": "/contents/list.do"},       //"menuNm": "시/군 자체 주거복지사업"

        {"menuId": 24406, "url": "/html/24406.do"},       //"menuNm": "생계지원"
        {"menuId": 24407, "url": "/html/24407.do"},       //"menuNm": "의료지원"
        {"menuId": 24408, "url": "/html/24408.do"},       //"menuNm": "주거지원"
        {"menuId": 24409, "url": "/html/24409.do"},       //"menuNm": "사회복지시설 이용지원"
        {"menuId": 24410, "url": "/html/24410.do"},       //"menuNm": "교육지원"
        {"menuId": 24411, "url": "/html/24411.do"},       //"menuNm": "연료비지원"
        {"menuId": 24412, "url": "/html/24412.do"},       //"menuNm": "해산비지원"
        {"menuId": 24413, "url": "/html/24413.do"},       //"menuNm": "장제비지원"
        {"menuId": 24414, "url": "/html/24414.do"},       //"menuNm": "전기요금지원"
        
        {"menuId": 24415, "url": "/html/24415.do"},       //"menuNm": "생계지원"
        {"menuId": 24416, "url": "/html/24416.do"},       //"menuNm": "의료지원"
        {"menuId": 24417, "url": "/html/24417.do"},       //"menuNm": "주거지원"
        {"menuId": 24418, "url": "/html/24418.do"},       //"menuNm": "교육지원"
        {"menuId": 24419, "url": "/html/24419.do"},       //"menuNm": "사례관리지원"
        {"menuId": 24420, "url": "/html/24420.do"},       //"menuNm": "시장군수 추가지원"
        {"menuId": 24421, "url": "/html/24421.do"},       //"menuNm": "시장군수 추가지원"

        {"menuId": 24422, "url": "/html/24422.do"},         //  주거사다리 지원(추가정책)
        
        // {"menuId": 25000, "url": ""},       //"menuNm": "내게 딱 맞는 주거",
        {"menuId": 25100, "url": "/jsp/myfavorite.do"},       //"menuNm": "내게 딱 맞는 주거 > 맞춤형 주거검색"
        // {"menuId": 26000, "url": ""},       // "menuNm": "공공사업현황",
        {"menuId": 26100, "url": "/board/20080700000001/list"},       //"menuNm": "공공임대주택 찾기"
        /*{"menuId": 26101, "url": ""},       //"menuNm": "입주자 모집공고"
        {"menuId": 26102, "url": ""},       //"menuNm": "연간공급계획"
        {"menuId": 26103, "url": ""},       //"menuNm": "기존 임대주택 찾기"
        {"menuId": 26104, "url": ""},       //"menuNm": "예비 입주자 대기현황"*/
        {"menuId": 26200, "url": ""},       //"menuNm": "공공분양주택 찾기"
        {"menuId": 26201, "url": ""},       //"menuNm": "입주자 모집공고"
        {"menuId": 26202, "url": ""},       //"menuNm": "연간공급계획"

        // {"menuId": 27000, "url": ""},       // "menuNm": "상담과 알림",
        {"menuId": 27100, "url": "/html/27100.do"},                 //"menuNm": "주거복지 상담안내"
        {"menuId": 27200, "url": "/html/27200.do"},                 //"menuNm": "주거복지 알림소개"
        {"menuId": 27300, "url": "/jsp/center.do"},       //"menuNm": "상담센터 안내"
        {"menuId": 27301, "url": "/jsp/center.do"},                 //"menuNm": "센터소개"
        {"menuId": 27302, "url": "/board/20041300000013/list"},     //"menuNm": "센터에서 알려드려요"
        {"menuId": 27400, "url": "/jsp/instinfo.do"},               //"menuNm": "관련기관 조회"

        // {"menuId": 28000, "url": ""},       // "menuNm": "정보나눔",
        {"menuId": 28100, "url": "/board/20041300000001/list"},       //"menuNm": "공지사항"
        {"menuId": 28101, "url": "/board/20041300000001/list"},       //"menuNm": "공공임대주택 지원"
        {"menuId": 28102, "url": "/board/20041300000001/list"},       //"menuNm": "주거비 및 금융지원"
        {"menuId": 28103, "url": "/board/20041300000001/list"},       //"menuNm": "주택개량 지원"
        {"menuId": 28104, "url": "/contents/list"},                   //"menuNm": "기타 복지서비스"
        {"menuId": 28200, "url": "/board/20041300000005/list"},       //"menuNm": "주거복지 자료실"
        {"menuId": 28201, "url": "/board/20041300000005/list"},       //"menuNm": "정보자료실"
        {"menuId": 28202, "url": "/board/20041300000003/list"},       //"menuNm": "주거복지 TIP"
        {"menuId": 28300, "url": "/board/20041300000007/list"},       //"menuNm": "우리동네 이야기"
        {"menuId": 28400, "url": "/board/20041300000011/list"},       //"menuNm": "우리속의 주거복지"
        {"menuId": 28401, "url": "/board/20041300000011/list"},       //"menuNm": "만화로 보는 주거복지"
        {"menuId": 28402, "url": "/board/20041300000006/list"},       //"menuNm": "미디어 및 보도자료"
        {"menuId": 28500, "url": "/board/20051100000001/list"},       //"menuNm": "함께만드는 주거복지"
        {"menuId": 28600, "url": "/board/20041300000010/list"},       //"menuNm": "묻고 답하기"
        {"menuId": 28700, "url": "/board/20041300000004/list"},       //"menuNm": "FAQ"

        // {"menuId": 29000, "url": ""},       // "menuNm": "마이페이지",
        {"menuId": 29100, "url": "/mypage/member_bookMark.do"},         //"menuNm": "관심정보"
        {"menuId": 29200, "url": "/mypage/member_notification.do"},     //"menuNm": "알림정보"
        {"menuId": 29300, "url": "/mypage/member_qna.do"},              //"menuNm": "묻고 답하기"
        {"menuId": 29400, "url": "/mypage/member_cnsl.do"},             //"menuNm": "상담신청 내역"
        {"menuId": 29500, "url": "/mypage/password_confirm.do"},        //"menuNm": "회원정보 수정"
        {"menuId": 29600, "url": "/mypage/member_out.do"},              //"menuNm": "회원탈퇴"

        {"menuId": 30100, "url": "/main/service_privacy.do"},           //"menuNm": "개인정보처리방침"
        {"menuId": 30200, "url": "/main/service_term.do"},             	//"menuNm": "홈페이지 이용약관"
        {"menuId": 30300, "url": "/main/service_mail.do"},        		//"menuNm": "이메일 무단수집 거부"
        {"menuId": 30400, "url": ""},               //"menuNm": "찾아오시는 길"
        {"menuId": 30500, "url": "/main/service_sitemap.do"},               //"menuNm": "찾아오시는 길"
        {"menuId": 30600, "url": "/main/service_center.do"},               //"menuNm": "센터소개"

        {"menuId": 31000, "url": "/jsp/search.do"},             //"menuNm": "통합검색"
        
        {"menuId": 51100, "url": "/html/51100.do"},       // 청년 매입임대
        {"menuId": 51200, "url": "/html/51200.do"},       // 경기행복주택(청년 등)
        {"menuId": 51300, "url": "/html/51300.do"},       // 경기행복주택 임대보증금 이자지원
        {"menuId": 51400, "url": "/html/51400.do"},       // 청년 기존주택 전세임대
        {"menuId": 51500, "url": "/html/51500.do"},       // 주거비 및 금융지원
        {"menuId": 51501, "url": "/html/51501.do"},       // 신혼희망타운전용 주택 담보 장기대출

    ]
};

var commonFn = {};
commonFn.convertCode = function () {
    var BASIC_CODE = {};
    var mapKeys = {
        // key: "code", value: "name"
        key: "menuId", value: "url"
    };
    return function () {
        var codes,
            return_code = {};

        if (arguments.length == 1) {
            codes = arguments[0];
        } else {
            BASIC_CODE = arguments[0];
            codes = arguments[1];
        }

        codes = $.extend(true, BASIC_CODE, codes);

        for (var k in codes) {
            if (codes.hasOwnProperty(k)) {
                return_code[k] = codes[k];
                return_code[k].map = function () {
                    var i = this.length,
                        map = {};

                    while (i--) {
                        // console.log("------------");
                        // console.log(this[i][mapKeys.key] );
                        // console.log(this[i][mapKeys.value] );
                        map[this[i][mapKeys.key]] = this[i][mapKeys.value];
                    }
                    return map;
                }.call(return_code[k]);
            }
        }

        return return_code;
    };
}();

var mappedUrlObj = commonFn.convertCode(URL);
// mappedUrlObj.contentList.map["21063"]


commonFn.navObj = {
    menu: MENU.list,
    path: [],
    selectedMenuDepth: null,
    // getNaviProgress: true,
    menuInfo: null,
    // popMore: 0,
    // lastItem: [],
    // tempPath: [],

    getNavi: function (c_menu, menuObj) {
        var _this = this;
        if (typeof menuObj === "undefined") {
            menuObj = _this.menu;
        }

        if (_this.menuInfo == null) {
            $.each(menuObj, function (idx, o) {
                // console.log("menu : "+menuObj[idx].menuNm);
                if (o.menuId == c_menu) {
                    _this.menuInfo = o;

                } else if (typeof o.children != "undefined" && o.children.length > 0) {
                    if (_this.menuInfo == null) {
                        _this.getNavi(c_menu, o.children);
                    }
                }
                // console.log(_this.path.length);
            });
        }
    },

    setNavi: function () {
        var _this = this;
        if (_this.menuInfo == null || _this.menuInfo.navId == "undefined" ){
        	
            if(document.URL.indexOf('member_step1') > 0){
                document.title = document.title + " > 본인인증"
            }
            if(document.URL.indexOf('member_step2') > 0){
                document.title = document.title + " > 약관동의"
            }
            if(document.URL.indexOf('member_step3') > 0){
                document.title = document.title + " > 개인정보입력"
            }
            if(document.URL.indexOf('member_step4') > 0){
                document.title = document.title + " > 회원가입완료"
            }

            if(document.URL.indexOf('login.do') > 0){
                document.title = document.title + " > 로그인"
            }

            if(document.URL.indexOf('member_age.do') > 0){
                document.title = document.title + " > 회원가입"
            }
            if(document.URL.indexOf('find_id_cert.do') > 0){
                document.title = document.title + " > 아이디 찾기(본인인증을 통한 찾기)"
            }
            if(document.URL.indexOf('find_id_info.do') > 0){
            	document.title = document.title + " > 아이디 찾기(가입정보로 찾기)"
            }
            if(document.URL.indexOf('find_pw_cert.do') > 0){
            	document.title = document.title + " > 비밀번호 찾기"
            }
        	
            return false;
        }

        var arr_path = _this.menuInfo.navId.split("_");
        $.each(arr_path, function(idx, vv){
            if (idx == 0){
                _this.path.push(_this.menu[parseInt(vv)]);
            }else{
                var tmpItem = _this.path[idx-1].children[parseInt(vv)];
                _this.path.push(tmpItem);
            }
        });

        // if (_this.path.length > 1 && (_this.path[0].level == 0 && _this.path[1].level == 0) ){
        /*
        if (_this.path.length > 1) {
            var spliceCnt = -1;
            $.each(_this.path, function (idx, o) {
                if (o.level == 0) {
                    spliceCnt++;
                }
            });
            // console.log("spliceCnt: "+spliceCnt);
            _this.path.splice(0, spliceCnt);
        }
        */

        var depth0_select = getNavSelect(MENU.list);
        if (depth0_select.length > 0) {
            $("#depth_0_select").html("<ul>" + depth0_select.join('') + "</ul>");
        }

        // console.log("path---------------------");
        $.each(_this.path, function (idx, o) {
            // console.log(o.menuNm, o.menuId, o.level);
            var menuNm = _this.path[idx].menuNm;
            if (_this.path[idx].depth4){
                menuNm = menuNm.replace(/ - /, '');
            }
            $("#depth_" + idx).text(menuNm);

            var arr_select = getNavSelect(_this.path[idx].children);
            if (arr_select.length > 0) {
                $("#depth_" + (idx + 1) + "_select").html("<ul>" + arr_select.join('') + "</ul>");
            }
        });

        var i = 3 - _this.path.length;
        while (i > 0) {
            $("#li_depth_" + (4 - i)).hide();
            i--;
        }

        // 상단메뉴 하이라이트
        var $addOnClassTarget = "";
        if (_this.path[0] != "") {
            if ($("#mn_" + _this.path[0].menuId).length > 0) {
                $addOnClassTarget = $("#mn_" + _this.path[0].menuId);
                if (!$addOnClassTarget.hasClass("active")) {
                    $addOnClassTarget.addClass("active");
                }
            }
        }

        //모바일메뉴 하이라이트
        var searchMenuForNavi = MENU_ID;
        if (commonFn.navObj.path.length == 4) {
            searchMenuForNavi = commonFn.navObj.path[2].menuId;
        } else {
            searchMenuForNavi = commonFn.navObj.path[commonFn.navObj.path.length - 1].menuId;
        }

        var menu_target = $("#mn_" + searchMenuForNavi).parents("li");
        var arr_target = [];
        Array.prototype.forEach.call(menu_target, function (ele) {
            arr_target.push(ele);
        });
        arr_target.reverse();

        $.each(arr_target, function (idx, ele) {
            if (idx == 0) {
                $(ele).find(".dp2_bk").show();
            } else {
                $(ele).children('ul').css("display", "block");
            }
            $(ele).addClass("on");
        });

        if (searchMenuForNavi == "21251") {      //자주묻는 질문 모바일 메뉴 하이라이트
            /* 공공임대주택, 신혼부부청년주거, 주거비지원, 주택개량, 주거생활, 주택금융, 긴급복지지원제도, */
            var postCls = $("#postCls").val() == "" ? "all" : $("#postCls").val();
            $("#mn_21251_" + postCls).parent("li").addClass("on");
        }

        // console.log( "_this.path:" );
        // console.log( _this.path );
        var titlePath = ["HOME"];
        $.each(_this.path, function (idx, o) {
            titlePath.push(o.menuNm);
        });

        document.title = titlePath.join(" > ");

        if(document.URL.indexOf('member_step1') > 0){
            document.title = document.title + " > 본인인증"
        }
        if(document.URL.indexOf('member_step2') > 0){
            document.title = document.title + " > 약관동의"
        }
        if(document.URL.indexOf('member_step3') > 0){
            document.title = document.title + " > 개인정보입력"
        }
        if(document.URL.indexOf('member_step4') > 0){
            document.title = document.title + " > 회원가입완료"
        }

        if(document.URL.indexOf('login.do') > 0){
            document.title = document.title + " > 로그인"
        }

        if(document.URL.indexOf('member_age.do') > 0){
            document.title = document.title + " > 회원가입"
        }

        if(document.URL.indexOf('find_id_cert.do') > 0){
            document.title = document.title + " > 아이디 찾기"
        }
        
        function getNavSelect(list) {
            //todo: 재귀로 찾아야할거같음;;;
            var arr_select = [];
            $.each(list, function (idx, o) {
                //get link href
                var URL = mappedUrlObj.contentList.map[o.menuId];
                if (typeof URL == "undefined") {
                    if (typeof o.children == "undefined" || o.children.length == 0) {
                        // URL = "#n";
                        URL = "javascript:void(0);";
                    } else {
                        //현재 리스트를 가져와서 재귀로 돌면서 주소가 나오는 첫번째 자식을 찾아야하나???
                        URL = mappedUrlObj.contentList.map[o.children[0].menuId];

                        if (typeof URL == "undefined") {
                            // URL = "#n";
                            // URL = "javascript:void(0);";

                            if (typeof o.children[0].children == "undefined" || o.children[0].children.length == 0) {
                                // URL = "#n";
                                URL = "javascript:void(0);";
                            } else {
                                URL = mappedUrlObj.contentList.map[o.children[0].children[0].menuId];
                            }
                        }
                    }
                }

                // mappedUrlObj.contentList.map[o.menuId]
                arr_select.push("<li><a href=\"" + URL + "\" class=\"select_item\" data-menuId=\"" + o.menuId + "\">" + o.menuNm + "</a></li>");
            });

            return arr_select;
        }
    },

    init: function (c_menu) {
        if (typeof c_menu === "undefined") {
            console.log("현재 메뉴ID가 지정되지 않았습니다.");
            return false;
        }

        var _this = this;
        _this.getNavi(c_menu, _this.menu);
        _this.setNavi();
        _this.initEvent();
    },

    initEvent: function () {
        var _this = this;
        $(".s_nvg").on("click", "a.selected", function (e) {
            var evt = e ? e : window.event;
            var targetId = e.target.id;
            var arr_id = targetId.split("_");
            // console.log(e);
            // console.log("arr_id : " + arr_id );

            cancelBubble(evt);

            if ($(this).parents("li").children("div").length > 0) {
                if ($(this).parents("li").hasClass('on')) {
                    $(this).parents("li").removeClass('on');
                    $(this).parents("li").find('div').slideUp(120);
                } else {
                    if (_this.selectedMenuDepth == null) {

                    } else {
                        if (_this.selectedMenuDepth != arr_id[1]) {
                            $('div#depth_' + _this.selectedMenuDepth + "_select").parents("li").removeClass('on');
                            $('div#depth_' + _this.selectedMenuDepth + "_select").slideUp(120);
                        }
                    }
                    _this.selectedMenuDepth = arr_id[1];

                    $(this).parents("li").addClass('on');
                    $(this).parents("li").find('div').slideDown(120);
                }
            }
        });

        $(".s_nvg").on("blur", "a.select_item", function () {
            $(this).parents("ul").parents("li").removeClass('on');
            $(this).parents("ul").parents("li").find('div').slideUp(120);
        });

        $('body').click(function () {
            if ($(".s_nvg > div > ul > li").hasClass('on')) {
                $(".s_nvg > div > ul > li").removeClass('on');
                $(".s_nvg > div > ul > li > div").slideUp(120);
            }
        });

        function cancelBubble(e) {
            var evt = e ? e : window.event;
            if (evt.stopPropagation) {        //W3C
                evt.stopPropagation();
            } else {       //IE
                evt.cancelBubble = true;
            }
        }
    }
};


/*
메인 {"menuId":21052,"url":"/main.do"}
로그인 {"menuId":21063,"url":"/main/login.do"}
회원가입 {"menuId":21065,"url":"/main/member_step1.do"}
마이페이지 {"menuId":21054,"url":"/main/password_confirm.do"}
 */

commonFn.html5tel = function () {
    var deviceType = commonFn.deviceType();
    if (deviceType == "mobile") {
        return true;
    } else {
        alert("전화연결은 모바일에서 가능합니다.");
        return false;
    }
};

commonFn.deviceType = function () {
    var filter = "win16|win32|win64|mac";
    if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
            return "mobile";
        } else {
            return "PC";
        }
    }

};