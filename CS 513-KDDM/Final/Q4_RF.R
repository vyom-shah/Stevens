#CS513- Knowledge Discovery and Data Mining
#Vyom Shah 
#10446209
#Q4-Random Forest
library(randomForest)
#Clear the memory
rm(list=ls())

# Load IBM_Attrition_v3 data file
IBM <- read.csv("C:/Users/vyom/Desktop/SIT/CS513/Final/IBM_Attrition_v3.csv",na.strings = " ?")
summary(IBM)

# View data file 
View(IBM)

#Factor the data set
IBM<-na.omit(IBM)
summary(IBM)

#Spliting into training and testin
index<-seq(1,nrow(IBM),by=3)
test<-IBM[index,]
training<-IBM[-index,]
dev.off()

#Implement Random Forest
model<- randomForest( Attrition~., data=training, importance=TRUE, ntree=1000)
importance(model)
varImpPlot(model)

#Prediction using test 
Prediction <- predict(model, test)

#Forming the confusin matrix
table(actual=test$Attrition,Prediction)

#Showing the error rate
wrong<- (test$Attrition!=Prediction )
error_rate<-sum(wrong)/length(wrong)
error_rate