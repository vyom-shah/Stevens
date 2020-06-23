#CS513- Knowledge Discovery and Data Mining
#Vyom Shah 
#10446209
#Q5-HClust
#Clear the memory
rm(list=ls())

# Load IBM_Attrition_v3 data file
IBM <- read.csv("C:/Users/vyom/Desktop/SIT/CS513/Final/IBM_Attrition_v3.csv",na.strings = " ?")
summary(IBM)
View(IBM)

#To factor the data set
IBM<-na.omit(IBM)
summary(IBM)

#Remove the columns
IBM1<-IBM[-3]
IBM1<-IBM1[-5]
IBM_dist<-dist(IBM1)

#Implement Hcluster
hclust_results<-hclust(IBM_dist)

#Plot the cluster
plot(hclust_results)
hclust_2<-cutree(hclust_results,2)

#Forming the confusin matrix
table(hclust_2,IBM[,6])