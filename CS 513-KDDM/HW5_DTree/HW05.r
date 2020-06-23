#VYOM SHAH
#CS 513
#HOMEWORK 5
#CWID-10446209

rm(list=ls()) 
library(rpart)
library(rpart.plot)
library(RColorBrewer)
library(rattle)

cancer_data=read.csv("C:/Users/vyom/Desktop/SIT/CS513/Assignments/breast-cancer-wisconsin.data.csv")

cancer_data$Class <- factor(cancer_data$Class, levels = c(2,4), labels = c("Benign", "Malignant")) 
set.seed(111)

#CREATING RANDOM INDEXES
idx<-sort(sample(nrow(cancer_data),as.integer((.30*nrow(cancer_data)))))

train_data <- cancer_data[-idx,]

test_data =cancer_data[idx,]

#GROWING THE TREE
dev.off()
Cart_class<- rpart( Class~., data =train_data )
summary(Cart_class)

#PLOTTING THE GRAPHS
rpart.plot(Cart_class)

#SCORING
Cart_prediction<-predict( Cart_class ,test_data , type="class" )

#CREATING THE FREQUENCY TABLE
table(Actual=test_data[,11],CART=Cart_prediction)
Cart_prediction2<-predict(Cart_class,test_data)
str(Cart_prediction2)
Cart_prediction_cat<-ifelse(Cart_prediction2[,1]<=.5,'Malignant','Benign')
table(Actual=test_data[,11],CART=Cart_prediction_cat)

#ACCURACY IN PERCENTAGE
match<- (test_data[,11]==Cart_prediction)*100
accuracy<-sum(match)/length(match)
accuracy

#ERROR RATE
err<- sum(test_data[,11]!=Cart_prediction)
error_rate<-err/length(test_data[,11])
error_rate

library(rpart.plot)
prp(Cart_class)

#Fancier graph
fancyRpartPlot(Cart_class) 