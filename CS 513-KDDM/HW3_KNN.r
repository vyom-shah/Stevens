#VYOM SHAH
#CS 513
#HOMEWORK 3 - KNN
#CWID-10446209

#CLEAN THE MEMORY
rm(list=ls())

#LOAD THE DATA
breastcancerdata <- read.csv("C:/Users/vyom/Desktop/SIT/CS513/Assignments/breast-cancer-wisconsin.data.csv",na.string="?")
View(breastcancerdata)

#REMOVE MISSING VALUES
cancerdata_missing<-na.omit(breastcancerdata)
View(cancerdata_missing)

#CONVERT CLASS COLUMN TO FACTOR
cancerdata_missing$Class<-factor(cancerdata_missing$Class, levels = c(2,4), labels = c("benign","malignant"))
View(cancerdata_missing$Class)
is.factor(cancerdata_missing$Class)

#DIVIDE DATA INTO TRAINING AND TEST
idx<-sort(sample(nrow(cancerdata_missing),as.integer(.70*nrow(cancerdata_missing))))
training<-cancerdata_missing[idx,]
test<-cancerdata_missing[-idx,]
summary(test)
summary(training)

#PREDICT DIAGNOSIS CLASS USING KNN
library(kknn)
library(class)

k3<-kknn(formula = Class~., training, test, k=3, kernel = "triangular")
fit<-fitted(k3)
table(test$Class,fit)

k5<-kknn(formula = Class~., training, test, k=5, kernel = "triangular")
fit<-fitted(k5)
table(test$Class,fit)

k10<-kknn(formula = Class~., training, test, k=10, kernel = "triangular")
fit<-fitted(k10)
table(test$Class,fit)