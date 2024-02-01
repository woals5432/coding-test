-- 코드를 입력하세요
/*
SELECT a.PRODUCT_ID,PRODUCT_NAME,sum(price * AMOUNT) as TOTAL_SALES
from FOOD_PRODUCT a
inner join FOOD_ORDER b 
on a.PRODUCT_ID = b.PRODUCT_ID
where month(PRODUCE_DATE) = '05'
order by TOTAL_SALES desc, PRODUCT_ID asc
*/

SELECT a.PRODUCT_ID,PRODUCT_NAME,sum(amount * price) as TOTAL_SALES
from FOOD_PRODUCT a
inner join FOOD_ORDER b 
on a.PRODUCT_ID = b.PRODUCT_ID
where month(PRODUCE_DATE) = '05'
group by a.PRODUCT_CD
order by TOTAL_SALES desc, PRODUCT_ID asc