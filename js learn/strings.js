/*strings functiion

Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

1-String length=> renvoi la longueur 

2-String charAt()=>prend un number et renvoi le chart a cette position

3-String charCodeAt()=>renvoi le cod utf16 de cette caractere

4-String at()=>joue le meme role que chartAt() et est supporte par les navigateur modern,
il prend aussi des valeur negative a la difference de charAt
5-String [ ]

6-String slice()=>extrait une parti dune chaine de caractere et la retourne (slice(start, end))
retenons la position de la fin nest pas inclus
notons aussi que les valeur negative aussi son possible 

7-String substring()=> similaire a slice juste que lui il traite les valeur negative comme zero

8-String substr()=> similaire au slice juste que li pren en paremetre le start et
 le lenght subtr(start,lenght)

String Search Methods

String Templates
9-String toUpperCase()

10-String toLowerCase()

11-String concat() premet de concatener deux strings ex:text1.concat("",text2)

12-String trim()=> premet denlever les espace au debut et a la fin dune chaine de caractere

13-String trimStart()=>enleve lespace au debut dune chaine de caractere

14-String trimEnd()=>enleve lespace a la fin dune chaine de caractere

15-String padStart()=>permet dinserer un espace au un element au debut dun string  
ex: yourString.padStart(lenght,"element de pad ")

16-String padEnd()=>permet dinserer un espace au un element a la fin dun string  
ex: yourString.padEnd(lenght,"element de pad ")

17-String repeat()=>repete un elemen la nombre de fois que tu lui aurai donner en parammetre

18-String replace()=>remplace un string cible avec un string que tu lui aurais donner em parametre 
ex:replace(element a remplacer , le remplaceur )
-replace() est case sensitive donc utiliser le //i flag  
-utlise le //g pour remplacer tout les matchs de la valeur a remplacer  

19-String replaceAll()=> 

20-String split()=> convertis un string en array




String Search Methods

String indexOf()
String lastIndexOf()
String search()


Basic String Methods
String Templates

String match()
String matchAll()
String includes()
String startsWith()
String endsWith()

*/

'bonjour '
