#CS513- Knowledge Discovery and Data Mining
#Vyom Shah 
#10446209
#Q4-KNN

#Clear the memory
rm(list=ls())

# Load Adult_KNN data file CSV
adultincome <- read.csv("C:/Users/vyom/Desktop/SIT/CS513/Midterm/adult_income_knn.csv",na.strings = " ?")
summary(adultincome)

# View data file 
View(adultincome)

#Removing the missing values
ai_miss<-na.omit(adultincome)
View(ai_miss)
summary(ai_miss)

#Training and testing data
index <- seq(1,nrow(ai_miss),by=5)
test<-ai_miss[index,]
training <-ai_miss[-index,]
summary(test)
summary(training)

#Applying knn 
library(kknn)
library(class)
k1<-kknn(formula = Income~., training, test, k=1, kernel = "rectangular")
fit<-fitted(k1)
table(test$Income,fit)

#error checking
knn_error<-sum(fit!=test$Income)
knn_e1<-knn_error/length(fit)
print(paste("Error Rate :" , knn_e1))


#Accuracy
acc<-100-(knn_e1*100)
print(paste("Accuracy :" , acc))

k3<-kknn(formula = Income~., training, test, k=3, kernel = "rectangular")
fit<-fitted(k3)
table(test$Income,fit)

#error checking
knn_error<-sum(fit!=test$Income)
knn_e3<-knn_error/length(fit)
print(paste("Error Rate :" , knn_e3))

#Accuracy
acc<-100-(knn_e3*100)
print(paste("Accuracy :" , acc))

k5<-kknn(formula = Income~., training, test, k=5, kernel = "rectangular")
fit<-fitted(k5)
table(test$Income,fit)

#error checking
knn_error<-sum(fit!=test$Income)
knn_e5<-knn_error/length(fit)
print(paste("Error Rate :" , knn_e5))

#Accuracy
acc<-100-(knn_e5*100)
print(paste("Accuracy :" , acc))