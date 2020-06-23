#VYOM SHAH
#CS 513
#HOMEWORK 8
#CWID-10446209
#ANN

#CLEAN THE ENVIRONMENT
rm(list = ls())

#LOAD THE DATA
cancerData<-read.csv("C:/Users/vyom/Desktop/SIT/CS513/Assignments/Assignment8/wisc_bc_ContinuousVar.csv",na.strings = " ?")

#REMOVE THE MISSING VALUES
cancerData1<-data.frame(lapply(na.omit(cancerData),as.numeric))

#SORTING THE DATA IN TRAINING AND TESTING
index <- seq (1,nrow(cancerData1),by=5)
test<- cancerData1[index,-1]
training<-cancerData1[-index,-1]

#USING THE LIBRARY NEURALNET
library("neuralnet")

#APPLYING ANN
class(training$diagnosis)
net_Cancer<- neuralnet( diagnosis~. ,training, hidden=5, threshold=0.01)

#PLOTTING THE NEURANET
plot(net_Cancer)

ann <-compute(net_Cancer , test[,-1])
ann$net.result 

ann_cat<-ifelse(ann$net.result <1.5,1,2)
length(ann_cat)

table(Actual=test$diagnosis,predition=ann_cat)

#CALCULATING THE ERROR
wrong<- (test$diagnosis!=ann_cat)
error_rate<-sum(wrong)/length(wrong)
error_rate