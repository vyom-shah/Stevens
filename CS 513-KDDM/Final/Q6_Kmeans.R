#CS513- Knowledge Discovery and Data Mining
#Vyom Shah 
#10446209
#Q6-k-means

#Clear the memory
rm(list=ls())

#Load IBM_Attrition_v3 data file
IBM <- read.csv("C:/Users/vyom/Desktop/SIT/CS513/Final/IBM_Attrition_v3.csv",na.strings = " ?")
summary(IBM)

#View data file 
View(IBM)

#To factor the dataset
IBM<-na.omit(IBM)
summary(IBM)

#Removing the columns
IBM1<-IBM[-3]
IBM1<-IBM1[-5]

#Applying kmeans
kmeans_2<- kmeans(IBM1,2,nstart = 10)
kmeans_2$cluster

#Creating the confusin matrix
table(kmeans_2$cluster,IBM[,6])