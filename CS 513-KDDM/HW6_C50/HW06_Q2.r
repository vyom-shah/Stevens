#VYOM SHAH
#CS 513
#HOMEWORK 5
#CWID-10446209
#Using C5.0 to develop a classification model

rm(list = ls())
cancer_data=read.csv("C:/Users/vyom/Desktop/SIT/CS513/Assignments/breast-cancer-wisconsin.data.csv")
View(cancer_data)
#CREATING RANDOM INDEXES
idx<-sort(sample(nrow(cancer_data),as.integer((.70*nrow(cancer_data)))))
train_data<-cancer_data[idx,]
test_data<-cancer_data[-idx,]
#install.packages("C50")
library(C50)
C50_class<-C5.0(factor(Class)~.,data=train_data)
summary(C50_class)
plot(C50_class)
#SCORING
C50_prediction<-predict(C50_class,test_data,type="class")
#CREATING THE FREQUENCY TABLE
table(actual=test_data[,11],C50_prediction)
#FINDING ACCURACY
match<-(test_data[,11]==C50_prediction)*100
accuracy<-sum(match)/length(match)
accuracy
#ERROR RATE
err<-(test_data[,11]!=C50_prediction)
error_rate<-sum(err)/length(err)
error_rate