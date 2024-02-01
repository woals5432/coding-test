-- 코드를 입력하세요

SELECT CATEGORY,max(price) as MAX_PRICE,PRODUCT_NAME
from FOOD_PRODUCT 
WHERE (CATEGORY, PRICE) IN (
                            SELECT CATEGORY, MAX(PRICE)
                            FROM FOOD_PRODUCT
                            GROUP BY CATEGORY
                            HAVING CATEGORY IN ('국', '김치', '식용유', '과자')
)
group by category
order by MAX_PRICE desc

/*
select * from food_product
order by price desc*/