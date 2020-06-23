#VYOM SHAH
#CS 513
#HOMEWORK 4 - NAIVE BAYES
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

#CLASSIFYING INTO TRAINING AND TEST DATA
idx<-sort(sample(nrow(cancerdata_missing),as.integer(.70*nrow(cancerdata_missing))))
training<-cancerdata_missing[idx,-1]
test<-cancerdata_missing[-idx,-1]

#IMPLEMENT NAIVE BAYES
library(class)
#install.packages('e1071')
library(e1071)
naive_imp<-naiveBayes(formula=Class ~.,data=training)
naive_predict<-predict(naive_imp,test)

#PRINT
table(NAIVE=naive_predict,class=test$Class)

#CALCULATE THE ERROR AND FINDING THE ACCURACY
error=sum(naive_predict!=test$Class)
error_rate<-error/length(naive_predict)
accuracy<-100-(error_rate*100)

error
error_rate
accuracy
