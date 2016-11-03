INPUT n,j,k
FOR l=1 TO k
   LET i=0
   FOR d=1 TO 1000
      LET i=i+((MOD(n,10^d)-MOD(n,10^(d-1)))/10^(d-1))^j
   NEXT d
   PRINT l,i
   LET n=i
NEXT l
END
