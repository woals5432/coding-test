-- 코드를 입력하세요

SELECT USER_ID,NICKNAME,sum(a.PRICE) as TOTAL_SALES 
from USED_GOODS_BOARD a
inner join USED_GOODS_USER b
on a.WRITER_ID = b.USER_ID
where a.STATUS = 'done'
group by a.WRITER_ID
having sum(price) >= 700000 
order by TOTAL_SALES asc

/*
SELECT *,sum(price)
from USED_GOODS_BOARD a
inner join USED_GOODS_USER b
on a.WRITER_ID = b.USER_ID
where a.STATUS = 'done'
group by a.WRITER_ID */

