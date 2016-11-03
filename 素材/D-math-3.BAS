DECLARE EXTERNAL FUNCTION d
PRINT d(2,3,5)
END
EXTERNAL FUNCTION d(n,j,k)
FOR l=1 TO k
   LET i=0
   FOR d=1 TO 1000
      LET i=i+(INT(n/10^(d-1))-10*INT(n/10^d))^j
   NEXT d
   LET n=i
NEXT l
LET d=i
END FUNCTION
