INPUT n,j,k
SET WINDOW 0,k,0,500
FOR L=1 TO k
   LET i=0
   FOR d=1 TO 1000
      LET i=i+((MOD(n,10^d)-MOD(n,10^(d-1)))/10^(d-1))^j
   NEXT d
   PLOT LINES: L,i;
   LET n=i
NEXT L
END
