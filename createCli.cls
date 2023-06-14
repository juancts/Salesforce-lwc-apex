public with sharing class createCli {
    @AuraEnabled
    public static Cliente__c createCliente( Cliente__c cli) {
                try {
                    insert cli;
                    return cli;
                } catch (Exception e) {
                    throw new AuraHandledException(e.getMessage());
                }
    }
}
