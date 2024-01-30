-- 코드를 입력하세요
SELECT a.APNT_NO,b.PT_NAME,a.PT_NO,a.MCDP_CD,c.DR_NAME,a.APNT_YMD
from APPOINTMENT a
inner join PATIENT b
on a.PT_NO = b.PT_NO
inner join DOCTOR c
on a.MDDR_ID = c.DR_ID
where a.MCDP_CD = 'CS' and DATE_FORMAT(a.APNT_YMD, '%Y-%m-%d') = '2022-04-13'
and a.APNT_CNCL_YN = 'N'
order by a.APNT_YMD
;