#VYOM SHAH
#CS 513
#HOMEWORK 9
#CWID-10446209
#H CLUSTER AND K MEANS

# CLEARING THE ENVIRONMENT
rm(list = ls())

# LOAD THE DATA
cancer_data<-read.csv("C:/Users/vyom/Desktop/SIT/CS513/Assignments/Assignment9/wisc_bc_ContinuousVar.csv",na.strings = '?')

#VIEW THE DATA
View(cancer_data)

#INTERNAL STRUCTURE OF BCD
str(cancer_data)

#DELETE MISSING VALUES
cancer_data2<-na.omit(cancer_data)
cancer_data3<-na.omit(cancer_data)

#USE HCLUST TO CLUSTER THE DATA 
cancer_data2<-cancer_data2[-1]
cancer_dist<-dist(cancer_data2[,-1])
hclust_results<-hclust(cancer_dist)
#plot(hclust_results)
hclust_2<-cutree(hclust_results,2)
table(hclust_2,cancer_data2[,1])

#USE KMEANS TO CLUSTER
table(cancer_data$diagnosis)
cancer_data3<-cancer_data3[-1]
kmeans_2<- kmeans(cancer_data3[,-1],2,nstart = 10)
kmeans_2$cluster
table(kmeans_2$cluster,cancer_data3[,1])


