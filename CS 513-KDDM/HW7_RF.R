#VYOM SHAH
#CS 513
#HOMEWORK 7
#CWID-10446209
#Random Forest

#CLEARING
rm(list = ls())

#LOAD CSV FILE
cancer_data=read.csv("C:/Users/vyom/Desktop/SIT/CS513/Assignments/breast-cancer-wisconsin.data.csv")

#VIEW DATA
View(cancer_data)

#CONVERT TO FACTOR
cancer_data[sapply(cancer_data, is.integer)]<-lapply(cancer_data[sapply(cancer_data, is.integer)],as.factor)

#KNOW INTERNAL STRUCTURE
str(cancer_data)

#SEED
set.seed(1234)

#CREATING TESTING AND TRAINING DATASET REMOVING 1ST COLUMN
index<-sort(sample(nrow(cancer_data),round(.30*nrow(cancer_data))))
training<-cancer_data[-index,c(-1)]
test<-cancer_data[index,c(-1)]

#IMPLEMENT RANDOM FOREST
library(randomForest)
fit <- randomForest( Class~., data=training, importance=TRUE, ntree=1000)
importance(fit)
varImpPlot(fit)
Prediction <- predict(fit, test)
table(actual=test[,10],Prediction)

#MEASURE ERROR RATE
wrong<- (test[,10]!=Prediction )
errorRate<-sum(wrong,na.rm = TRUE)/length(wrong)
errorRate 

#MEASURING ACCURACY RATE
accuracy <- 1-errorRate
accuracy

#DIAGNOSE IMPORTANT FEATURES
#FROM THE IMPORTANCE PLOT, WE CAN CONCLUDE THAT F6, F2 AND F3 ARE IMPORTANT FEATURES OF THE DATA SET